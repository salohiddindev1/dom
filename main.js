let mevalar = ["anor", "anjir", "ananas", "behi", "olma"];

for (meva of mevalar) {
  console.log(meva);
}

const clickMe = () => {
  let random = Math.floor(Math.random() * 100);

  let title = document.querySelector(".title");
  title.textContent = random;
};
