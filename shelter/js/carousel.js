const PETS = [
  {
    name: "Jennifer",
    img: "../assets/images/pets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../assets/images/pets/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../assets/images/pets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../assets/images/pets/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../assets/images/pets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../assets/images/pets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../assets/images/pets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../assets/images/pets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// стрелка влево
const BTN_LEFT = document.querySelector("#btn-left");
// стрелка вправо
const BTN_RIGHT = document.querySelector("#btn-right");
// контент между стрелок
const CAROUSEL = document.querySelector("#carousel");
// контент слева от того, что мы видим
const ITEM_LEFT = document.querySelector("#item-left");
// контент справа от того, что мы видим
const ITEM_RIGHT = document.querySelector("#item-right");
// контент посередине, тот что мы видим
const ITEM_ACTIVE = document.querySelector("#item-active");
let numCards = 3;
if (window.matchMedia("(max-width: 1279px)").matches) {
  numCards = 2;
}
if (window.matchMedia("(max-width: 767.5px)").matches) {
  numCards = 1;
}
createLeft(numCards);
createRight(numCards);

document.querySelector("#item-active").lastChild.remove();
/*
 * Добавляет в карусель класс .transition-left,
 * который смещает контент влево
 * Удаляет слушатель по клику с левой и правой стрелки
 */
const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};
/*
 * Добавляет в карусель класс .transition-right,
 * который смещает контент вправо
 * Удаляет слушатель по клику с левой и правой стрелки
 */
const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};
// добавляет слушатель по клику на левую стрелку
BTN_LEFT.addEventListener("click", moveLeft);
// добавляет слушатель по клику на правую стрелку
BTN_RIGHT.addEventListener("click", moveRight);
/*
 * слушает контент на окончание анимации
 * удаляет с карусели класс .transition-left/-right
 */
CAROUSEL.addEventListener("animationend", (animationEvent) => {
  // если анимация была запущена функцией move-left
  // let centerCards = readCenterCards();

  if (animationEvent.animationName === "move-left") {
    // удаляет с карусели класс transition-left
    CAROUSEL.classList.remove("transition-left");
    createLeft(numCards);
    // если анимация была запущена функцией move-left
  } else {
    // удаляет с карусели класс transition-left
    CAROUSEL.classList.remove("transition-right");
    createRight(numCards);
  }
  // добавляет слушатель по клику на левую стрелку
  BTN_LEFT.addEventListener("click", moveLeft);
  // добавляет слушатель по клику на правую стрелку
  BTN_RIGHT.addEventListener("click", moveRight);
});

function randomCard(names) {
  const result = document.querySelector(".pets__card").cloneNode(true);
  const img = result.querySelector("img");
  const txt = result.querySelector("div");
  let currentPet = PETS[Math.floor(Math.random() * 8)];
  while (names.includes(currentPet.name)) {
    currentPet = PETS[Math.floor(Math.random() * 8)];
  }
  names.push(currentPet.name);
  img.setAttribute("src", currentPet.img);
  txt.innerText = currentPet.name;
  return result;
}

function nameOfCenterCards() {
  const arrCards = document.querySelectorAll("#item-active > div > div");
  let arrNames = [];
  arrCards.forEach((el) => {
    arrNames.push(el.textContent);
  });
  return arrNames;
}

function createLeft(iter) {
  // содержимое контента слева
  const leftItems = ITEM_LEFT.innerHTML;
  // добавляем в середину то, что слева
  ITEM_ACTIVE.innerHTML = leftItems;
  ITEM_LEFT.innerHTML = "";
  let currentNames = nameOfCenterCards();
  for (let i = 0; i < iter; i++) {
    ITEM_LEFT.appendChild(randomCard(currentNames));
  }
}
function createRight(iter) {
  // содержимое контента справа
  let rightItems = ITEM_RIGHT.innerHTML;
  // добавляем в середину то, что справа
  ITEM_ACTIVE.innerHTML = rightItems;
  ITEM_RIGHT.innerHTML = "";
  let currentNames = nameOfCenterCards();
  for (let i = 0; i < iter; i++) {
    ITEM_RIGHT.appendChild(randomCard(currentNames));
  }
}

if (window.matchMedia("(max-width: 1279px)").matches) {
  numCards = 2;
  document.querySelector("#item-active").lastChild.remove();
}
if (window.matchMedia("(max-width: 767.5px)").matches) {
  numCards = 1;
  document.querySelector("#item-active").lastChild.remove();
  document.querySelector("#item-active").lastChild.remove();
}
