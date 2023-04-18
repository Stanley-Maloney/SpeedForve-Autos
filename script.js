function scrollSmooth() {
  const linkInterno = document.querySelectorAll('.js-animated a[href^="#"]');
  if (linkInterno.length) {
    function scrol(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linkInterno.forEach((item) => {
      item.addEventListener("click", scrol);
    });
  }
}
scrollSmooth();
