import {
  nav,
  socialContainer,
  footerContainer,
  executives,
  genExecutives,
} from "./utils.js";

window.document.addEventListener("DOMContentLoaded", displayItems);
function displayItems() {
  displayNav();
  displayScroll();
  displayFooter();
  form();
  displayExecutives("excos_cont", executives);
  displayExecutives("cent-excos_cont", genExecutives);
}

function displayNav() {
  const navSection = document.querySelector("#section1");
  navSection.innerHTML = nav;
  const dropDown1 = document.querySelector(".drop-down1");
  const dropDown2 = document.querySelector(".drop-down2");
  const navToggle = document.querySelector(".hamburger");
  const navLists = document.querySelectorAll(".nav-list");
  const navRight = document.querySelector(".nav-right");
  const navigation = document.querySelector("#navigation");

  navToggle.addEventListener("click", () => {
    if (!navRight.classList.contains("show-nav")) {
      navRight.classList.add("show-nav");
      navToggle.innerHTML = `<i class="close fas fa-times"></i>`;
      navigation.style.backgroundColor = "rgba(0, 107, 62, 0.9)";
    } else if (navRight.classList.contains("show-nav")) {
      navRight.classList.remove("show-nav");
      navToggle.innerHTML = `<i class="close fas fa-bars"></i>`;
      navigation.style.backgroundColor = "transparent";
    }
  });

  navLists.forEach((navList) => {
    navList.classList.remove("active-nav");
    navList.addEventListener("click", () => {
      const media1 = navList.classList.contains("media1");
      const media2 = navList.classList.contains("media2");
      if (media1) {
        dropDown1.classList.toggle("show-media");
      } else {
        dropDown1.classList.remove("show-media");
      }
      if (media2) {
        dropDown2.classList.toggle("show-media");
      } else {
        dropDown2.classList.remove("show-media");
      }
    });
  });
}
function displayFooter() {
  const socialSection = document.querySelector("#section4");
  socialSection.innerHTML = socialContainer;
  const footerSection = document.querySelector("#section5");
  footerSection.innerHTML = footerContainer;
  const copyright = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  copyright.innerHTML = `<p class="copyright">  &copy; ${year} Tacsfon Funaab, All rights reserved.</p>`;
  document.body.appendChild(socialSection);
  document.body.appendChild(footerSection);
  document.body.appendChild(copyright);

  const submit = document.querySelector(".submit");
  submit.addEventListener("click", () => {
    document.querySelector(".form-alert").classList.add("show-alert");
  });
}

function displayScroll() {
  const scrollBtn = document.createElement("div");
  scrollBtn.classList.add("topButton");
  scrollBtn.setAttribute("id", "topButton");
  scrollBtn.innerHTML = `<i class="fas fa-level-up-alt"></i>`;
  document.body.appendChild(scrollBtn);
  const scroll = document.querySelector("#topButton");
  scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
  window.addEventListener("scroll", () => {
    const scrollLevel = window.pageYOffset;
    if (scrollLevel > 300) {
      scroll.style.display = "block";
    } else {
      scroll.style.display = "none";
    }
  });
}

const speechSpan = document.querySelector(".speech_span");
const speechBtn = document.querySelector(".speech_more");
speechBtn.addEventListener("click", () => {
  if (!speechSpan.classList.contains("show-speech")) {
    speechSpan.classList.add("show-speech");
    speechBtn.textContent = "[[Show Less";
  } else if (speechSpan.classList.contains("show-speech")) {
    speechSpan.classList.remove("show-speech");
    speechBtn.textContent = "[[Show More";
  }
});

function displayExecutives(selector, varName) {
  const excoCont = document.querySelector(`.${selector}`);
  const excos = varName
    .map((exco) => {
      const { image, name, position } = exco;

      const img = image || "./../exco/unknown.jpg";
      return `<div class="excos">
            <div><img src=${img} alt=${name} /></div>
            <h5 class="exco_name">${name}</h5>
            <h5 class="exco_office">- ${position} -</h5>
          </div>`;
    })
    .join("");
  excoCont.innerHTML = excos;
}

function form() {
  var form = document.getElementById("form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-alert");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Your message has been recieved!!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });

    if (status.textContent) {
      setTimeout(() => {
        status.classList.remove("show-alert");
      }, 3000);
    }
  }
  form.addEventListener("submit", handleSubmit);
}
