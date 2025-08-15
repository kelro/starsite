const githubContainer = document.getElementById('github-projects');

fetch("https://api.github.com/users/kelro/repos?sort=updated")
  .then(response => response.json())
  .then(repos => {
    githubContainer.innerHTML = ''; // Clear loading

    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description provided."}</p>
        <small>⭐ Stars: ${repo.stargazers_count} | 🕒 Updated: ${new Date(repo.updated_at).toLocaleDateString()}</small>
      `;

      githubContainer.appendChild(card);
    });
  })
  .catch(err => {
    githubContainer.innerHTML = "<p>Failed to load GitHub projects. Please try again later.</p>";
    console.error("GitHub API error:", err);
  });
