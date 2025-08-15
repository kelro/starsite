function alertMessage() {
  alert("Thanks for visiting StarSite! 🌟 We'll help you shine online.");
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Message sent! We'll get back to you soon. 📧");
  return false;
}

document.querySelectorAll('a[href*=".html"]').forEach(link => {
  link.addEventListener('click', e => {
    // Optional smooth UX without reloads if using SPA logic
  });
});

// Smooth scroll and animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  animatedElements.forEach(el => observer.observe(el));
});

