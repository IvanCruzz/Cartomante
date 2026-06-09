const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight =
    window.innerHeight;

    const top =
    element.getBoundingClientRect().top;

    if(top < windowHeight - 120){
      element.classList.add("active");
    }

  });

});