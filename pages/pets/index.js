import { pets } from "./pets.js";

let mainSection = document.querySelector(".main");
let modalWindow = document.querySelector(".modal-window");

/* burger menu */

const nav = document.querySelector(".header-container-nav");
const navList = document.querySelector(".header-container-nav-list-container");
const burgerIcon = document.querySelector(".header-container-burger-menu");
const shadowBox = document.querySelector(".burger-menu-shadow-box");

const burgerMenuToggle = (event) => {
  if (document.documentElement.clientWidth <= 767) {
    nav.classList.toggle("open");
  }
};

burgerIcon.addEventListener("click", burgerMenuToggle);
navList.addEventListener("click", burgerMenuToggle);
shadowBox.addEventListener("click", burgerMenuToggle);

/* getting last page and items per page number */

let lastPage = "";
let itemsPerPage = "";

/*const whatPage = () => {
  let width = document.documentElement.clientWidth;
  switch (width) {
    case width >= 1280:
      console.log("large");
      break;
    case width < 1280:
      console.log("small");
      break;
  }
};*/

const getPaginationData = () => {
  let width = document.documentElement.clientWidth;
  if (width >= 1280) {
    lastPage = 6;
    itemsPerPage = 8;
    return lastPage, itemsPerPage;
  } else if (width >= 768 && width < 1280) {
    lastPage = 8;
    itemsPerPage = 6;
    return lastPage, itemsPerPage;
  } else if (width < 768) {
    lastPage = 16;
    itemsPerPage = 3;
    return lastPage, itemsPerPage;
  }
};

//whatPage();

/* our pets page content and modal window rendering */

const renderCard = (currentPageArray, i) => {
  let card = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardName = document.createElement("p");
  let cardBtn = document.createElement("button");
  card.classList.add("main-container-our-friends-slider-card");
  cardImg.classList.add("main-container-our-friends-slider-card-img");
  cardName.classList.add("main-container-our-friends-slider-card-name");
  cardBtn.classList.add(
    "main-container-our-friends-slider-card-button",
    "main-page-button-empty"
  );
  document
    .querySelector(".main-container-our-friends-slider-cards")
    .append(card);
  card.append(cardImg, cardName, cardBtn);
  cardImg.src = `../../assets/images/pets-${currentPageArray[
    i
  ].name.toLowerCase()}.png`;
  cardImg.alt = `${currentPageArray[i].name}`;
  cardName.textContent = `${currentPageArray[i].name}`;
  cardBtn.textContent = "Learn more";
};

const renderModalCard = (event, currentPageArray, currentPageCardsList) => {
  mainSection.classList.toggle("active-modal");
  document.body.classList.toggle("no-scroll");
  let currentPageCardsListArray = Array.from(currentPageCardsList);
  let activeModalItemIndex = currentPageCardsListArray.indexOf(
    event.currentTarget
  );
  const modalImg = document.querySelector(".modal-img");
  const modalTitle = document.querySelector(".modal-title");
  const modalSubtitle = document.querySelector(".modal-subtitle");
  const modalText = document.querySelector(".modal-text");
  const modalAge = document.querySelector(".age");
  const modalInoculations = document.querySelector(".inoculations");
  const modalDiseases = document.querySelector(".diseases");
  const modalParasites = document.querySelector(".parasites");
  modalImg.src = `../../assets/images/pets-${currentPageArray[
    activeModalItemIndex
  ].name.toLowerCase()}.png`;
  modalImg.alt = `${currentPageArray[activeModalItemIndex].name}`;
  modalTitle.textContent = `${currentPageArray[activeModalItemIndex].name}`;
  modalSubtitle.textContent = `${currentPageArray[activeModalItemIndex].type} - ${currentPageArray[activeModalItemIndex].breed}`;
  modalText.textContent = `${currentPageArray[activeModalItemIndex].description}`;
  modalAge.textContent = `${currentPageArray[activeModalItemIndex].age}`;
  modalInoculations.textContent = `${currentPageArray[activeModalItemIndex].inoculations}`;
  modalDiseases.textContent = `${currentPageArray[activeModalItemIndex].diseases}`;
  modalParasites.textContent = `${currentPageArray[activeModalItemIndex].parasites}`;
};

/* modal window close event listener function */

const closeModal = (event) => {
  if (
    event.target.classList.contains("modal-window") ||
    event.target.classList.contains("modal-window-container") ||
    event.target.classList.contains("modal-button") ||
    event.target.classList.contains("modal-button-img")
  ) {
    mainSection.classList.toggle("active-modal");
    document.body.classList.toggle("no-scroll");
  } else {
    return;
  }
};

modalWindow.addEventListener("click", (event) => closeModal(event));

/* pagination navigation functions */

const strongLeft = document.getElementById("strongLeft");
const lightLeft = document.getElementById("lightLeft");
const centralButton = document.querySelector(
  ".main-container-our-friends-pagination-number-button"
);
const lightRight = document.getElementById("lightRight");
const strongRight = document.getElementById("strongRight");

const btnClassToggler = (event, currentPage) => {
  let pressedBtn = event.target.closest("button").id;
  switch (pressedBtn) {
    case "strongLeft":
      strongRight.classList.remove("main-page-round-button-inactive");
      strongRight.classList.add("main-page-round-button-normal");
      strongLeft.classList.remove("main-page-round-button-normal");
      strongLeft.classList.add("main-page-round-button-inactive");
      lightLeft.classList.remove("main-page-round-button-normal");
      lightLeft.classList.add("main-page-round-button-inactive");
      lightRight.classList.remove("main-page-round-button-inactive");
      lightRight.classList.add("main-page-round-button-normal");
      break;
    case "lightLeft":
      if (currentPage === lastPage) {
        lightRight.classList.remove("main-page-round-button-inactive");
        lightRight.classList.add("main-page-round-button-normal");
        strongRight.classList.remove("main-page-round-button-inactive");
        strongRight.classList.add("main-page-round-button-normal");
      }
      if (currentPage === 2) {
        lightLeft.classList.remove("main-page-round-button-normal");
        lightLeft.classList.add("main-page-round-button-inactive");
        strongLeft.classList.remove("main-page-round-button-normal");
        strongLeft.classList.add("main-page-round-button-inactive");
      }
      break;
    case "lightRight":
      if (currentPage + 1 === lastPage) {
        lightRight.classList.remove("main-page-round-button-normal");
        lightRight.classList.add("main-page-round-button-inactive");
        strongRight.classList.remove("main-page-round-button-normal");
        strongRight.classList.add("main-page-round-button-inactive");
      }
      if (currentPage === 1) {
        lightLeft.classList.remove("main-page-round-button-inactive");
        lightLeft.classList.add("main-page-round-button-normal");
        strongLeft.classList.remove("main-page-round-button-inactive");
        strongLeft.classList.add("main-page-round-button-normal");
      }
      break;
    case "strongRight":
      strongRight.classList.remove("main-page-round-button-normal");
      strongRight.classList.add("main-page-round-button-inactive");
      strongLeft.classList.remove("main-page-round-button-inactive");
      strongLeft.classList.add("main-page-round-button-normal");
      lightLeft.classList.remove("main-page-round-button-inactive");
      lightLeft.classList.add("main-page-round-button-normal");
      lightRight.classList.remove("main-page-round-button-normal");
      lightRight.classList.add("main-page-round-button-inactive");
      break;
  }
};

strongLeft.addEventListener("click", (event) => {
  let currentPage = Number.parseInt(centralButton.innerHTML);
  if (currentPage > 1) {
    let newPage = 1;
    centralButton.innerHTML = `${newPage}`;
    renderPage(1);
    btnClassToggler(event);
  }
});

lightLeft.addEventListener("click", (event) => {
  let currentPage = Number.parseInt(centralButton.innerHTML);
  if (currentPage > 2 && currentPage < lastPage) {
    let newPage = currentPage - 1;
    centralButton.innerHTML = `${newPage}`;
    renderPage(newPage);
  } else if (currentPage > 1) {
    let newPage = currentPage - 1;
    centralButton.innerHTML = `${newPage}`;
    renderPage(newPage);
    btnClassToggler(event, currentPage);
  }
});

lightRight.addEventListener("click", (event) => {
  let currentPage = Number.parseInt(centralButton.innerHTML);
  if (currentPage > 1 && currentPage < lastPage - 1) {
    let newPage = currentPage + 1;
    centralButton.innerHTML = `${newPage}`;
    renderPage(newPage);
  } else if (currentPage < lastPage) {
    let newPage = currentPage + 1;
    centralButton.innerHTML = `${newPage}`;
    renderPage(newPage);
    btnClassToggler(event, currentPage);
  }
});

strongRight.addEventListener("click", (event) => {
  let currentPage = Number.parseInt(centralButton.innerHTML);
  if (currentPage < lastPage) {
    let newPage = lastPage;
    centralButton.innerHTML = `${newPage}`;
    renderPage(lastPage);
    btnClassToggler(event);
  }
});

/* render start and new pagination page */

const renderPage = (pageNumber) => {
  getPaginationData();
  let cards = document.querySelector(
    ".main-container-our-friends-slider-cards"
  );
  cards.innerHTML = "";
  let pageFirstEl = itemsPerPage * pageNumber - itemsPerPage;
  let pageLastEl = pageNumber * itemsPerPage;
  let currentPageArray = pets.slice(pageFirstEl, pageLastEl);
  currentPageArray.map((e, i) => {
    renderCard(currentPageArray, i);
  });
  let currentPageCardsList = document.querySelectorAll(
    ".main-container-our-friends-slider-card"
  );
  currentPageCardsList.forEach((el) => {
    el.addEventListener("click", (event) =>
      renderModalCard(event, currentPageArray, currentPageCardsList)
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderPage(1);
});

window.addEventListener("resize", () => {
  let currentPage = Number.parseInt(centralButton.innerHTML);
  getPaginationData();
  renderPage(currentPage);
});
