window.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const progress = document.querySelector(".loader-progress");
    const bgVideo = document.querySelector(".bg-video");

    let value = 0;

    const interval = setInterval(() => {

        if (value < 90) {
            value += 1;
            progress.style.width = value + "%";
        }

    }, 25);

    bgVideo.addEventListener("playing", () => {

        clearInterval(interval);

        progress.style.width = "100%";

        setTimeout(() => {

            const page = document.getElementById("page");

page.classList.add("show");
loader.classList.add("hide");

        }, 250);

    });

});



const modal = document.getElementById('modal');
const modalImg = document.querySelector('.modal-image');
const slider = document.querySelector('.modal-slider');
document.addEventListener('click', (e) => {

});
const overlay = document.querySelector('.modal-overlay');
const desktopOnlyCards = [0, 2, 3, 5]; // 1,3,4,6 (индексы с 0)
const modalCards = [7, 9, 10, 11];     // 8,10,11,12
const allCards = document.querySelectorAll('.grid .card');


let currentIndex = 0;

// 👉 ОТКРЫТИЕ ВСЕХ КАРТОЧЕК
     const links = {
  0: {
  desktop: "https://chernihanna.github.io/bakery-symphony/",
  mobile: "https://chernihanna.github.io/bakery-symphony/"
},

  2: {
    desktop: "https://www.figma.com/proto/EYcNWFNqnxhJ0APQWmLhMF/%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F-%D1%84%D0%BE%D1%80%D0%BC?node-id=1-144&viewport=470%2C188%2C0.1&t=SyO4RaVbs98bhh1U-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A144&page-id=0%3A1"
  },

  3: {
    desktop: "https://www.figma.com/proto/iQh4DZPoIeXilyMmQ0Crj0/insurance?node-id=1-2593&viewport=40%2C144%2C0.19&t=GQP5dbyuCiNR6uMe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2593&page-id=0%3A1"
  },
4: {
  desktop: "https://fully-calm-73039026.figma.site/home",
  mobile: "https://fully-calm-73039026.figma.site/home"
},
  5: {
    desktop: "https://www.figma.com/proto/r2ssJecFsFbeLnqOYfKSrS/Lumi%C3%A8re1?node-id=1-821&viewport=40%2C353%2C0.08&t=mQUcwyUXcawD32Bo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A821&page-id=0%3A1"
  },

  6: {
    desktop: "https://www.figma.com/proto/58FZnfBrmm4Ud5zpnuxXWH/%D0%BD%D1%84%D1%82-dekstop?node-id=0-49&viewport=40%2C52%2C0.54&t=uFIN6jrqIsB7x6m6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    mobile: "https://www.figma.com/proto/XByM4k3wqCGaznVKVQpIEN/%D0%BD%D1%84%D1%82-mobile?node-id=0-988&viewport=230%2C40%2C0.78&t=L7LDGVP3lAHz4aur-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  },

  8: {
    desktop: "https://www.figma.com/proto/HcdH3cYaplAO6T1jBUzXB2/%D0%B2%D0%B0%D0%B7%D1%8B-dekstop?node-id=0-882&viewport=304%2C483%2C0.1&t=lHflbOR0Auuiotlc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A882&page-id=0%3A1",
    mobile: "https://www.figma.com/proto/rzTi0i4KBDAcTll5PbHgLv/%D0%B2%D0%B0%D0%B7%D1%8B-mobile?node-id=0-928&viewport=328%2C223%2C0.33&t=3Yxb0KsC0QZEttan-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A928&page-id=0%3A1"
  }
};

allCards.forEach((card, index) => {

  card.addEventListener("click", (e) => {

    const isMobile = window.innerWidth <= 768;

    // ОБО МНЕ
    if (index === 1) {

      e.preventDefault();

      const aboutSection = document.getElementById("about");

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

    // ПРОЕКТЫ FIGMA
    if (links[index]) {

      e.preventDefault();

      const link = links[index];

      if (!link.mobile && isMobile) {

        modalImg.style.display = "none";
        slider.style.display = "none";

        document.querySelector(".modal-message").style.display = "flex";

        modal.classList.add("active");

        return;
      }

      window.open(
        isMobile ? link.mobile : link.desktop,
        "_blank"
      );

      return;
    }

    // ВИДЕО / ИЗОБРАЖЕНИЯ
    if (modalCards.includes(index)) {

      e.preventDefault();

      document.querySelector(".modal-message").style.display = "none";

      slider.style.display = "none";

      const media = card.querySelector("video, img");
      const modalVideo =
        document.querySelector(".modal-video");

      modalImg.style.display = "none";
      modalVideo.style.display = "none";

      if (media.tagName === "VIDEO") {

        modalVideo.src =
          media.querySelector("source").src;

        modalVideo.style.display = "block";
        modalVideo.play();

      } else {

        modalImg.src = media.src;
        modalImg.style.display = "block";

      }

      modal.classList.add("active");
      showHint();

      return;
    }

  });

});
const hintOverlay = document.querySelector('.modal-hint-overlay');
const hintIcon = document.querySelector('.hint-icon');


function openMediaInModal(card) {
  const media = card.querySelector('video, img');
  const modalVideo = document.querySelector('.modal-video');

  // скрываем всё
  modalImg.style.display = "none";
  slider.style.display = "none";
  modalVideo.style.display = "none";

  if (media.tagName === "VIDEO") {
    const source = media.querySelector('source').src;

    modalVideo.src = source;
    modalVideo.style.display = "block";
    modalVideo.play();

  } else {
    modalImg.src = media.src;
    modalImg.style.display = "block";
  }

  modal.classList.add('active');
  showHint();
}


function showHint() {
  // 👉 меняем иконку
  if (window.innerWidth <= 768) {
    hintIcon.src = "https://res.cloudinary.com/dcjlxlaiv/image/upload/v1777135604/hand_trc9jn.svg";
  } else {
    hintIcon.src = "https://res.cloudinary.com/dcjlxlaiv/image/upload/v1777135605/mouse_nq4c8j.svg";
  }

  // 👉 через 1 сек показываем
  setTimeout(() => {
    hintOverlay.classList.add('show');

    // 👉 через 3 сек скрываем
    setTimeout(() => {
      hintOverlay.classList.remove('show');
      hintOverlay.classList.add('hide');

      setTimeout(() => {
        hintOverlay.classList.remove('hide');
      }, 500);

    }, 3000);

  }, 1000);
}
function updateSlider() {
  const slides = document.querySelectorAll('.modal-slide');

  slides.forEach((slide, i) => {
    slide.classList.remove('active');

    if (i === currentIndex) {
      slide.classList.add('active');
    }
  });
}


modal.addEventListener('click', () => {
  modal.classList.remove('active');

  const modalVideo = document.querySelector('.modal-video');
  modalVideo.pause();
  modalVideo.src = "";
});

const scrollBtn = document.querySelector('.hero-btn');

const logo = document.getElementById('logoScroll');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const worksSection =
document.getElementById("works");

worksLink.addEventListener('click', (e) => {
  e.preventDefault(); // ❗ чтобы не прыгал вверх

  const offset = 100; // твой отступ (учёт хедера)

  const top = worksSection.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
});
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  const diff = startX - endX;

  // 👉 свайп влево
  if (diff > 50) {
    currentIndex = (currentIndex + 1) % splatImages.length;
    updateSlider();
  }

  // 👉 свайп вправо
  if (diff < -50) {
    currentIndex = (currentIndex - 1 + splatImages.length) % splatImages.length;
    updateSlider();
  }
});
const latestCards = document.querySelectorAll('.latest-card');

const latestDesktopOnly = [1]; // если нужно

latestCards.forEach((card, index) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();

    const isMobile = window.innerWidth <= 768;

    // 👉 если только desktop
    if (latestDesktopOnly.includes(index)) {
      if (isMobile) {
        modalImg.style.display = "none";
        slider.style.display = "none";
        document.querySelector('.modal-message').style.display = "flex";

        modal.classList.add('active');
        return;
      }
    }

    // 👉 универсальное открытие (И ВОТ ЭТО ГЛАВНОЕ)
    document.querySelector('.modal-message').style.display = "none";
    openMediaInModal(card);
  });
});



const bg2 = document.querySelector('.bg-2');
const works = document.querySelector('.works');

window.addEventListener('scroll', () => {
  const start = works.offsetTop + works.offsetHeight * 0.3;
  const end = works.offsetTop + works.offsetHeight * 0.7;

  const progress = (window.scrollY - start) / (end - start);

  if (bg2) {
    bg2.style.opacity = Math.min(Math.max(progress,0),1);
}
});
const aboutLink = document.getElementById('aboutLink');
const aboutSection = document.getElementById('about');

aboutLink.addEventListener('click', (e) => {
  e.preventDefault();

  const isMobile = window.innerWidth <= 768;

  const offset = isMobile ? 20 : 100;

  const top = aboutSection.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
});
const contactsLink = document.getElementById('contactsLink');
const contactsSection = document.getElementById('contacts');

contactsLink.addEventListener('click', (e) => {
  e.preventDefault();

  const isMobile = window.innerWidth <= 768;

  const offset = isMobile ? -80 : -120; 
  // 🔥 отрицательное значение = скроллит ниже

  const top = contactsSection.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
});
const projectButtons = document.querySelectorAll('.hero-btn');


// кнопки
projectButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const offset = 100;

    const top = worksSection.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});
