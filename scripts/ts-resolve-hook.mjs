// Lets plain `node` import the project's TypeScript modules, which use
// extensionless relative imports ("./usaaao_mcqs", "./explanations").
// Node strips types natively but never guesses extensions, so this hook
// retries a failed relative/absolute import with ".ts" and "/index.ts".
// The "@/..." alias (see tsconfig.json paths) points at src/.
const SRC_URL = new URL("../src/", import.meta.url);

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    specifier = new URL(specifier.slice(2), SRC_URL).href;
  }
  const isPath = specifier.startsWith(".") || specifier.startsWith("/") || specifier.startsWith("file:");
  if (isPath && !/\.(ts|tsx|js|mjs|cjs|json)$/i.test(specifier)) {
    try { return await nextResolve(specifier + ".ts", context); } catch {}
    try { return await nextResolve(specifier + "/index.ts", context); } catch {}
  }
  return nextResolve(specifier, context);
}
