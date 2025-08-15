# 🌟 MyPortfolio - Ron Weber

A modern multi-page portfolio built with **HTML**, **CSS**, and **JavaScript**.
This site is hosted via **GitHub Pages** from the [`starsite`](https://github.com/kelro/starsite) repository.

---

## 🔧 Features

✅ Responsive multi-page layout
✅ Dark mode toggle (remembers your preference)
✅ CSS scroll animations
✅ Dynamic GitHub project feed
✅ Contact form (non-submitting, with local confirmation)
✅ Clean and modular file structure for easy updates

---

## 🗂 File Structure
starsite/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── assets/
│ ├── css/
│ │ ├── style.css
│ │ └── darkmode.css
│ └── js/
│ ├── script.js
│ ├── darkmode.js
│ └── github.js
└── images/ (optional)


---

## 🚀 GitHub API Integration

The **Projects** page pulls live public repositories from your GitHub profile using the GitHub REST API.
Be sure your username is correct in `assets/js/github.js`.

```javascript
fetch("https://api.github.com/users/kelro/repos?sort=updated")

🌓 Dark Mode

Dark mode is toggled via the 🌓 button in the nav and remembered using localStorage.

📬 Contact Form

The contact form currently triggers a "Thank you" message locally.
To enable live form submission, hook it to Formspree or Netlify Forms.

🌐 Live Demo

Your GitHub Pages site will be live at:
https://your-username.github.io/starsite/

Make sure Pages is enabled in your repo settings and set to deploy from the main or gh-pages branch.

🧠 License

MIT License

