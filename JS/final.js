const modal = document.querySelector(".modal");
const previews = document.querySelectorAll("img");
const original = document.querySelector(".full-img");

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    original.classList.add("open");

    const orginalSrc = preview.getAttribute('data-original');
    original.src = `./img/${orginalSrc}`;
  });
});

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
