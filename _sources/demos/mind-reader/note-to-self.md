# To Create Obfuscated Version

## Quick Setup

1. Install dependencies:

```bash
npm install
```

2. Build obfuscated file from `sketch.js`:

```bash
npm run obfuscate
```

3. Build a deploy-ready `dist/` folder:

```bash
npm run build:dist
```

4. Local obfuscation output is written to `sketch.obfuscated.js`.

## Notes

- Config is in `obfuscator.config.json`.
- p5 callback names are reserved in config so the sketch still runs.
- Only obfuscate your app code, not files in `libraries/`.
- Deploy-ready output includes `dist/index.html`, `dist/style.css`, `dist/sketch.js` (obfuscated), and `dist/libraries/`.
