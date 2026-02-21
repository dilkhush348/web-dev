function SetDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        if (document.body.classList.contains("dark")) {
            document.body.classList.replace("dark", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.replace("light", "dark");
            localStorage.setItem("theme", "dark");
        }
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", function () {
        if (!localStorage.getItem("theme")) {
            SetDarkOrLight();
        }
    });

    if (localStorage.getItem("theme")) {
        document.body.classList.add(localStorage.getItem("theme"));
    } else {
        SetDarkOrLight();
    }

});
