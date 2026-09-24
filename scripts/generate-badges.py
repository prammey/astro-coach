#!/usr/bin/env python3
"""Generates the dashboard badge art (public/badges/*.svg) in one consistent
sticker style: a gradient shape, a thick dark outline, a glossy highlight,
sparkles, and a simple icon per badge.

  python3 scripts/generate-badges.py

To add a badge: add an entry to `icons` below (shape, two gradient colours,
icon drawing), add its definition to src/lib/progress/badges.ts, and re-run.
"""
import math, os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "badges")
INK = "#1a1446"
os.makedirs(OUT, exist_ok=True)

# ---------------------------------------------------------------- shapes
def polygon(n, r, rot=-90, cx=100, cy=100):
    pts = []
    for i in range(n):
        a = math.radians(rot + 360 * i / n)
        pts.append(f"{cx + r*math.cos(a):.1f},{cy + r*math.sin(a):.1f}")
    return "M" + " L".join(pts) + " Z"

def rounded_polygon(n, r, rot=-90, round_=10):
    # polygon with rounded corners using quadratic curves
    pts = [(100 + r*math.cos(math.radians(rot + 360*i/n)), 100 + r*math.sin(math.radians(rot + 360*i/n))) for i in range(n)]
    d = ""
    for i in range(n):
        p0 = pts[i - 1]; p1 = pts[i]; p2 = pts[(i + 1) % n]
        def toward(a, b, t):
            L = math.dist(a, b); k = t / L
            return (a[0] + (b[0]-a[0])*k, a[1] + (b[1]-a[1])*k)
        a = toward(p1, p0, round_); b = toward(p1, p2, round_)
        d += ("M" if i == 0 else "L") + f"{a[0]:.1f},{a[1]:.1f} Q{p1[0]:.1f},{p1[1]:.1f} {b[0]:.1f},{b[1]:.1f} "
    return d + "Z"

def starburst(points, r_out, r_in):
    pts = []
    for i in range(points * 2):
        r = r_out if i % 2 == 0 else r_in
        a = math.radians(-90 + 180 * i / points)
        pts.append(f"{100 + r*math.cos(a):.1f},{100 + r*math.sin(a):.1f}")
    return "M" + " L".join(pts) + " Z"

def rosette(bumps, r, bump):
    d = ""
    for i in range(bumps):
        a0 = math.radians(-90 + 360 * i / bumps); a1 = math.radians(-90 + 360 * (i + 1) / bumps)
        am = (a0 + a1) / 2
        x0, y0 = 100 + r*math.cos(a0), 100 + r*math.sin(a0)
        x1, y1 = 100 + r*math.cos(a1), 100 + r*math.sin(a1)
        cx, cy = 100 + (r + 2*bump)*math.cos(am), 100 + (r + 2*bump)*math.sin(am)
        if i == 0:
            d += f"M{x0:.1f},{y0:.1f} "
        d += f"Q{cx:.1f},{cy:.1f} {x1:.1f},{y1:.1f} "
    return d + "Z"

SHIELD = "M100,14 C130,26 158,28 176,30 C178,98 160,150 100,186 C40,150 22,98 24,30 C42,28 70,26 100,14 Z"
SHIELD_IN = "M100,30 C124,40 146,42 160,44 C160,98 146,138 100,168 C54,138 40,98 40,44 C54,42 76,40 100,30 Z"

SHAPES = {
    "circle": ('<circle cx="100" cy="100" r="84"/>', '<circle cx="100" cy="100" r="70"/>'),
    "hexagon": (f'<path d="{rounded_polygon(6, 90, -90, 14)}"/>', f'<path d="{rounded_polygon(6, 75, -90, 12)}"/>'),
    "octagon": (f'<path d="{rounded_polygon(8, 88, -67.5, 10)}"/>', f'<path d="{rounded_polygon(8, 74, -67.5, 9)}"/>'),
    "shield": (f'<path d="{SHIELD}"/>', f'<path d="{SHIELD_IN}"/>'),
    "starburst": (f'<path d="{starburst(14, 92, 78)}"/>', '<circle cx="100" cy="100" r="66"/>'),
    "rosette": (f'<path d="{rosette(12, 80, 12)}"/>', '<circle cx="100" cy="100" r="68"/>'),
    "squircle": (f'<path d="{rounded_polygon(4, 100, -45, 26)}"/>', f'<path d="{rounded_polygon(4, 84, -45, 22)}"/>'),
    "diamond": (f'<path d="{rounded_polygon(4, 92, -90, 18)}"/>', f'<path d="{rounded_polygon(4, 76, -90, 15)}"/>'),
}

def sparkle(x, y, s, fill="#ffffff"):
    return (f'<path d="M{x},{y-s} Q{x+s*0.18},{y-s*0.18} {x+s},{y} Q{x+s*0.18},{y+s*0.18} {x},{y+s} '
            f'Q{x-s*0.18},{y+s*0.18} {x-s},{y} Q{x-s*0.18},{y-s*0.18} {x},{y-s} Z" fill="{fill}"/>')

def star(cx, cy, r, fill, stroke=INK, sw=4):
    pts = []
    for i in range(10):
        rr = r if i % 2 == 0 else r * 0.45
        a = math.radians(-90 + 36 * i)
        pts.append(f"{cx + rr*math.cos(a):.1f},{cy + rr*math.sin(a):.1f}")
    return f'<path d="M{" L".join(pts)} Z" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'

def badge(name, shape, c1, c2, icon, sparkles=((42, 44, 9), (160, 150, 7))):
    outer, inner = SHAPES[shape]
    sp = "".join(sparkle(x, y, s) for x, y, s in sparkles)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{c1}"/>
      <stop offset="1" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <g fill="url(#g)" stroke="{INK}" stroke-width="7" stroke-linejoin="round">{outer}</g>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="4" stroke-linejoin="round">{inner}</g>
  <ellipse cx="74" cy="56" rx="30" ry="14" transform="rotate(-28 74 56)" fill="#ffffff" fill-opacity="0.28"/>
  <g stroke-linecap="round" stroke-linejoin="round">{icon}</g>
  {sp}
</svg>
'''
    with open(os.path.join(OUT, f"{name}.svg"), "w") as f:
        f.write(svg)

S = f'stroke="{INK}" stroke-width="5"'

# ---------------------------------------------------------------- icons
icons = {}

icons["first-light"] = ("circle", "#2dd4ff", "#3b5bff", f'''
  <path d="M104,94 L150,48" stroke="#fff6a8" stroke-width="10" stroke-opacity="0.9"/>
  <path d="M112,104 L164,70" stroke="#fff6a8" stroke-width="6" stroke-opacity="0.7"/>
  <path d="M60,150 L86,112 L112,150" fill="none" {S}/>
  <path d="M86,112 L86,152" fill="none" {S}/>
  <rect x="58" y="86" width="72" height="24" rx="8" transform="rotate(-35 94 98)" fill="#ffffff" {S}/>
  <rect x="112" y="64" width="16" height="30" rx="4" transform="rotate(-35 120 79)" fill="#ffd23f" {S}/>
  {star(150, 44, 13, "#fff6a8")}''')

icons["lift-off"] = ("hexagon", "#ff9a3c", "#ff3d6e", f'''
  <path d="M88,138 Q100,176 112,138 Z" fill="#ffd23f" {S}/>
  <path d="M100,40 C124,58 128,100 118,134 L82,134 C72,100 76,58 100,40 Z" fill="#ffffff" {S}/>
  <path d="M82,108 L62,132 L82,130 Z" fill="#3b5bff" {S}/>
  <path d="M118,108 L138,132 L118,130 Z" fill="#3b5bff" {S}/>
  <circle cx="100" cy="86" r="11" fill="#2dd4ff" {S}/>''')

icons["ignition"] = ("rosette", "#ffd23f", "#ff5e3a", f'''
  <path d="M100,34 C122,62 142,80 138,116 C135,146 118,160 100,160 C82,160 65,146 62,116 C60,94 74,84 80,66 C88,80 92,88 100,88 C100,70 94,52 100,34 Z" fill="#ff3d3d" {S}/>
  <path d="M100,86 C114,104 122,116 118,134 C115,148 108,152 100,152 C92,152 85,148 82,134 C80,120 90,112 100,86 Z" fill="#ffe14d" {S}/>
  <circle cx="100" cy="136" r="8" fill="#ffffff"/>''')

icons["perfect-week"] = ("squircle", "#7c5cff", "#3cc7ff", f'''
  <rect x="50" y="56" width="100" height="92" rx="12" fill="#ffffff" {S}/>
  <path d="M50,68 Q50,56 62,56 L138,56 Q150,56 150,68 L150,80 L50,80 Z" fill="#ff5c8a" {S}/>
  <path d="M72,46 L72,64 M128,46 L128,64" {S}/>
  {"".join(f'<circle cx="{66 + (i % 4) * 22.5}" cy="{98 + (i // 4) * 26}" r="8" fill="#{c}" stroke="{INK}" stroke-width="3.5"/>' for i, c in enumerate(["3cc7ff","3cc7ff","3cc7ff","3cc7ff","3cc7ff","3cc7ff","ffd23f"]))}
  <path d="M123,124 L130,131 L142,116" fill="none" stroke="{INK}" stroke-width="5"/>''')

icons["lunar-cycle"] = ("circle", "#26307a", "#6a7bff", f'''
  <circle cx="100" cy="92" r="40" fill="#fff4c2" {S}/>
  <path d="M100,52 A40,40 0 0 1 100,132 A26,40 0 0 0 100,52 Z" fill="#c9b8ff" stroke="{INK}" stroke-width="4"/>
  <circle cx="84" cy="80" r="6" fill="#e8d98f"/><circle cx="92" cy="110" r="4" fill="#e8d98f"/>
  {"".join(f'<circle cx="{58 + i * 21}" cy="152" r="7" fill="{f}" stroke="{INK}" stroke-width="3.5"/>' for i, f in enumerate(["#26307a", "#8f86d9", "#fff4c2", "#8f86d9", "#26307a"]))}''',
  ((44, 48, 8), (160, 56, 6), (150, 118, 5)))

icons["explorer"] = ("hexagon", "#1fd18b", "#b4f03a", f'''
  <circle cx="100" cy="100" r="46" fill="#ffffff" {S}/>
  <circle cx="100" cy="100" r="36" fill="none" stroke="{INK}" stroke-width="2.5" stroke-dasharray="3 7"/>
  <path d="M100,62 L112,100 L100,138 L88,100 Z" fill="#ffffff" {S}/>
  <path d="M100,62 L112,100 L88,100 Z" fill="#ff4d6d" stroke="{INK}" stroke-width="4"/>
  <circle cx="100" cy="100" r="6" fill="{INK}"/>
  <path d="M100,44 L100,52 M100,148 L100,156 M44,100 L52,100 M148,100 L156,100" {S}/>''')

icons["star-catalog"] = ("shield", "#b44cff", "#ff5cc8", f'''
  <path d="M100,70 C84,60 64,60 50,66 L50,140 C64,134 84,134 100,144 Z" fill="#ffffff" {S}/>
  <path d="M100,70 C116,60 136,60 150,66 L150,140 C136,134 116,134 100,144 Z" fill="#fff4f9" {S}/>
  <path d="M62,84 L88,82 M62,98 L88,96 M62,112 L84,111" stroke="#c9a3ff" stroke-width="4"/>
  {star(125, 100, 18, "#ffd23f")}''',
  ((44, 40, 8), (158, 40, 7), (100, 170, 6)))

icons["constellation"] = ("octagon", "#00c2a8", "#1d6fff", f'''
  <path d="M52,120 L80,76 L112,96 L144,60 M112,96 L126,140 L80,76" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="1 0"/>
  {star(52, 120, 12, "#ffe14d")}{star(80, 76, 14, "#ffffff")}{star(112, 96, 12, "#ffe14d")}
  {star(144, 60, 14, "#ffffff")}{star(126, 140, 13, "#ffe14d")}''',
  ((40, 56, 6), (160, 120, 8), (90, 160, 5)))

icons["supernova"] = ("starburst", "#ffe14d", "#ff7a1a", f'''
  <circle cx="100" cy="100" r="50" fill="none" stroke="#ffffff" stroke-width="4" stroke-opacity="0.7"/>
  {"".join(f'<path d="M{100 + 28*math.cos(math.radians(a)):.1f},{100 + 28*math.sin(math.radians(a)):.1f} L{100 + 58*math.cos(math.radians(a)):.1f},{100 + 58*math.sin(math.radians(a)):.1f}" stroke="{INK}" stroke-width="6"/>' for a in range(0, 360, 45))}
  {"".join(f'<path d="M{100 + 28*math.cos(math.radians(a)):.1f},{100 + 28*math.sin(math.radians(a)):.1f} L{100 + 56*math.cos(math.radians(a)):.1f},{100 + 56*math.sin(math.radians(a)):.1f}" stroke="#ffffff" stroke-width="2.5"/>' for a in range(0, 360, 45))}
  <circle cx="100" cy="100" r="26" fill="#ffffff" {S}/>
  <circle cx="100" cy="100" r="12" fill="#ff3d6e"/>''',
  ((36, 40, 9), (164, 164, 8)))

icons["sharpshooter"] = ("circle", "#ff4d6d", "#ff9e3d", f'''
  <circle cx="96" cy="104" r="50" fill="#ffffff" {S}/>
  <circle cx="96" cy="104" r="34" fill="#ff4d6d" stroke="{INK}" stroke-width="4"/>
  <circle cx="96" cy="104" r="19" fill="#ffffff" stroke="{INK}" stroke-width="4"/>
  <circle cx="96" cy="104" r="7" fill="#ff4d6d"/>
  <path d="M96,104 L150,50" {S}/>
  <path d="M146,40 L152,48 L160,46 M150,52 L158,58 L156,66" fill="none" stroke="{INK}" stroke-width="5"/>''')

icons["comeback"] = ("rosette", "#ff5cc8", "#8a4dff", f'''
  <path d="M136,78 A44,44 0 1 0 142,118" fill="none" stroke="{INK}" stroke-width="16"/>
  <path d="M136,78 A44,44 0 1 0 142,118" fill="none" stroke="#ffffff" stroke-width="8"/>
  <path d="M126,56 L146,82 L114,86 Z" fill="#ffffff" {S}/>
  {star(100, 102, 18, "#ffe14d")}''')

icons["first-proof"] = ("shield", "#ffcf33", "#ff9f1c", f'''
  <path d="M62,52 L124,52 L138,66 L138,150 L62,150 Z" fill="#ffffff" {S}/>
  <path d="M124,52 L124,66 L138,66" fill="#ffe7a3" {S}/>
  <path d="M76,78 L118,78 M76,94 L112,94" stroke="#f0c36b" stroke-width="5"/>
  <path d="M78,120 L94,136 L124,104" fill="none" stroke="#1fb56b" stroke-width="9"/>
  <path d="M78,120 L94,136 L124,104" fill="none" stroke="{INK}" stroke-width="3" stroke-opacity="0.35"/>''')

icons["problem-solver"] = ("hexagon", "#ffe066", "#35d0ba", f'''
  <path d="M100,46 C126,46 142,64 142,88 C142,106 130,114 124,126 L76,126 C70,114 58,106 58,88 C58,64 74,46 100,46 Z" fill="#fff6a8" {S}/>
  <rect x="78" y="126" width="44" height="14" rx="4" fill="#c7d2fe" {S}/>
  <rect x="84" y="140" width="32" height="12" rx="5" fill="#94a3f8" {S}/>
  <path d="M88,106 L100,86 L112,106" fill="none" stroke="#ff9f1c" stroke-width="5"/>
  <path d="M100,30 L100,20 M64,40 L58,32 M136,40 L142,32" stroke="#ffffff" stroke-width="5"/>''',
  ((40, 120, 7), (162, 110, 8)))

icons["perfectionist"] = ("diamond", "#5ce1ff", "#a26bff", f'''
  <path d="M64,82 L80,60 L120,60 L136,82 L100,140 Z" fill="#e0f7ff" {S}/>
  <path d="M64,82 L136,82 M80,60 L92,82 L100,140 M120,60 L108,82 L100,140 M92,82 L100,60 L108,82" fill="none" stroke="{INK}" stroke-width="3.5"/>
  <path d="M92,82 L108,82 L100,140 Z" fill="#8fe8ff"/>
  <path d="M92,82 L108,82 L100,140 Z" fill="none" stroke="{INK}" stroke-width="3.5"/>''',
  ((58, 50, 8), (146, 132, 8), (148, 60, 5)))

icons["globetrotter"] = ("circle", "#2fb5ff", "#27d17f", f'''
  <circle cx="100" cy="100" r="42" fill="#2a8cff" {S}/>
  <path d="M76,84 C86,76 96,82 94,92 C92,100 80,100 78,110 C74,100 70,92 76,84 Z M110,70 C122,72 132,82 134,96 C124,98 116,92 112,84 C110,80 108,76 110,70 Z M104,118 C114,114 124,120 122,132 C112,136 104,130 104,118 Z" fill="#7ee081" stroke="{INK}" stroke-width="3"/>
  <ellipse cx="100" cy="100" rx="66" ry="20" transform="rotate(-20 100 100)" fill="none" stroke="#ffffff" stroke-width="5"/>
  <circle cx="40" cy="116" r="8" fill="#ff5c8a" stroke="{INK}" stroke-width="3.5"/>
  <circle cx="160" cy="80" r="8" fill="#ffd23f" stroke="{INK}" stroke-width="3.5"/>
  <circle cx="128" cy="126" r="6" fill="#ffffff" stroke="{INK}" stroke-width="3"/>''',
  ((46, 46, 8), (150, 158, 7)))

icons["time-traveller"] = ("octagon", "#ffb347", "#ff6f61", f'''
  <rect x="64" y="44" width="72" height="12" rx="4" fill="#8a4dff" {S}/>
  <rect x="64" y="144" width="72" height="12" rx="4" fill="#8a4dff" {S}/>
  <path d="M74,56 L126,56 C126,82 106,92 106,100 C106,108 126,118 126,144 L74,144 C74,118 94,108 94,100 C94,92 74,82 74,56 Z" fill="#ffffff" {S}/>
  <path d="M84,70 L116,70 C112,82 102,88 100,94 C98,88 88,82 84,70 Z" fill="#ffd23f"/>
  <path d="M82,138 C86,124 96,120 100,112 C104,120 114,124 118,138 Z" fill="#ffd23f"/>
  <path d="M100,96 L100,112" stroke="#ffd23f" stroke-width="3" stroke-dasharray="2 5"/>''')

icons["stargazer"] = ("shield", "#1b1464", "#6b2fbf", f'''
  <path d="M142,52 A28,28 0 1 1 118,40 A22,22 0 0 0 142,52 Z" fill="#fff4c2" stroke="{INK}" stroke-width="4"/>
  <path d="M64,150 C56,120 60,90 76,78 L70,62 L86,72 C94,70 106,70 114,72 L130,62 L124,78 C140,90 144,120 136,150 Z" fill="#8b5cf6" {S}/>
  <circle cx="86" cy="98" r="15" fill="#ffffff" {S}/><circle cx="114" cy="98" r="15" fill="#ffffff" {S}/>
  <circle cx="88" cy="99" r="6" fill="{INK}"/><circle cx="112" cy="99" r="6" fill="{INK}"/>
  <path d="M94,114 L100,124 L106,114 Z" fill="#ffb347" stroke="{INK}" stroke-width="3.5"/>
  <path d="M80,136 Q100,146 120,136" fill="none" stroke="{INK}" stroke-width="3" stroke-opacity="0.5"/>''',
  ((50, 50, 7), (40, 110, 5), (160, 120, 6)))

icons["early-bird"] = ("rosette", "#ff9a8b", "#ffd166", f'''
  <path d="M54,128 A46,46 0 0 1 146,128 Z" fill="#fff1a8" {S}/>
  {"".join(f'<path d="M{100 + 56*math.cos(math.radians(a)):.1f},{128 + 56*math.sin(math.radians(a)):.1f} L{100 + 70*math.cos(math.radians(a)):.1f},{128 + 70*math.sin(math.radians(a)):.1f}" stroke="#ffffff" stroke-width="6"/>' for a in range(-165, -10, 30))}
  <path d="M44,128 L156,128" {S}/>
  <path d="M52,144 L148,144 M68,158 L132,158" stroke="#ffffff" stroke-width="5" stroke-opacity="0.8"/>
  <path d="M112,70 Q120,62 128,70 Q136,62 144,70" fill="none" stroke="{INK}" stroke-width="5"/>
  <path d="M70,86 Q76,80 82,86 Q88,80 94,86" fill="none" stroke="{INK}" stroke-width="4"/>''',
  ((44, 48, 7), (160, 104, 6)))

for name, (shape, c1, c2, icon, *rest) in icons.items():
    badge(name, shape, c1, c2, icon, *(rest or []))

print("wrote", len(icons), "badges")
