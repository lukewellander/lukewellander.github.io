# MyFit website

Marketing site for MyFit, an iPhone and Apple Watch workout tracker, published with GitHub Pages at [getmyfit.app](https://getmyfit.app).

## Pages

- `index.html` — landing page
- `support.html` — support and common questions
- `privacy.html` — privacy policy
- `404.html` — not-found page
- `juggler/` — intentionally unlinked pages for the separate game Juggler:
  - `juggler/index.html` — game overview
  - `juggler/privacy/index.html` — Juggler privacy policy
  - `juggler/support/index.html` — Juggler support and FAQ
  These pages are marked `noindex` and are not in the MyFit navigation.
- `app-ads.txt` — IAB Tech Lab authorized seller record for Google AdMob
- `styles.css` — shared styles
- `script.js` — navigation and small interactions
- `assets/` — app icon, original screenshots, and optimized web screenshots
- `assets/screenshots/` — resized screenshots used on the site
- `assets/juggler/` — Juggler icon, sprites, and the Press Start 2P font (SIL OFL 1.1)

## Local preview

Open `index.html` directly, or run a local server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. The hidden Juggler pages are at
<http://localhost:8000/juggler/>, <http://localhost:8000/juggler/privacy/>, and
<http://localhost:8000/juggler/support/>.

## Deploying

The site is served from the `master` branch by GitHub Pages at <https://getmyfit.app>. Push changes to deploy.
