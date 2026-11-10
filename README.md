# MyFit website

Marketing site for MyFit, an iPhone and Apple Watch workout tracker, published with GitHub Pages at [lukewellander.com](https://lukewellander.com).

## Pages

- `index.html` — landing page
- `support.html` — support and common questions
- `privacy.html` — privacy policy
- `404.html` — not-found page
- `styles.css` — shared styles
- `script.js` — navigation, scroll reveals, and small interactions
- `assets/` — app icon and logo

## Local preview

Open `index.html` directly, or run a local server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploying

The site is served from the `master` branch by GitHub Pages. `CNAME` points the site at `lukewellander.com`. Push changes to deploy.
