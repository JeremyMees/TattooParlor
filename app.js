const modalDenny = document.querySelector(".artist-denny-modal");
const openDenny = document.querySelector(".open-artist-denny");
const openDennyHam = document.querySelector(".open-artist-denny-ham");
const closeDenny = document.querySelector(".close-artist-denny");
const modalHours = document.querySelector(".hours-modal");
const openHours = document.querySelector(".open-hours");
const openHoursHam = document.querySelector(".open-hours-ham");
const closeHours = document.querySelector(".close-hours");
const modalCare = document.querySelector(".care-modal");
const openCare = document.querySelector(".care-open");
const openCareHam = document.querySelector(".care-open-ham");
const closeCare = document.querySelector(".close-care-modal");
const modalMock = document.querySelector(".mock-modal");
const closeMock = document.querySelector(".close-mock");

const hamburgerOpen = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

openDenny.addEventListener("click", () => {
  modalDenny.style.display = "block";
});
openDennyHam.addEventListener("click", () => {
  modalDenny.style.display = "block";
});
closeDenny.addEventListener("click", () => {
  modalDenny.style.display = "none";
});

openHours.addEventListener("click", () => {
  modalHours.style.display = "block";
});
openHoursHam.addEventListener("click", () => {
  modalHours.style.display = "block";
});
closeHours.addEventListener("click", () => {
  modalHours.style.display = "none";
});

openCare.addEventListener("click", () => {
  modalCare.style.display = "block";
});
openCareHam.addEventListener("click", () => {
  modalCare.style.display = "block";
});
closeCare.addEventListener("click", () => {
  modalCare.style.display = "none";
});

closeMock.addEventListener("click", () => {
  modalMock.style.display = "none";
});

window.onclick = (event) => {
  if (event.target == modalDenny) {
    modalDenny.style.display = "none";
  } else if (event.target == modalHours) {
    modalHours.style.display = "none";
  } else if (event.target == modalCare) {
    modalCare.style.display = "none";
  } else if (event.target == modalMock) {
    modalMock.style.display = "none";
  }
};
