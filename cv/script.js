function scrollspy() {
    const sections = document.querySelectorAll("section");
    const nav_as = document.querySelectorAll("nav > a");
    function activate() {
	if (sections.item(0).getBoundingClientRect().bottom >0) {
	    nav_as.forEach(a => {
		if (a.hash === "#personal-data") {
		    a.classList.add("active-nav");
		} else {
		    a.classList.remove("active-nav");
		}
	    });
	    return;
	}
	sections.forEach(section=>{
	    if(section.getBoundingClientRect().y<document.documentElement.clientHeight){
		    nav_as.forEach(a => {
		if (a.hash === `#${section.id}`) {
		    nav_as.forEach(a => a.classList.remove("active-nav"));
		    a.classList.add("active-nav");
		}
	    });	
	    }
	});
    }
    window.addEventListener("scroll", activate);
}
document.addEventListener("DOMContentLoaded", scrollspy);
