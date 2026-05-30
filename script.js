const themeSwitch = document.querySelector(".switch-theme");
const darkModeIcon = themeSwitch?.querySelector(".gelap img");
const lightModeIcon = themeSwitch?.querySelector(".terang img");

const icons = {
  dark: {
    idle: "images/dark-mode-fill0.svg",
    hover: "images/dark-mode-fill1.svg",
  },
  light: {
    idle: "images/light-mode-fill0.svg",
    hover: "images/light-mode-fill1.svg",
  },
};

document.querySelectorAll("[data-idle-src][data-hover-src]").forEach((element) => {
  const image = element.matches("img") ? element : element.querySelector("img");

  if (!image) {
    return;
  }

  element.addEventListener("mouseenter", () => {
    image.src = element.dataset.hoverSrc;
  });

  element.addEventListener("mouseleave", () => {
    image.src = element.dataset.idleSrc;
  });
});

const setIdleIcons = () => {
  darkModeIcon.src = icons.dark.idle;
  lightModeIcon.src = icons.light.idle;
};

const activeIcon = () => {
  return document.body.classList.contains("darkmode") ? lightModeIcon : darkModeIcon;
};

const activeIconSet = () => {
  return document.body.classList.contains("darkmode") ? icons.light : icons.dark;
};

themeSwitch?.addEventListener("mouseenter", () => {
  activeIcon().src = activeIconSet().hover;
});

themeSwitch?.addEventListener("mouseleave", setIdleIcons);

themeSwitch?.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  setIdleIcons();

  const nextTheme = document.body.classList.contains("darkmode") ? "terang" : "gelap";
  themeSwitch.setAttribute("aria-label", `Ganti ke tema ${nextTheme}`);
});

themeSwitch?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    themeSwitch.click();
  }
});
