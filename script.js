document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    experience: document.getElementById("experience"),
    portfolio: document.getElementById("portfolio"),
    skills: document.getElementById("skills"),
  };
  const sectionButtons = document.querySelectorAll("[data-section]");
  const projectButtons = document.querySelectorAll("[data-project-group]");
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setSection(sectionKey) {
    Object.entries(sections).forEach(([key, section]) => {
      section.classList.toggle("active-section", key === sectionKey);
    });

    sectionButtons.forEach((button) => {
      const isActive = button.dataset.section === sectionKey;
      button.classList.toggle("active-btn", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setProjectGroup(groupKey) {
    projectButtons.forEach((button) => {
      const currentGroup = document.getElementById(button.dataset.projectGroup);
      const isActive = button.dataset.projectGroup === groupKey;

      currentGroup.classList.toggle("active-group", isActive);
      button.classList.toggle("active-btn", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setSection(button.dataset.section);
    });
  });

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setProjectGroup(button.dataset.projectGroup);
    });
  });

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);
    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);
    setTheme(isDark);
  };

  setSection("experience");
  setProjectGroup("personal-projects");
  loadTheme();
});
