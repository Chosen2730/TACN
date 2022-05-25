export const nav = `<div id="navigation">
        <div class="nav-left">
          <div class="navbrand">
            <a href="index.html"
              ><img src="./../Images/TACSFON LOGO.png" alt=""
            /></a>
          </div>
          <div class="hamburger">
            <i class="open fas fa-bars"></i>
          </div>
        </div>
        <div class="nav-right">
          <ul class="nav-items">
            <li class="nav-list"><a href="./index.html">Home</a></li>
            <li class="nav-list"><a href="./about.html">Who we are</a></li>
            <li class="nav-list"><a href="./give.html">Give</a></li>
            <li class="nav-list media1">
              <a href="#">+ Information Center</a>
              <div class="media-drop drop-down1">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="./prayer.html">Prayer Request</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="./testimony.html">Testimony</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="./executives.html">Executives</a>
                  </li>
                  <li class="dropdown_item"> <a href="./contact.html">Contact</li>
                </ul>
              </div>
            </li>
            <li class="nav-list media2">
              <a href="#">+ Media</a>
              <div class="media-drop drop-down2">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="./media.html">Family Song</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="./materials.html">Course Materials</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="./events.html">Upcoming Events</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-list"><i class="fas fa-search"></i></li>
          </ul>
        </div>
         </div>
      </div>`;

export const socialContainer = `<div class="mob-social">
            <h5><strong>Do you want to Reach Us?</strong><br> If you're interested in Reaching Us, Getting Saved, or you like 
            to tell us something. We are always available and ready to listen.</h5>
        </div>
        <div class="media-cont">
            <div class="social">
                <div class="icon">
                    <a href="https://www.facebook.com/tacsfon.funaab.7"><img src="./../Images/fb.png" alt=""></a>
                </div>
            </div>
            <div class="social">
                <div class="icon">
                    <a href="www.instagram.com/tacsfon_funaab"><img src="./../Images/ig.png" alt=""></a>
                </div>
            </div>
            <div class="social">
                <div class="icon">
                    <a href="https://wa.me/234814009259"><img src="./../Images/wa.png" alt=""></i></a>
                </div>
            </div>
        </div>`;
export const footerContainer = `<div class="footer">
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
            <form action="https://formspree.io/f/xdobbezn" method="POST" id="form">
            <label for="name">First Name (Required)</label>
            <input type="text" name="name" id="">
            <label for="name">Last Name (Required)</label>
            <input type="text" name="last name" id="">
            <label for="number">Phone Number (Required)</label>
            <input type="tel" name="tel" id="">
            <label for="Email">Email (Required)</label>
            <input type="email" name="email" id="">
            <div class="check">
                <input type="checkbox" name='checkbox' class="checkbox"> 
                <p>I confessed that I have received JESUS Christ as my 
                    personal Lord and Saviour
                </p>
            </div>
            <input class="submit" type="submit" value="Submit">
            <p id="form-alert" class="form-alert"> </p>
            </form>
            
        </div>
    </div>`;

export const executives = [
  {
    position: "president",
    name: "obakunle john",
    image: "./../exco/PRESIDENT.jpg",
  },
  {
    position: "vice president",
    name: "ogunyale Isaiah",
    image: "./../exco/vp.jpg",
  },
  {
    position: "General secretary",
    name: "Adebayo Segun",
    image: "./../exco/gensec.jpg",
  },
  {
    position: "Vice President (Mini Campus)",
    name: "Adeyombo Faith",
    image: "",
  },
  {
    position: "FYB cordinator",
    name: "PHILIP DEBORAH",
    image: "./../exco/fyb.jpg",
  },
  {
    position: "Prayer Cordinator",
    name: "OLA BUSOLA",
    image: "./../exco/prayo.jpg",
  },
  {
    position: "Ass General Sectretary",
    name: "Jayeola Treasure",
    image: "./../exco/ags.jpg",
  },
  {
    position: "Bible Study Secretary",
    name: "Odeyemi Salem",
    image: "",
  },
  {
    position: "Financial Secretary",
    name: "OYEDEJI ANUOLUWAPO",
    image: "./../exco/finsec.jpg",
  },
  {
    position: "Treasure",
    name: "Osinubi Omotoyosi",
    image: "./../exco/treasure.jpg",
  },
  {
    position: "Brothers/Project's Cordinator",
    name: "ADESOLA ADEOLU",
    image: "",
  },
  {
    position: "Drama Cordinator",
    name: "ADEDAYO OMOBOBOYE",
    image: "./../exco/drama.jpg",
  },
  {
    position: "Choir Cordinator",
    name: "KEHINDE BENJAMIN",
    image: "./../exco/choir.jpg",
  },
  {
    position: "Publicity Secretary",
    name: "OLAITAN TIJESUNI O.",
    image: "./../exco/pub.jpg",
  },
  {
    position: "Technical Director",
    name: "OLATUNDE PHILIP",
    image: "./../exco/tech.jpg",
  },
  {
    position: "Organising Secretary",
    name: "ADOJUTELEGAN TOLULOPE",
    image: "./../exco/orga.jpg",
  },
  {
    position: "Header Usher",
    name: "ENIOLA BOLUWATIFE",
    image: "",
  },
  {
    position: "Welfare Secretary",
    name: "OLAWOYIN ANUOLUWAPO",
    image: "",
  },
  {
    position: "Academic Cordinator",
    name: "IDOWU DEBORAH",
    image: "",
  },
  {
    position: "Evangelism Secretary",
    name: "ADELEYE DAVID",
    image: "",
  },
  {
    position: "Centers Cordinator ",
    name: "ADEOSUN TOLULOPE",
    image: "",
  },
  {
    position: "Sister's Cordinator",
    name: "GIDEON ROSELINE",
    image: "./../exco/siscord.jpg",
  },
  {
    position: "Mini Campus & Welfare Sis. Coordinator  ",
    name: "JOHNSON RACHEAL",
    image: "./../exco/msiscod.jpg",
  },
];

export const genExecutives = [
  {
    position: "Oluwo Center Coordinator",
    name: "AKANJI FUNMILAYO",
    image: "./../exco/cent1.jpg",
  },
  {
    position: "Isolu Cele Center Coordinator ",
    name: "FASASI DEBORAH",
    image: "./../exco/cent2.jpg",
  },
];
