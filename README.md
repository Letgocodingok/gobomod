# Gobo Mod

A Scratch-like visual programming interface powered by TurboWarp engine.

## Features

- Scratch-like block interface
- TurboWarp engine for fast execution
- Simple stage for projects
- Run/Stop controls

## Getting Started

### Option 1: Direct Browser (Fastest for Cloudflare)

1. Upload all files to Cloudflare Pages or any static hosting
2. Open `index.html` in your browser
3. Click **Run** to start

### Option 2: Local Development

```bash
# Start a local server
python -m http.server 8000

# Visit http://localhost:8000
```

## Files

- `index.html` - Main page structure
- `style.css` - Gobo Mod styling
- `main.js` - TurboWarp engine integration
- `package.json` - Project dependencies

## Upload to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select **Pages** → **Create project**
3. Connect your GitHub repo (Letgocodingok/gobomod)
4. Set build command: (leave empty)
5. Set publish directory: `/` (root)
6. Deploy!

## TurboWarp Integration

This mod uses TurboWarp's Scratch VM for fast project execution. The engine is loaded via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@turbowarp/scratch-vm@latest/dist/scratch-vm.js"></script>
```

## License

MIT