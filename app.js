import { datas, uzmanlar, social } from "./data.js";

var modal = document.getElementById("myModal");
var modalSocial = document.getElementById("myModalSocial");
const detail = document.getElementById("detail");
const detailSocial = document.getElementById("detailSocial");
var span = document.getElementsByClassName("close")[0];

const container = document.getElementById("container");


uzmanlar.forEach((uzman, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    if (index % 2 === 0) {
        wrapper.classList.add("even");
    } else {
        wrapper.classList.add("odd");
    }

    const content = `
        <div class="info">
            <h3>${uzman.name}</h3>
            <p>${uzman.title}</p>
            <button class="btn" id="btn${index + 1}" data-id="${index + 1}">Detayları Görüntüle</button>
        </div>
        <div class="gorsel gorsel${index + 1}">
            <img src="${uzman.img}" alt="${uzman.name}">
        </div>
    `;

    wrapper.innerHTML = content;
    container.appendChild(wrapper);
});

function openModal(id) {
    var data = datas.find((item) => item.id === id);
    if (data) {
        detail.innerHTML = data.info;
        modal.style.display = "block";
    }
}

function closeModal() {
    modal.style.display = "none";
}

span.addEventListener("click", function () {
    closeModal();
});



function addListenersToButtons() {
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
        var id = parseInt(button.dataset.id);
        button.addEventListener("click", function () {
            openModal(id);
         });
    });
}


function openModalSocial(id) {
  let data = social.find((item) => item.id === id);
  if (data) {
      detailSocial.innerHTML = data.info;
      modalSocial.style.display = "block";
  }
}

function closeModalSocial() {
  modalSocial.style.display = "none";
}

function addListenersToSocials() {
  let buttons = document.querySelectorAll(".logos");
  buttons.forEach(function (button) {
      let id = parseInt(button.dataset.id);
      button.addEventListener("click", function () {
        openModalSocial(id);
       });
  });
}

window.addEventListener("load", function () {
  addListenersToButtons();
  addListenersToSocials();
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
      closeModal();
  } 
  if (event.target == modalSocial) {
    closeModalSocial();
  }
});