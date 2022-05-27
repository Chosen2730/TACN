export const nav = `<div id="navigation">
        <div class="nav-left">
          <div class="navbrand">
            <a href="/"
              ><img src="./../Images/TACSFON LOGO.png" alt=""
            /></a>
          </div>
          <div class="hamburger">
            <i class="open fas fa-bars"></i>
          </div>
        </div>
        <div class="nav-right">
          <ul class="nav-items">
            <li class="nav-list"><a href="/">Home</a></li>
            <li class="nav-list"><a href="./about.html">Who we are</a></li>
            <li class="nav-list"><a href="./give.html">Give</a></li>
            <li class="nav-list media1">
              <a href="#">+ Info Center</a>
              <div class="media-drop drop-down1">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="./executives.html">Executives</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="./media.html">Family Song</a>
                  </li>
                   <li class="dropdown_item">
                    <a href="./events.html">Upcoming Events</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-list media2">
              <a href="#">+ Resources</a>
              <div class="media-drop drop-down2">
                <ul class="media-drop">
                  <li class="dropdown_item">
                    <a href="https://drive.google.com/drive/folders/1XuzEzopVvmNaLI1r5AlSTrkJhQvGOhFp">Course Materials</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="https://drive.google.com/drive/folders/1xcJZh9cpU8oDVFVsw_hHYZvL0LV7CX70">Past Questions</a>
                  </li>
                   <li class="dropdown_item">
                    <a href="https://drive.google.com/drive/folders/1R3hha6OGRB2V3cSi-OEsAhX79rPVkwvg">Inspirational Books</a>
                  </li>
                  <li class="dropdown_item">
                    <a href="https://drive.google.com/drive/folders/1jkKYN-DefMlJkHiCsERJ9a3gTt9E3-e9">Sermons/Messages</a>
                  </li>
                </ul>
              </div>
            </li>
            
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
                    <a href="https://www.instagram.com/tacsfon_funaab/"><img src="./../Images/ig.png" alt=""></a>
                </div>
            </div>
            <div class="social">
                <div class="icon">
                    <a href="tel:+2348140092590"><img src="./../Images/call.png" alt=""></i></a>
                </div>
            </div>
        </div>`;

export const footerContainer = `<div class="footer" id='contact'>
        <div class="about">
            <h3>Our Church</h3>
            <p>
                Address: Glorious City, Palmview, Camp Junction, FUNAAB Alabata, Abeokuta, Ogun State. <br>
                Email: tacfonfunaab01@gmail.com;<br>
                Phone: +234-814-0092590
            </p>
            
            <h3>Service Times</h3>
            <p class="days">
                Sundays at 8:00am <br>
                Wednesday at 3:00pm <br>
                Every last Friday at 10pm
            </p>
        </div>
        <hr class="hr-line">
        <div class="contact" id='contact_form'>
            <h5 class="contact-header">We are always available to listen to you, pray with you and also rejoice with you.</h5>
            <form action="https://formspree.io/f/xdobbezn" method="POST" id="form">
            <select>
              <option name='all'>Select Category</option>
              <option name='prayer'>Prayer Request</option>
              <option name='testimony'>Testimony</option>
              <option name='questions'>Questions/Enquiry</option>
            </select>
            <label for="name" >First Name (Required)</label>
            <input type="text" required name="name" id="">
            <label for="name">Last Name (Required)</label>
            <input type="text" required name="last name" id="">
            <label for="number">Phone Number (Required)</label>
            <input type="tel" required name="tel" id="">
            <label for="Email">Email (Required)</label>
            <input type="email" required name="email" id="">
            <textarea placeholder='Enter your prayer request, questions or testmony here.' name="message" id="" required cols="30" rows="6"></textarea>
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
    tel: "08140092590",
  },
  {
    position: "vice president",
    name: "ogunyale Isaiah",
    image: "./../exco/vp.jpg",
    tel: "08113540205",
  },
  {
    position: "General secretary",
    name: "Adebayo Segun",
    image: "./../exco/gensec.jpg",
    tel: "09069601361",
  },
  {
    position: "Vice President (Mini Campus)",
    name: "Adeyombo Faith",
    image: "",
    tel: "08170364433",
  },
  {
    position: "FYB cordinator",
    name: "PHILIP DEBORAH",
    image: "./../exco/fyb.jpg",
    tel: "09026801579",
  },
  {
    position: "Prayer Cordinator",
    name: "OLA BUSOLA",
    image: "./../exco/prayo.jpg",
    tel: "07065947918",
  },
  {
    position: "Ass General Sectretary",
    name: "Jayeola Treasure",
    image: "./../exco/ags.jpg",
    tel: "07026920645",
  },
  {
    position: "Bible Study Secretary",
    name: "Odeyemi Salem",
    image: "",
    tel: "08038371181",
  },
  {
    position: "Financial Secretary",
    name: "OYEDEJI ANUOLUWAPO",
    image: "./../exco/finsec.jpg",
    tel: "07051105126",
  },
  {
    position: "Treasure",
    name: "Osinubi Omotoyosi",
    image: "./../exco/treasure.jpg",
    tel: "08169175473",
  },
  {
    position: "Brothers/Project's Cordinator",
    name: "ADESOLA ADEOLU",
    image: "",
    tel: "08166783906",
  },
  {
    position: "Drama Cordinator",
    name: "ADEDAYO OMOBOBOYE",
    image: "./../exco/drama.jpg",
    tel: "08171701318",
  },
  {
    position: "Choir Cordinator",
    name: "KEHINDE BENJAMIN",
    image: "./../exco/choir.jpg",
    tel: "08101288931",
  },
  {
    position: "Publicity Secretary",
    name: "OLAITAN TIJESUNI O.",
    image: "./../exco/pub.jpg",
    tel: "08161510446",
  },
  {
    position: "Technical Director",
    name: "OLATUNDE PHILIP",
    image: "./../exco/tech.jpg",
    tel: "09037579471",
  },
  {
    position: "Organising Secretary",
    name: "ADOJUTELEGAN TOLULOPE",
    image: "./../exco/orga.jpg",
    tel: "08106033395",
  },
  {
    position: "Header Usher",
    name: "ENIOLA BOLUWATIFE",
    image: "",
    tel: "08053628834",
  },
  {
    position: "Welfare Secretary",
    name: "OLAWOYIN ANUOLUWAPO",
    image: "",
    tel: "07082511927",
  },
  {
    position: "Academic Cordinator",
    name: "IDOWU DEBORAH",
    image: "",
    tel: "08067275070",
  },
  {
    position: "Evangelism Secretary",
    name: "ADELEYE DAVID",
    image: "",
    tel: "07055772700",
  },
  {
    position: "Centers Cordinator ",
    name: "ADEOSUN TOLULOPE",
    image: "",
    tel: "0813692200",
  },
  {
    position: "Sister's Cordinator",
    name: "GIDEON ROSELINE",
    image: "./../exco/siscord.jpg",
    tel: "08160537486",
  },
  {
    position: "Mini Campus & Welfare Sis. Coordinator  ",
    name: "JOHNSON RACHEAL",
    image: "./../exco/msiscod.jpg",
    tel: "09039537180",
  },
];

export const genExecutives = [
  {
    position: "Oluwo Center Coordinator",
    name: "AKANJI FUNMILAYO",
    image: "./../exco/cent1.jpg",
    tel: "08064857523",
  },
  {
    position: "Isolu Cele Center Coordinator ",
    name: "FASASI DEBORAH",
    image: "./../exco/cent2.jpg",
    tel: "08102543477",
  },
];
