# Rishitha Gangidi · Portfolio

A static, dependency-free portfolio site (HTML, CSS, vanilla JS). No build step needed.

## Folder structure

```
rishitha-portfolio/
├── index.html      # All sections: hero, about, skills, projects, education, certifications, contact
├── css/
│   └── style.css   # Theme colors on :root, dark mode by default, responsive layout
├── js/
│   └── main.js     # Mobile menu, scroll animations, footer year
├── assets/
│   └── profile.jpg # Profile photo
└── README.md
```

## Run locally

Open `index.html` in a browser, or run a quick local server:

```bash
cd rishitha-portfolio
python -m http.server 8000
```

Then visit http://localhost:8000.

## Push to GitHub

```bash
cd rishitha-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Rishitha541/portfolio.git
git push -u origin main
```

Create the empty `portfolio` repository on GitHub first.

## Deploy on Vercel

1. Go to https://vercel.com/new and import the `portfolio` GitHub repository.
2. Framework preset: **Other**. No build command and no output directory are needed.
3. Click **Deploy**. Vercel serves `index.html` at the root automatically.

Every later `git push` redeploys the site.

## Customize

- **Colors:** edit the variables in `:root` at the top of `css/style.css`.
- **Photo:** replace `assets/profile.jpg` and keep the same filename, or update the `src` in `index.html`.
- **Project links:** add a live demo link to a project by adding an `<a>` in its `.project-links` block.
