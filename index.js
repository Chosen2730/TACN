window.document.addEventListener("DOMContentLoaded", displayItems);
function displayItems() {
  displayNav();
  displayFooter();
  displayScroll();
}
function displayNav() {
  const navSection = document.querySelector("#section1");
  navSection.innerHTML = `<div id="navigation">
        <div class="nav-left">
          <div class="navbrand">
            <a href="index.html"
              ><img src="Images/TACSFON LOGO.png" alt=""
            /></a>
          </div>
          <div class="hamburger">
            <i class="open fas fa-bars"></i>
          </div>
        </div>
        <div class="nav-right">
          <ul class="nav-items">
            <li class="nav-list"><a href="index.html">Home</a></li>
            <li class="nav-list"><a href="about.html">Who we are</a></li>
            <li class="nav-list"><a href="give.html">Give</a></li>
            <li class="nav-list media1">
              <a href="#">+ Information Center</a>
              <div class="media-drop drop-down1">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="prayer.html">Prayer Request</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="testimony.html">Testimony</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="executives.html">Executives</a>
                  </li>
                  <li class="dropdown_item"> <a href="contact.html">Contact</li>
                </ul>
              </div>
            </li>
            <li class="nav-list media2">
              <a href="#">+ Media</a>
              <div class="media-drop drop-down2">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="media.html">Family Song</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="materials.html">Course Materials</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="events.html">Upcoming Events</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-list"><i class="fas fa-search"></i></li>
          </ul>
        </div>
         </div>
      </div>`;

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

  socialSection.innerHTML = `<div class="mob-social">
            <h5><strong>Do you want to Reach Us?</strong><br> If you're interested in Reaching Us, Getting Saved, or you like 
            to tell us something. We are always available and ready to listen.</h5>
        </div>
        <div class="media-cont">
            <div class="social">
                <div class="icon">
                    <a href="https://www.facebook.com/tacsfon.funaab.7"><img src="Images/fb.png" alt=""></a>
                </div>
            </div>
            <div class="social">
                <div class="icon">
                    <a href="www.instagram.com/tacsfon_funaab"><img src="Images/ig.png" alt=""></a>
                </div>
            </div>
            <div class="social">
                <div class="icon">
                    <a href="https://wa.me/234814009259"><img src="Images/wa.png" alt=""></i></a>
                </div>
            </div>
        </div>`;

  const footerSection = document.querySelector("#section5");
  footerSection.innerHTML = `<div class="footer">
        <div class="about">
            <h3>About Us</h3>
            <p>
                Palmview, Camp Junction, FUNAAB Alabata, Abeokuta, Ogun State. <br>
                Email: tacfonfunaab@gmail.com;<br>
                Phone: +234 814 452 6136
            </p>
            <h4 class="ourChurch">Our Church</h3>
            <h3>Service Times</h3>
            <p class="days">
                Sundays at 8:00am <br>
                Wednesday at 3:00pm <br>
                Every last Friday at 10pm
            </p>
        </div>
        <hr class="hr-line">
        <div class="contact">
            <h5 class="contact-header">I've made a choice today, <span>(Salvation Form)</span> </h5>
            <label for="name">First Name (Required)</label>
            <input type="text" name="" id="">
            <label for="name">Last Name (Required)</label>
            <input type="text" name="" id="">
            <label for="number">Phone Number (Required)</label>
            <input type="tel" name="" id="">
            <label for="Email">Email (Required)</label>
            <input type="email" name="" id="">
            <div class="check">
                <input type="checkbox" class="checkbox"> 
                <p>I confessed that I have received JESUS Christ as my 
                    personal Lord and Saviour
                </p>
            </div>
            <input class="submit" type="submit" value="Submit">
        </div>
    </div>`;

  const copyright = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  copyright.innerHTML = `<p class="copyright">  &copy; ${year} Tacsfon Funaab, All rights reserved.</p>`;

  document.body.appendChild(socialSection);
  document.body.appendChild(footerSection);
  document.body.appendChild(copyright);
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
