document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll("[data-faq]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".faq-item").classList.toggle("open");
    });
  });

  const form = document.querySelector("[data-application-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Online Coaching Application");
      const body = encodeURIComponent(
        Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join("\n")
      );
      window.location.href = `mailto:hillwong1221@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});

