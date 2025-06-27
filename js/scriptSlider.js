const slides = [
  //0
  {
    image: "../images/FBR.png",
    title: "FBR Registration",
    sty: "width:36rem;",
    para: "Registered with FBR",
  },
  //1
  {
    image: "../images/PHE.png",
    sty: "width:36rem;",

    title: "PHE Enlisted",
    para: "Enlisted with Public Health Engineering.",
  },

  //2
  {
    image: "../images/K.jpeg",
    sty: "width:36rem;",

    title: "KPRA Registration",
    para: "Registered with KPRA.",
  },
  // 3
  {
    image: "../images/PEC.jpeg",
    sty: "width:36rem;",

    title: "PEC Registration",
    para: "Registered with Pakistan Engineering Council.",
  },
  // 4
  {
    image: "../images/C&W.jpeg",
    sty: "width:36rem;",

    title: "C & W Registration",
    para: "Registered with Local Communication & Work Department",
  },

  //5

  {
    image: "../images/Lcb.png",
    sty: "width:36rem;",

    title: "LCB Registration",
    para: "Registered with Local council Board.",
  },
  //6
  {
    image: "../images/lgrdd.jpeg",
    sty: "width:36rem;",

    title: "LG&RDD Enlisted",
    para: "Enlisted with Local Government and Rural Development Department",
  },
];

let activeIndex = 3;

function calculateStyle(index) {
  let stt = 0;
  let style = {};

  if (index === activeIndex) {
    return {
      transform: "none",
      zIndex: 1,
      filter: "none",
      opacity: 1,
    };
  }

  if (index > activeIndex) {
    stt = index - activeIndex;
    style.transform = `translateX(${300 * stt}px) scale(${
      0.8 - 0.1 * stt
    }) perspective(16px) rotateY(-1deg)`;
  } else {
    stt = activeIndex - index;
    style.transform = `translateX(${-280 * stt}px) scale(${
      0.8 - 0.1 * stt
    }) perspective(16px) rotateY(1deg)`;
  }

  style.zIndex = stt;
  style.filter = "blur(4px)";
  style.opacity = stt > 2 ? 0 : 0.6;

  return style;
}

function createSlider() {
  const slider = document.getElementById("slider");

  // Create items once
  slides.forEach((slide, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
        <div class="image-container">
          <img src="${slide.image}" alt="${slide.title}" style="${slide.sty}" onerror="this.src='https://via.placeholder.com/400x300';">
        </div>
        <div class="content" style="margin-top:31rem">
          <h2>${slide.title}</h2>
          <p>${slide.para}</p>
        </div>
      `;
    slider.appendChild(item);
  });

  // Add navigation buttons once
  slider.innerHTML += `
      <button class="nav-btn prev" onclick="handlePrev()"><</button>
      <button class="nav-btn next" onclick="handleNext()">></button>
    `;
}

function updateSlider() {
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    const style = calculateStyle(index);
    item.style.transform = style.transform;
    item.style.zIndex = style.zIndex;
    item.style.filter = style.filter;
    item.style.opacity = style.opacity;
  });
}

function handleNext() {
  activeIndex = Math.min(activeIndex + 1, slides.length - 1);
  updateSlider();
}

function handlePrev() {
  activeIndex = Math.max(activeIndex - 1, 0);
  updateSlider();
}

// Initialize slider and set initial styles
createSlider();
updateSlider();

// Make functions globally available
window.handleNext = handleNext;
window.handlePrev = handlePrev;
