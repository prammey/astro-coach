// Turns mathematical notation into the plain-Unicode style the rest of
// Astro Coach uses.
//
// The app renders question text as plain text — there is no LaTeX
// renderer — and the existing MCQ bank writes maths as ordinary symbols:
//
//   1.8 × 10⁹ sources        luminosity L₀        α ≈ 0h, δ = 60°
//
// A model reading a PDF will often reach for LaTeX instead, which would be
// shown to students literally, backslashes and all. This module converts
// the common cases so imported questions match the existing bank.
//
// It is deliberately conservative: anything it does not recognise is left
// exactly as it was, because a stray backslash a human can spot in the
// review screen is far better than mangled physics.

// --- Symbol tables ---------------------------------------------------------

/// Greek letters and operators, longest names first so that \Rightarrow is
/// not half-matched by \to.
const COMMANDS: Array<[string, string]> = [
  // Greek — capitals before lowercase so \Delta is not matched as \delta.
  ["\\Alpha", "Α"], ["\\Beta", "Β"], ["\\Gamma", "Γ"], ["\\Delta", "Δ"],
  ["\\Epsilon", "Ε"], ["\\Theta", "Θ"], ["\\Lambda", "Λ"], ["\\Mu", "Μ"],
  ["\\Pi", "Π"], ["\\Sigma", "Σ"], ["\\Phi", "Φ"], ["\\Psi", "Ψ"],
  ["\\Omega", "Ω"],
  ["\\alpha", "α"], ["\\beta", "β"], ["\\gamma", "γ"], ["\\delta", "δ"],
  ["\\epsilon", "ε"], ["\\varepsilon", "ε"], ["\\zeta", "ζ"], ["\\eta", "η"],
  ["\\theta", "θ"], ["\\vartheta", "θ"], ["\\iota", "ι"], ["\\kappa", "κ"],
  ["\\lambda", "λ"], ["\\mu", "μ"], ["\\nu", "ν"], ["\\xi", "ξ"],
  ["\\pi", "π"], ["\\rho", "ρ"], ["\\sigma", "σ"], ["\\tau", "τ"],
  ["\\upsilon", "υ"], ["\\phi", "φ"], ["\\varphi", "φ"], ["\\chi", "χ"],
  ["\\psi", "ψ"], ["\\omega", "ω"],

  // Relations and operators.
  ["\\approx", "≈"], ["\\propto", "∝"], ["\\equiv", "≡"], ["\\neq", "≠"],
  ["\\leq", "≤"], ["\\geq", "≥"], ["\\le", "≤"], ["\\ge", "≥"],
  ["\\ll", "≪"], ["\\gg", "≫"], ["\\sim", "~"],
  ["\\times", "×"], ["\\cdot", "·"], ["\\div", "÷"],
  ["\\pm", "±"], ["\\mp", "∓"],
  ["\\infty", "∞"], ["\\partial", "∂"], ["\\nabla", "∇"],
  ["\\int", "∫"], ["\\sum", "Σ"], ["\\prod", "Π"], ["\\sqrt", "√"],
  ["\\Rightarrow", "⇒"], ["\\Leftarrow", "⇐"],
  ["\\rightarrow", "→"], ["\\leftarrow", "←"], ["\\to", "→"],
  ["\\odot", "☉"], ["\\oplus", "⊕"],
  ["\\degree", "°"], ["\\circ", "°"],
  ["\\%", "%"], ["\\&", "&"], ["\\_", "_"], ["\\#", "#"],
];

const SUPERSCRIPTS: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "−": "⁻", "(": "⁽", ")": "⁾",
  n: "ⁿ", i: "ⁱ",
};

const SUBSCRIPTS: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "−": "₋", "(": "₍", ")": "₎",
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ",
  n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
};

/// Converts a run of characters to super- or subscript, or returns null if
/// any character has no Unicode equivalent — in which case the original is
/// left alone rather than half-converted.
function toScript(text: string, table: Record<string, string>): string | null {
  let out = "";
  for (const character of text) {
    const mapped = table[character];
    if (!mapped) return null;
    out += mapped;
  }
  return out;
}

// --- Conversion ------------------------------------------------------------

/// Rewrites LaTeX-style maths as the plain Unicode the app renders.
///
/// Safe to run on text that contains no LaTeX at all: text already written
/// in Unicode passes through untouched.
export function toUnicodeMath(input: string): string {
  let text = input;

  // Math-mode delimiters carry no meaning once the contents are Unicode.
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, "$1");
  text = text.replace(/\$([^$\n]*?)\$/g, "$1");
  text = text.replace(/\\\((.*?)\\\)/g, "$1");
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, "$1");

  // Wrappers that only affect typesetting.
  text = text.replace(/\\(?:text|mathrm|mathbf|mathit|operatorname)\{([^{}]*)\}/g, "$1");
  text = text.replace(/\\left|\\right/g, "");

  // Fractions become a slash, which is how the existing bank writes them.
  // Run twice so one level of nesting is handled.
  const frac = /\\(?:d|t)?frac\{([^{}]*)\}\{([^{}]*)\}/g;
  text = text.replace(frac, "($1)/($2)").replace(frac, "($1)/($2)");
  // Parentheses around a single term add nothing.
  text = text.replace(/\((\w+)\)\/\((\w+)\)/g, "$1/$2");

  // Named commands. Longest first so \varepsilon beats \varepsilon's prefix.
  for (const [command, symbol] of [...COMMANDS].sort((a, b) => b[0].length - a[0].length)) {
    text = text.split(command).join(symbol);
  }

  // Braced exponents and indices: 10^{15} -> 10¹⁵, v_{esc} left alone.
  text = text.replace(/\^\{([^{}]+)\}/g, (whole, body: string) =>
    toScript(body, SUPERSCRIPTS) ?? whole,
  );
  text = text.replace(/_\{([^{}]+)\}/g, (whole, body: string) =>
    toScript(body, SUBSCRIPTS) ?? whole,
  );

  // Bare exponents and indices: 10^9 -> 10⁹, L_0 -> L₀.
  // A run of digits is taken together so 10^15 becomes 10¹⁵, not 10¹5.
  text = text.replace(/\^(-?\d+|[a-zA-Z])/g, (whole, body: string) =>
    toScript(body, SUPERSCRIPTS) ?? whole,
  );
  text = text.replace(/_(-?\d+|[a-zA-Z])/g, (whole, body: string) =>
    toScript(body, SUBSCRIPTS) ?? whole,
  );

  // Spacing commands.
  text = text.replace(/\\[,;:!]/g, " ");
  text = text.replace(/\\quad|\\qquad/g, "  ");

  // Tidy the whitespace those substitutions can leave behind, without
  // touching line breaks — question layout matters.
  text = text.replace(/[^\S\n]{2,}/g, " ");
  text = text.replace(/[^\S\n]+\n/g, "\n");

  return text;
}

/// Convenience for optional fields.
export function toUnicodeMathOrNull(input: string | null | undefined): string | null {
  if (input === null || input === undefined) return null;
  const converted = toUnicodeMath(input);
  return converted.trim() === "" ? null : converted;
}

/// True when text still contains LaTeX we did not convert — used by the
/// importer to flag a question for a human rather than publish it looking
/// wrong.
export function hasLeftoverLatex(text: string): boolean {
  return /\\[a-zA-Z]{2,}|\$|\\\(|\\\[|\^\{|_\{/.test(text);
}
