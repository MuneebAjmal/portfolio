# Muhammad Muneeb, Portfolio

Personal portfolio for Muhammad Muneeb, Flutter and Mobile Team Lead.

A static site with no build step and no dependencies: plain HTML, CSS and JavaScript.

## Project structure

```
index.html        page content, SEO tags and structured data
css/style.css     all styles
js/main.js        animations, app showcase, scroll button
assets/           portrait cut-out, share image, icons
robots.txt        tells search engines they may crawl the site
sitemap.xml       lists the page for Google
```

## Before you publish: set your site address

The SEO tags need the site's real address. In VS Code press **Ctrl+Shift+H** (Find and Replace in all files), search for

```
YOUR-GITHUB-USERNAME
```

and replace it with your GitHub username. This updates `index.html`, `robots.txt` and `sitemap.xml` in one go.

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

## Getting found on Google

The page is already set up for search: a keyword-rich title and description, Google structured data (Person and ProfilePage), a sitemap, robots.txt and a share image for WhatsApp, LinkedIn and X.

After the site is live:

1. Go to [Google Search Console](https://search.google.com/search-console), add your site address as a **URL prefix** property and verify it (the *HTML tag* method: paste the meta tag Google gives you into the `<head>` of `index.html`, push, then click Verify).
2. In Search Console open **Sitemaps** and submit `sitemap.xml`.
3. Open **URL inspection**, paste your site address and click **Request indexing**.
4. Put the site link on your LinkedIn profile (Contact info and Featured), GitHub profile and CV. Links from these profiles help Google find and trust the site.

Searches for your name usually show the site within a few days to a couple of weeks. Broad searches like "Flutter developer" are very competitive. Ranking for them depends on links from other sites and time, so adding a city ("Flutter developer Islamabad") is where a personal site has the best chance.
