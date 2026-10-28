# Muhammad Muneeb, Portfolio

Personal portfolio for Muhammad Muneeb, Flutter and Mobile Team Lead.

A static site with no build step and no dependencies: plain HTML, CSS and JavaScript.

## Project structure

```
index.html        page content
css/style.css     all styles
js/main.js        animations, app showcase, scroll button
assets/           portrait cut-out and favicon
```

## Run it locally

Open `index.html` in a browser, or in VS Code install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `muneeb-portfolio`.
2. In this folder run:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/muneeb-portfolio.git
git push -u origin main
```

3. On GitHub open the repository, go to **Settings > Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/muneeb-portfolio/`.

Tip: name the repository `<your-username>.github.io` and the site will live at `https://<your-username>.github.io/` instead.

## Editing

- **App list:** edit the `apps` array near the top of `js/main.js` (name, description, "What I did" points and store links).
- **Real app icons:** add image files to `assets/` and swap the letter icons for `<img>` tags in `js/main.js`.
- **Colours:** change the variables at the top of `css/style.css` (`--blue`, `--violet`, `--sun` and so on).
