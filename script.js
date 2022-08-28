
function enable_colors(scheme) {
    const background=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-background`);
    const color=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color`);
    const color_10=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-10`);
    const color_70=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-70`);
    const color_link=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-link`);
    const color_link_10=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-link-10`);
    const color_link_30=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-link-30`);
    const color_link_50=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-link-50`);
    const color_link_70=getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-color-link-70`);

    document.documentElement.style.setProperty("--background", background);
    document.documentElement.style.setProperty("--color", color);
    document.documentElement.style.setProperty("--color-10", color-10);
    document.documentElement.style.setProperty("--color-70", color-70);
    document.documentElement.style.setProperty("--color-link", color-link);
    document.documentElement.style.setProperty("--color-link-10", color-link-10);
    document.documentElement.style.setProperty("--color-link-30", color-link-30);
    document.documentElement.style.setProperty("--color-link-50", color-link-50);
    document.documentElement.style.setProperty("--color-link-70", color-link-70);
}

function scrollspy() {
    const sections = document.querySelectorAll("section");
    const nav_as = document.querySelectorAll("nav > a");
    function activate() {
	if (sections.item(0).getBoundingClientRect().bottom >0) {
	    nav_as.forEach(a => {
		if (a.hash === "#words") {
		    a.classList.add("nav-a-active");
		} else {
		    a.classList.remove("nav-a-active");
		}
	    });
	    return;
	}
	sections.forEach(section=>{
	    if(section.getBoundingClientRect().y<document.documentElement.clientHeight){
		nav_as.forEach(a => {
		    if (a.hash === `#${section.id}`) {
			nav_as.forEach(a => a.classList.remove("nav-a-active"));
			a.classList.add("nav-a-active");
		    }
		});	
	    }
	});
    }
    window.addEventListener("scroll", activate);
}

// window.addEventListener("DOMContentLoaded", scrollspy);

window.addEventListener("DOMContentLoaded", (_event) => {
    const menu=document.getElementById("menu");
    const menu_icon=document.getElementById("menu-icon");
    const menu_icon_close=document.getElementById("menu-icon-close");
    const menu_content=document.getElementById("menu-content");

    menu_icon.addEventListener("click", (event) => {
	menu_icon.style.display="none";
	menu_icon_close.style.display="block";
	menu_content.style.display="block";
    });

    menu_icon_close.addEventListener("click", (event) => {
	menu_icon_close.style.display="none";
	menu_icon.style.display="block";
	menu_content.style.display="none";
    });

    const scheme_icon_light=document.getElementById("scheme-icon-light");
    const scheme_icon_dark=document.getElementById("scheme-icon-dark");
    scheme_icon_light.addEventListener("click", (event) => {
        enable_colors("light");
    });
    scheme_icon_dark.addEventListener("click", (event) => {
        enable_colors("dark");
    });
});
