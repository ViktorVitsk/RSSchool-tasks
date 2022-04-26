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
const BTN_LEFT = document.querySelector(
  "body > section > div > div.pets__navigator > div:nth-child(2)"
);
const BTN_RIGHT = document.querySelector(
  "body > section > div > div.pets__navigator > div:nth-child(4)"
);
const BTN_LEFT_END = document.querySelector(
  "body > section > div > div.pets__navigator > div:nth-child(1)"
);
const BTN_RIGHT_END = document.querySelector(
  "body > section > div > div.pets__navigator > div:nth-child(5)"
);
const BTN_NUM = document.querySelector(
  "body > section > div > div.pets__navigator > div.pets__button-paginator.pets__button-active"
);
let numCards = 8;
let NumPages = 6;
if (window.matchMedia("(max-width: 1279px)").matches) {
  numCards = 6;
  NumPages = 8;
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
}
if (window.matchMedia("(max-width: 767.5px)").matches) {
  numCards = 3;
  NumPages = 16;
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
  document.querySelector("#all-cards").lastChild.remove();
}
const allPets = document.querySelectorAll(".pets__card");

const arrayPets = createArrayOfArrayPets(numCards, NumPages);
petOnPage(0);
function petOnPage(page) {
  const currentPage = arrayPets[page];
  currentPage.forEach((pet, index) => {
    allPets[index].querySelector("img").setAttribute("src", pet.img);
    allPets[index].querySelector(".pets__name").innerText = pet.name;
  });
}

function createArrayOfArrayPets(pets, pages) {
  const result = [];
  for (let i = 0; i < pages; i++) {
    const arrayPets = createArrPets(pets);
    result.push(arrayPets);
  }
  return result;
}

function createArrPets(length) {
  const result = [];
  const randomNum = arrRandomNum(length);
  randomNum.forEach((n) => {
    result.push({
      img: PETS[n].img,
      name: PETS[n].name,
    });
  });
  return result;
}

function arrRandomNum(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * length);
    if (!result.includes(num)) {
      result.push(num);
    } else {
      i--;
    }
  }
  return result;
}

BTN_RIGHT.addEventListener("click", (event) => {
  if (+BTN_NUM.textContent < NumPages) {
    BTN_NUM.innerText = +BTN_NUM.textContent + 1;
    petOnPage(+BTN_NUM.textContent - 1);
  }
  if (+BTN_NUM.textContent === NumPages) {
    btnRightEnd();
  }
  if (+BTN_NUM.textContent > 1) {
    BTN_LEFT.style.borderColor = "#f1cdb3";
    BTN_LEFT.style.color = "#292929";
    BTN_LEFT_END.style.borderColor = "#f1cdb3";
    BTN_LEFT_END.style.color = "#292929";
    BTN_LEFT_END.style.pointer = "pointer";
    BTN_LEFT.style.pointer = "pointer";
  }
});
BTN_LEFT.addEventListener("click", (event) => {
  if (+BTN_NUM.textContent > 1) {
    BTN_NUM.innerText = +BTN_NUM.textContent - 1;
    petOnPage(+BTN_NUM.textContent - 1);
  }
  if (+BTN_NUM.textContent === 1) {
    btnLeftEnd();
  }
  if (+BTN_NUM.textContent < NumPages) {
    BTN_RIGHT.style.borderColor = "#f1cdb3";
    BTN_RIGHT.style.color = "#292929";
    BTN_RIGHT_END.style.borderColor = "#f1cdb3";
    BTN_RIGHT_END.style.color = "#292929";
    BTN_RIGHT_END.style.pointer = "pointer";
    BTN_RIGHT.style.pointer = "pointer";
  }
});
BTN_RIGHT_END.addEventListener("click", (event) => {
  BTN_NUM.innerText = NumPages;
  petOnPage(+BTN_NUM.textContent - 1);
  btnRightEnd();
});
BTN_LEFT_END.addEventListener("click", (event) => {
  BTN_NUM.innerText = 1;
  petOnPage(+BTN_NUM.textContent - 1);
  btnLeftEnd();
});

function btnLeftEnd() {
  BTN_RIGHT.style.borderColor = "#f1cdb3";
  BTN_RIGHT.style.color = "#292929";
  BTN_RIGHT_END.style.borderColor = "#f1cdb3";
  BTN_RIGHT_END.style.color = "#292929";
  BTN_RIGHT_END.style.pointer = "pointer";
  BTN_RIGHT.style.pointer = "pointer";
  BTN_LEFT.style.borderColor = "#cdcdcd";
  BTN_LEFT.style.color = "#cdcdcd";
  BTN_LEFT_END.style.borderColor = "#cdcdcd";
  BTN_LEFT_END.style.color = "#cdcdcd";
  BTN_LEFT_END.style.pointer = "alias";
  BTN_LEFT.style.pointer = "alias";
}
function btnRightEnd() {
  BTN_LEFT.style.borderColor = "#f1cdb3";
  BTN_LEFT.style.color = "#292929";
  BTN_LEFT_END.style.borderColor = "#f1cdb3";
  BTN_LEFT_END.style.color = "#292929";
  BTN_LEFT_END.style.pointer = "pointer";
  BTN_LEFT.style.pointer = "pointer";
  BTN_RIGHT.style.borderColor = "#cdcdcd";
  BTN_RIGHT.style.color = "#cdcdcd";
  BTN_RIGHT_END.style.borderColor = "#cdcdcd";
  BTN_RIGHT_END.style.color = "#cdcdcd";
  BTN_RIGHT_END.style.pointer = "alias";
  BTN_RIGHT.style.pointer = "alias";
}

BTN_LEFT_END.addEventListener("mouseover", (event) => {
  if (+BTN_NUM.textContent > 1) {
    BTN_LEFT_END.style.background = "#fff";
  }
});
BTN_LEFT_END.addEventListener("mouseout", (event) => {
  BTN_LEFT_END.style.background = "";
});
BTN_LEFT.addEventListener("mouseover", (event) => {
  if (+BTN_NUM.textContent > 1) {
    BTN_LEFT.style.background = "#fff";
  }
});
BTN_LEFT.addEventListener("mouseout", (event) => {
  BTN_LEFT.style.background = "";
});
BTN_RIGHT_END.addEventListener("mouseover", (event) => {
  if (+BTN_NUM.textContent < NumPages) {
    BTN_RIGHT_END.style.background = "#fff";
  }
});
BTN_RIGHT_END.addEventListener("mouseout", (event) => {
  BTN_RIGHT_END.style.background = "";
});
BTN_RIGHT.addEventListener("mouseover", (event) => {
  if (+BTN_NUM.textContent < NumPages) {
    BTN_RIGHT.style.background = "#fff";
  }
});
BTN_RIGHT.addEventListener("mouseout", (event) => {
  BTN_RIGHT.style.background = "";
});
