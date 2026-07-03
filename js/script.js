const themeSwitch = document.querySelector(".switch-theme");
const menuLinks = document.querySelectorAll(".menu a");
const demoReel = document.querySelector(".demo-reel");
const demoVideo = demoReel?.querySelector("video");
const demoClose = demoReel?.querySelector(".demo-reel-close");

const getSavedTheme = () => localStorage.getItem("theme");
const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeSwitch?.setAttribute(
        "aria-label",
        `Ganti ke tema ${theme === "dark" ? "terang" : "gelap"}`
    );
};

setTheme(getSavedTheme() || "light");

if (demoVideo) demoVideo.controls = false;

demoReel?.addEventListener("click", (e) => {
    if (e.target.closest(".demo-reel-close")) return;
    if (demoReel.classList.contains("is-expanded")) return;

    demoReel.classList.add("is-expanded");
    if (demoVideo) demoVideo.controls = true;
    demoVideo?.play();
});

demoClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    demoReel.classList.remove("is-expanded");
    if (demoVideo) demoVideo.controls = false;
    demoVideo?.pause();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && demoReel?.classList.contains("is-expanded")) {
        demoReel.classList.remove("is-expanded");
        demoVideo?.pause();
    }
});


themeSwitch?.addEventListener("click", () => {
    const isDark = document.body.dataset.theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    setTheme(nextTheme);
});

themeSwitch?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        themeSwitch.click();
    }
});

const setActiveMenuLink = () => {
    const pageName = window.location.pathname.split("/").pop() || "index.html";

    menuLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const linkPageName = href ? href.split("/").pop() : "";
        link.classList.toggle("active", linkPageName === pageName);
    });
};

const setupPageTransitions = () => {
    document.addEventListener("click", (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
        if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        try {
            const url = new URL(anchor.href, window.location.href);
            if (url.origin === window.location.origin) {
                e.preventDefault();
                document.body.classList.add("page-exit");
                setTimeout(() => {
                    window.location.href = href;
                }, 250);
            }
        } catch {
        }
    });

    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            document.body.classList.remove("page-exit");
        }
    });
};

setActiveMenuLink();
setupPageTransitions();
