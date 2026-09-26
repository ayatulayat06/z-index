import os

brand_logo = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" width="340" height="70" fill="none">
  <defs>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <g transform="translate(6, 10)">
    <rect width="48" height="48" rx="8" fill="#0E1117" stroke="#1E2634" stroke-width="1.5"/>
    <polygon points="14,14 36,14 18,34 38,34" fill="none" stroke="url(#cyanGrad)" stroke-width="3.5" stroke-linecap="square"/>
    <circle cx="14" cy="14" r="2.5" fill="#00E5FF"/>
    <circle cx="38" cy="34" r="2.5" fill="#0284C7"/>
  </g>
  <text x="68" y="38" fill="#F8FAFC" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" letter-spacing="3">Z-INDEX</text>
  <text x="70" y="52" fill="#94A3B8" font-family="monospace" font-size="7.5" letter-spacing="1.5">TECH × CREATIVITY × ENGINEERING</text>
</svg>"""

brand_symbol = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <defs>
    <linearGradient id="symGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="12" fill="#0E1117" stroke="#1E2634" stroke-width="1.5"/>
  <polygon points="18,18 46,18 22,46 50,46" fill="none" stroke="url(#symGrad)" stroke-width="4" stroke-linecap="square"/>
  <circle cx="18" cy="18" r="3" fill="#00E5FF"/>
  <circle cx="50" cy="46" r="3" fill="#0284C7"/>
</svg>"""

def make_project_svg(title, category, color, code_snippet, layer_level):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" fill="none">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E2634" stroke-width="0.75" opacity="0.6"/>
    </pattern>
    <linearGradient id="grad_{layer_level}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#07080A" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="#07080A"/>
  <rect width="800" height="450" fill="url(#grid)"/>
  <rect x="40" y="40" width="720" height="370" rx="8" fill="url(#grad_{layer_level})" stroke="#1E2634" stroke-width="1.5"/>
  
  <!-- Technical Frame Header -->
  <line x1="40" y1="80" x2="760" y2="80" stroke="#1E2634" stroke-width="1"/>
  <circle cx="60" cy="60" r="4" fill="#EF4444"/>
  <circle cx="75" cy="60" r="4" fill="#F59E0B"/>
  <circle cx="90" cy="60" r="4" fill="#10B981"/>
  <text x="120" y="64" fill="#94A3B8" font-family="monospace" font-size="11" letter-spacing="1">Z-INDEX // ARCHITECTURE // Z:{layer_level}</text>
  <rect x="640" y="50" width="100" height="20" rx="4" fill="#0E1117" stroke="{color}" stroke-width="1"/>
  <text x="652" y="64" fill="{color}" font-family="monospace" font-size="10" font-weight="bold">{category.upper()}</text>

  <!-- Schematics visual -->
  <g transform="translate(70, 110)">
    <rect x="0" y="0" width="380" height="260" rx="6" fill="#0E1117" stroke="#1E2634" stroke-width="1"/>
    <text x="20" y="35" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="18" font-weight="700">{title}</text>
    <text x="20" y="60" fill="#94A3B8" font-family="monospace" font-size="12">MODULE TELEMETRY &amp; SPECIFICATION</text>
    <line x1="20" y1="75" x2="360" y2="75" stroke="#1E2634" stroke-width="1"/>
    <text x="20" y="105" fill="#64748B" font-family="monospace" font-size="11">> {code_snippet[0]}</text>
    <text x="20" y="130" fill="#64748B" font-family="monospace" font-size="11">> {code_snippet[1]}</text>
    <text x="20" y="155" fill="{color}" font-family="monospace" font-size="11">> {code_snippet[2]}</text>
    <text x="20" y="180" fill="#64748B" font-family="monospace" font-size="11">> {code_snippet[3]}</text>
    <rect x="20" y="210" width="160" height="28" rx="4" fill="#161B24" stroke="#2D3748" stroke-width="1"/>
    <text x="32" y="228" fill="#F8FAFC" font-family="monospace" font-size="11">STATUS: VERIFIED</text>
  </g>

  <!-- Layer Stack Isometric graphic on right -->
  <g transform="translate(500, 130)">
    <polygon points="120,20 220,70 120,120 20,70" fill="#161B24" stroke="{color}" stroke-width="1.5" opacity="0.9"/>
    <text x="80" y="75" fill="{color}" font-family="monospace" font-size="10" font-weight="bold">LAYER {layer_level}</text>
    <polygon points="120,60 220,110 120,160 20,110" fill="#0E1117" stroke="#2D3748" stroke-width="1" opacity="0.7"/>
    <polygon points="120,100 220,150 120,200 20,150" fill="#07080A" stroke="#1E2634" stroke-width="1" opacity="0.5"/>
  </g>
</svg>"""

def make_team_svg(name, role, dept, color, glyph):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" fill="none">
  <defs>
    <linearGradient id="avatarGrad_{glyph}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0E1117"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="#07080A"/>
  <circle cx="200" cy="200" r="180" fill="url(#avatarGrad_{glyph})" stroke="#1E2634" stroke-width="2"/>
  <circle cx="200" cy="200" r="140" fill="#0E1117" stroke="{color}" stroke-width="1.5" stroke-dasharray="6 4"/>
  <!-- Holographic Head/Shoulders Tech Iconography -->
  <circle cx="200" cy="150" r="45" fill="#161B24" stroke="{color}" stroke-width="2"/>
  <path d="M 120 270 C 120 215, 280 215, 280 270 Z" fill="#161B24" stroke="{color}" stroke-width="2"/>
  <!-- Division identifier node -->
  <rect x="120" y="315" width="160" height="30" rx="6" fill="#07080A" stroke="{color}" stroke-width="1.5"/>
  <text x="200" y="335" text-anchor="middle" fill="{color}" font-family="monospace" font-size="12" font-weight="bold">{dept.upper()}</text>
  <!-- Technical corner tags -->
  <text x="30" y="45" fill="#64748B" font-family="monospace" font-size="10">ID: Z-{glyph.upper()}-01</text>
  <text x="370" y="45" text-anchor="end" fill="#64748B" font-family="monospace" font-size="10">ACTIVE</text>
</svg>"""

# Write Brand Assets
with open('public/images/brand/logo.svg', 'w', encoding='utf-8') as f:
    f.write(brand_logo)
with open('public/images/brand/symbol.svg', 'w', encoding='utf-8') as f:
    f.write(brand_symbol)

# Write Project SVGs
projects_meta = [
    ('project-programming-1.svg', 'Strata Kernel Engine', 'Programming', '#00E5FF', ['alloc(worker_pool, size=64)', 'await dispatch(task_id, payload)', 'ok: transaction_committed (0.4ms)', 'heartbeat: all_nodes_synced'], 50),
    ('project-graphics-1.svg', 'Neo-Tech Design System', 'Graphics', '#38BDF8', ['token_registry.load(palette_v2)', 'contrast_ratio.verify(min=7.0)', 'ok: 120 components calibrated', 'strict_z_stack: validated'], 20),
    ('project-robotics-1.svg', 'Aegis Telemetry Node', 'Robotics', '#10B981', ['i2c_bus.init(freq=400kHz)', 'sensor.sample(temp, vib, baro)', 'ok: packet_sent(proto=MQTT_TLS)', 'power_mode: deep_sleep(800ms)'], 10),
    ('project-web-1.svg', 'Apex Cloud Portal', 'Web & IT', '#0284C7', ['nextjs.render(route="/nodes")', 'edge_cache.hit(latency=18ms)', 'ok: 99.99% uptime benchmark', 'ssl_tls: verified_strict_hsts'], 50),
    ('project-programming-2.svg', 'Omni Pulse Diagnostic', 'Programming', '#00E5FF', ['ble_link.connect(uuid=0xFFE0)', 'stream.listen(isolate=Worker2)', 'ok: 60fps_render_buffer_ok', 'ring_buffer: 10000_samples'], 20),
    ('project-graphics-2.svg', 'Vector Core Brand', 'Graphics', '#38BDF8', ['grid.construct(cartesian_z)', 'typography.set(geist_mono_14)', 'ok: vector_geometry_rendered', 'export: svg_clean_paths'], 10),
    ('project-robotics-2.svg', 'Kinetic Axis Controller', 'Robotics', '#10B981', ['stepper.ramp(accel=1200steps/s)', 'home_switch.poll(int_pin=2)', 'ok: position_repeatability_0.05mm', 'gcode.execute(recipe_04)'], 10),
    ('project-web-2.svg', 'Hyper Mesh CDN', 'Web & IT', '#0284C7', ['anycast.route(pop="iad", ttfb=22ms)', 'brotli.compress(ratio=0.74)', 'ok: asset_edge_distributed', 'dns: zero_downtime_propagation'], 0),
]

for filename, title, category, color, code_snip, layer in projects_meta:
    with open(f'public/images/portfolio/{filename}', 'w', encoding='utf-8') as f:
        f.write(make_project_svg(title, category, color, code_snip, layer))

# Write Team Member SVGs
team_meta = [
    ('member-programming.svg', 'Ayat', 'Principal Systems & Web Architect', 'Programming', '#00E5FF', 'lead'),
    ('member-ayat.svg', 'Ayat', 'Principal Systems & Web Architect', 'Programming', '#00E5FF', 'lead'),
    ('member-manop.svg', 'Manop (Z programmer)', 'Senior Systems & Automation Developer', 'Programming', '#00E5FF', 'prog'),
    ('member-graphics.svg', 'Mongchaihla Marma', 'Head of Design & Visual Systems', 'Graphics', '#38BDF8', 'des'),
    ('member-robotics.svg', 'Arafat Abir', 'Lead Robotics & IoT Engineer', 'Robotics', '#10B981', 'rob'),
    ('member-webit.svg', 'Ayat', 'Lead Web & Infrastructure Architect', 'Web & IT', '#0284C7', 'infra')
]

for filename, name, role, dept, color, glyph in team_meta:
    with open(f'public/images/team/{filename}', 'w', encoding='utf-8') as f:
        f.write(make_team_svg(name, role, dept, color, glyph))

print("All SVGs written successfully!")
