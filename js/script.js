const themeSwitch = document.querySelector(".switch-theme");
const menuLinks = document.querySelectorAll(".menu a");
const demoReel = document.querySelector(".demo-reel");
const demoVideo = demoReel?.querySelector("video");
const demoClose = demoReel?.querySelector(".demo-reel-close");

document.body.dataset.theme ||= "light";

demoReel?.addEventListener("click", () => {
    demoReel.classList.add("is-expanded");
    demoVideo?.play();
});

demoClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    demoReel.classList.remove("is-expanded");
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

    document.body.dataset.theme = nextTheme;
    themeSwitch.setAttribute(
        "aria-label",
        `Ganti ke tema ${nextTheme === "dark" ? "terang" : "gelap"}`
    );
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
        } catch (err) {
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
