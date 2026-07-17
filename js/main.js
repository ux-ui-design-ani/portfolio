// =========================
// LOADER
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loader-progress");
    const bgVideo = document.querySelector(".bg-video");
    const page = document.getElementById("page");

    let value = 0;

    const interval = setInterval(() => {

        if (value < 90) {
            value++;
            progress.style.width = value + "%";
        }

    }, 25);

    bgVideo.addEventListener("playing", () => {

        clearInterval(interval);

        progress.style.width = "100%";

        setTimeout(() => {

            page.classList.add("show");
            loader.classList.add("hide");

        }, 250);

    });

});


// =========================
// MODALS
// =========================

const modal = document.getElementById("modal");
const projectModal = document.getElementById("projectModal");

const modalImg = document.querySelector(".modal-image");
const slider = document.querySelector(".modal-slider");
const overlay = document.querySelector(".modal-overlay");

const projectMenuButtons =
document.querySelector(".project-buttons");


// =========================
// PROJECTS
// =========================

const allCards =
document.querySelectorAll(".grid .card");

const modalCards = [7, 9, 10, 11];

let currentIndex = 0;
let selectedProject = null;

// 👉 ОТКРЫТИЕ ВСЕХ КАРТОЧЕК
     const links = {
  0: {
    desktopOnly:true,

    buttons: [
    {
      text: "Открыть сайт",
  desktop: "https://play.blck.llc/slots",
  mobile: "https://play.blck.llc/slots"
  },
    {
    text: "Case Study",
url: "play-case-study.html"
    }
  ]
},


  2: {


    buttons: [
    {
      text: "Открыть сайт",
    desktop: "https://fully-calm-73039026.figma.site/home",

  },
    
  ]
},

  3: { 
    desktopOnly:true,

    buttons: [
    {
      text: "Открыть сайт",
      desktop: "https://chernihanna.github.io/bakery-symphony/",
  mobile: "https://chernihanna.github.io/bakery-symphony/"
  
    },
    {
      text: "Case Study",
      url: "pdf/Булочная.pdf"
    }
  ]
  
 },

4: {
  desktopOnly:true,

    buttons: [
    {
      text: "Смотреть проект(desktop)",
    desktop: "https://www.figma.com/proto/EYcNWFNqnxhJ0APQWmLhMF/%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F-%D1%84%D0%BE%D1%80%D0%BC?node-id=1-144&viewport=470%2C188%2C0.1&t=SyO4RaVbs98bhh1U-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A144&page-id=0%3A1"
 },
    
  ]
  },

  5: {
    
    desktopOnly:true,

    buttons: [
    {
      text: "Смотреть проект(desktop)",
    desktop: "https://www.figma.com/proto/iQh4DZPoIeXilyMmQ0Crj0/insurance?node-id=1-2593&viewport=40%2C144%2C0.19&t=GQP5dbyuCiNR6uMe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2593&page-id=0%3A1"
  },
    
  ]
  },

  6: {
    desktopOnly:true,

    buttons: [
    {
      text: "Смотреть проект(desktop)",
    desktop: "https://www.figma.com/proto/r2ssJecFsFbeLnqOYfKSrS/Lumi%C3%A8re1?node-id=1-821&viewport=40%2C353%2C0.08&t=mQUcwyUXcawD32Bo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A821&page-id=0%3A1"
},
    
  ]
  },

  8: {
    buttons: [
    {
     text: "Смотреть проект(mobile)",
    desktop: "https://www.figma.com/proto/HcdH3cYaplAO6T1jBUzXB2/%D0%B2%D0%B0%D0%B7%D1%8B-dekstop?node-id=0-882&viewport=304%2C483%2C0.1&t=lHflbOR0Auuiotlc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A882&page-id=0%3A1",
    mobile: "https://www.figma.com/proto/rzTi0i4KBDAcTll5PbHgLv/%D0%B2%D0%B0%D0%B7%D1%8B-mobile?node-id=0-928&viewport=328%2C223%2C0.33&t=3Yxb0KsC0QZEttan-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A928&page-id=0%3A1"
},
   
  ]
  }
};


const latestLinks = {

    0: {
        desktopOnly: true,

        buttons: [
            {
                text: "Открыть сайт",
                desktop: "https://play.blck.llc/slots",
                 mobile: "https://play.blck.llc/slots"
            },
           {
    text: "Case Study",
url: "play-case-study.html"
    }
  ]
    },

    1: {
        buttons: [
            {
                text: "Открыть проект",
                desktop: "https://fully-calm-73039026.figma.site/home"
            },
            
        ]
    }

};



allCards.forEach((card, index) => {

    card.addEventListener("click", (e) => {

        const isMobile = window.innerWidth <= 768;

        // =========================
        // ОБО МНЕ
        // =========================

        if (index === 1) {

            e.preventDefault();

            const aboutSection =
            document.getElementById("about");

            const offset = isMobile ? 20 : 100;

            const top =
                aboutSection.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top,
                behavior: "smooth"
            });

            return;
        }




        // =========================
        // ПРОЕКТЫ
        // =========================

        if (links[index]) {

            e.preventDefault();

            openProjectMenu(index);

            return;

        }

        // =========================
        // ВИДЕО / ИЗОБРАЖЕНИЯ
        // =========================

        if (modalCards.includes(index)) {

            e.preventDefault();

           if (latestLinks[index]) {

    openProjectMenuLatest(index);

} else {

    openMediaInModal(card);

}
            return;

        }

    });

});


const hintOverlay = document.querySelector(".modal-hint-overlay");
const hintIcon = document.querySelector(".hint-icon");

function openMediaInModal(card){

    const media = card.querySelector("video, img");
    const modalVideo = document.querySelector(".modal-video");

    modalImg.style.display = "none";
    slider.style.display = "none";
    modalVideo.style.display = "none";

    if(media.tagName === "VIDEO"){

        const source = media.querySelector("source");

        modalVideo.src = source.src;

        modalVideo.load();

        modalVideo.style.display = "block";

        modalVideo.play();

    }else{

        modalImg.src = media.src;

        modalImg.style.display = "block";

    }

    modal.classList.add("active");

    showHint();

}
// =========================
// ЗАКРЫТИЕ МОДАЛКИ
// =========================
modal.addEventListener("click",()=>{

    modal.classList.remove("active");

    const modalVideo =
    document.querySelector(".modal-video");

    modalVideo.pause();

    modalVideo.currentTime = 0;

});
function showHint() {

    if (window.innerWidth <= 768) {

        hintIcon.src =
        "https://res.cloudinary.com/dcjlxlaiv/image/upload/v1777135604/hand_trc9jn.svg";

    } else {

        hintIcon.src =
        "https://res.cloudinary.com/dcjlxlaiv/image/upload/v1777135605/mouse_nq4c8j.svg";

    }

    hintOverlay.classList.remove("hide");
    hintOverlay.classList.remove("show");

    setTimeout(() => {

        hintOverlay.classList.add("show");

        setTimeout(() => {

            hintOverlay.classList.remove("show");
            hintOverlay.classList.add("hide");

        }, 2000);

    }, 200);

}
modal.addEventListener("click", () => {

    modal.classList.remove("active");

    hintOverlay.classList.remove("show");
    hintOverlay.classList.remove("hide");

    const modalVideo = document.querySelector(".modal-video");

    if (modalVideo) {
        modalVideo.pause();
        modalVideo.currentTime = 0;
    }

});

// =========================
// ЛОГОТИП → НАВЕРХ
// =========================

const logo = document.getElementById("logoScroll");

logo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// HERO → ПРОЕКТЫ
// =========================

const worksSection = document.getElementById("works");
const worksLink = document.getElementById("worksLink");

if (worksLink) {

    worksLink.addEventListener("click", (e) => {

        e.preventDefault();

        const top =
            worksSection.getBoundingClientRect().top +
            window.scrollY -
            100;

        window.scrollTo({
            top,
            behavior: "smooth"
        });

    });

}


// =========================
// СВАЙП СЛАЙДЕРА
// =========================

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchmove", (e) => {

    endX = e.touches[0].clientX;

});

slider.addEventListener("touchend", () => {

    const diff = startX - endX;

    if (diff > 50) {

        currentIndex =
            (currentIndex + 1) %
            splatImages.length;

        updateSlider();

    }

    if (diff < -50) {

        currentIndex =
            (currentIndex - 1 + splatImages.length) %
            splatImages.length;

        updateSlider();

    }

});


// =========================
// LATEST PROJECTS
// =========================

const latestCards =
document.querySelectorAll(".latest-card");

latestCards.forEach((card, index) => {

    card.addEventListener("click", (e) => {

        e.preventDefault();

  if (latestLinks[index]) {

    links[index] = latestLinks[index];

    openProjectMenu(index);

} else {

    openMediaInModal(card);

}

    });

});
// =========================
// BACKGROUND SCROLL EFFECT
// =========================

const bg2 = document.querySelector(".bg-2");
const works = document.querySelector(".works");

if (works) {

    window.addEventListener("scroll", () => {

        const start =
            works.offsetTop +
            works.offsetHeight * 0.3;

        const end =
            works.offsetTop +
            works.offsetHeight * 0.7;


        const progress =
            (window.scrollY - start) /
            (end - start);


        if (bg2) {

            bg2.style.opacity =
                Math.min(Math.max(progress, 0), 1);

        }

    });

}


// =========================
// ABOUT SCROLL
// =========================

const aboutLink =
document.getElementById("aboutLink");

const aboutSection =
document.getElementById("about");


if (aboutLink && aboutSection) {

    aboutLink.addEventListener("click", (e)=>{

        e.preventDefault();


        const offset =
            window.innerWidth <= 768
            ? 20
            : 100;


        const top =
            aboutSection.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({

            top,
            behavior:"smooth"

        });

    });

}


// =========================
// CONTACTS SCROLL
// =========================

const contactsLink =
document.getElementById("contactsLink");

const contactsSection =
document.getElementById("contacts");


if (contactsLink && contactsSection) {

    contactsLink.addEventListener("click",(e)=>{

        e.preventDefault();


        const offset =
            window.innerWidth <= 768
            ? -80
            : -120;


        const top =
            contactsSection.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({

            top,
            behavior:"smooth"

        });

    });

}


// =========================
// HERO BUTTON → WORKS
// =========================

const heroButtons =
document.querySelectorAll(".hero-btn");


heroButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{


        if (!worksSection) return;


        const top =
            worksSection.getBoundingClientRect().top +
            window.scrollY -
            100;


        window.scrollTo({

            top,
            behavior:"smooth"

        });


    });

});


// =========================
// PROJECT MENU
// =========================

function openProjectMenu(index){


    projectMenuButtons.innerHTML = "";


    const project = links[index];


    if (!project) return;



    const buttons =
        project.buttons || [

            {
                text:"Открыть проект",
                desktop:project.desktop,
                mobile:project.mobile
            }

        ];



    buttons.forEach(button=>{

        const btn =
        document.createElement("button");


        btn.className =
        "project-option";


        btn.textContent =
        button.text;



        btn.addEventListener("click",()=>{


            const isMobile =
            window.innerWidth <= 768;
if (
    project.desktopOnly &&
    isMobile &&
    button.desktop
) {

    projectMenuButtons.innerHTML = `
        <div class="project-desktop-message">
            <p>
                ЭТОТ ПРОЕКТ ДОСТУПЕН<br><br>
                ТОЛЬКО НА КОМПЬЮТЕРЕ
            </p>
        </div>
    `;

    return;
}
            let url = "";



            if (button.url) {


                url = button.url;


            } else {


                url = isMobile
                    ? button.mobile
                    : button.desktop;

            }



            if (url) {

                window.open(url,"_blank");

            }



            projectModal.classList.remove("active");


        });



        projectMenuButtons.appendChild(btn);


    });



    projectModal.classList.add("active");


}


// =========================
// CLOSE PROJECT MENU
// =========================

const projectContent =
document.querySelector(".project-modal-content");


if (projectModal && projectContent) {


   projectModal.addEventListener("click",(e)=>{

    if(!projectContent.contains(e.target)){

        projectModal.classList.remove("active");

        projectMenuButtons.style.display = "flex";

  

    }

});

}