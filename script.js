const advice = document.querySelector(".card__advice");

const id = document.querySelector(".card__id");

const dice = document.querySelector(".card__dice");

const getAdvice = async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let adviceText = `"${data.slip.advice}"`;
      
      advice.textContent = adviceText;
      id.textContent = data.slip.id;
    })
    .catch((err) => console.log(err.message));
};

dice.addEventListener("click", () => {
  getAdvice();
});
