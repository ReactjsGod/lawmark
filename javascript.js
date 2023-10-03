const cases = [
  {
    title: "Car Accident",
    details: "A client was injured in a car accident caused by a reckless driver.",
    result: "2 million",
    reason: "Negligence of the other driver",
  },
  {
    title: "Medical Malpractice",
    details: "A patient suffered complications due to a surgical error during a routine procedure.",
    result: "5 million",
    reason: "Medical negligence",
  },
  {
    title: "Product Liability",
    details: "A consumer was injured by a defective product that malfunctioned during use.",
    result: "3 million",
    reason: "Manufacturer's failure to ensure product safety",
  },
  {
    title: "Slip and Fall",
    details: "A person slipped and fell in a grocery store due to a wet floor with no warning signs.",
    result: "1.5 million",
    reason: "Store's negligence in maintaining a safe environment",
  },
  {
    title: "Workplace Injury",
    details: "An employee sustained serious injuries at work due to inadequate safety measures.",
    result: "4 million",
    reason: "Employer's failure to provide a safe working environment",
  },
  {
    title: "Defamation",
    details: "A person's reputation was damaged by false statements made by a competitor.",
    result: "8 million",
    reason: "Malicious false statements causing harm to the individual's reputation",
  },
  {
    title: "Wrongful Death",
    details: "A family lost a loved one due to a faulty medical diagnosis and treatment.",
    result: "6 million",
    reason: "Medical malpractice resulting in a tragic loss",
  },
  {
    title: "Employment Discrimination",
    details: "An employee faced discrimination at work based on their gender and ethnicity.",
    result: "1 million",
    reason: "Violation of anti-discrimination laws",
  },
  {
    title: "Environmental Pollution",
    details: "A community suffered health issues due to a chemical company's pollution of their water supply.",
    result: "20 million",
    reason: "Environmental damage and health consequences",
  },
  {
    title: "Construction Site Accident",
    details: "A construction worker was injured in a scaffolding collapse.",
    result: "4.5 million",
    reason: "Failure to maintain safe working conditions",
  },
  {
    title: "Dog Bite",
    details: "A person was bitten by a neighbor's aggressive dog.",
    result: "800,000",
    reason: "Dog owner's negligence in controlling their pet",
  },
  {
    title: "Aviation Accident",
    details: "A passenger suffered injuries during a commercial airline turbulence incident.",
    result: "7 million",
    reason: "Negligence in flight operations",
  },
  {
    title: "Nursing Home Neglect",
    details: "An elderly resident of a nursing home suffered injuries due to neglect and lack of proper care.",
    result: "3.5 million",
    reason: "Nursing home's failure to provide adequate care",
  },
  {
    title: "Asbestos Exposure",
    details: "A worker developed mesothelioma due to prolonged exposure to asbestos at the workplace.",
    result: "12 million",
    reason: "Employer's knowledge of asbestos exposure risks",
  },
  {
    title: "Police Brutality",
    details: "A citizen suffered physical harm and civil rights violations in an incident of police brutality.",
    result: "2.5 million",
    reason: "Excessive use of force by law enforcement",
  },
  {
    title: "Defective Medication",
    details: "A patient experienced severe side effects from a prescription medication with undisclosed risks.",
    result: "9 million",
    reason: "Pharmaceutical company's failure to warn of risks",
  },
  {
    title: "Boating Accident",
    details: "A boating accident resulted in injuries to passengers due to the boat operator's recklessness.",
    result: "1.2 million",
    reason: "Boat operator's negligence in following safety guidelines",
  },
  {
    title: "Toxic Chemical Exposure",
    details: "Factory workers were exposed to toxic chemicals, leading to health issues.",
    result: "5.5 million",
    reason: "Factory's failure to implement safety measures",
  },
  {
    title: "Train Derailment",
    details: "Passengers on a train suffered injuries in a derailment caused by poor maintenance.",
    result: "6.8 million",
    reason: "Railroad company's negligence in maintaining tracks",
  },
  {
    title: "Defective Tires",
    details: "A vehicle accident was caused by defective tires that led to a loss of control.",
    result: "1.7 million",
    reason: "Tire manufacturer's failure to produce safe products",
  },
  {
    title: "Child Injury",
    details: "A child was injured on a defective playground equipment in a public park.",
    result: "1.3 million",
    reason: "Government agency's negligence in maintaining park equipment",
  },
  {
    title: "Gas Explosion",
    details: "A gas explosion in a residential building caused severe injuries to residents.",
    result: "14 million",
    reason: "Gas company's failure to detect and address gas leaks",
  },
  {
    title: "Product Recall",
    details: "Consumers were injured by a product that was later recalled due to safety hazards.",
    result: "2.3 million",
    reason: "Manufacturer's delay in issuing a recall",
  },
];

const whyUS = [
  {
    title: "No fee unless we win your case",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "Record-setting results",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "Record-setting results",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "We’re available 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "3 convenient locations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "3 convenient locations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
];


const hamburgerMenu = document.getElementById("hamburger-menu");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const mobileNav = document.getElementById("mobile-nav");
const body = document.body;
const sliderContainer = document.querySelector(".slider-inner");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const loadMoreBtn = document.querySelector(".load-more-btn");
const loadMorebtnContainer = document.querySelector(
  "section.services div div.load-more"
);
const hiddenItems = document.querySelectorAll(
  "section.services div div:nth-child(n + 4):nth-child(-n + 9)"
);

let currentSlideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", () => {
  handleSwipe();
});

// Function to handle swipe gestures
function handleSwipe() {
  const swipeThreshold = 5; 

  if (touchStartX - touchEndX > swipeThreshold) {
    nextSlide();
  } else if (touchEndX - touchStartX > swipeThreshold) {
    previousSlide();
  }
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileNav.classList.remove("show-mobile-nav");
  bar1.classList.remove("change");
  bar2.classList.remove("change");
  bar3.classList.remove("change");
}

// Event listener to close mobile menu when body is clicked
document.addEventListener("click", (event) => {
  if (!mobileNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    closeMobileMenu();
  }
});

hamburgerMenu.addEventListener("click", () => {
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
  mobileNav.classList.toggle("show-mobile-nav");
});

// Her we create a Function and append "Card" items
function createAndAppendCards() {
  cases.forEach((caseData) => {
    const card = createCaseCard(caseData);
    sliderContainer.appendChild(card);
  });
}

function createCaseCard(caseData) {
  const card = document.createElement("div");
  card.classList.add("case-card");

  const cardContent = `
    <h2>${caseData.title}</h2>
    <p>${caseData.details}</p>
    <div>
      Result: <span>$${caseData.result}</span>
    </div>
    <p>Reason: ${caseData.reason}</p>
  `;

  card.innerHTML = cardContent;
  return card;
}

function updateSliderPosition() {
  const cardWidth = sliderContainer.offsetWidth;
  const translateX = -currentSlideIndex * cardWidth;
  sliderContainer.style.transform = `translateX(${translateX}px)`;
}

createAndAppendCards();

nextBtn.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= cases.length) {
    currentSlideIndex = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = cases.length - 1;
  }
  updateSliderPosition();
});

//Handle the Guestures slider
function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= cases.length) {
    currentSlideIndex = 0;
  }
  updateSliderPosition();
}

function previousSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = cases.length - 1;
  }
  updateSliderPosition();
}


loadMoreBtn.addEventListener("click", () => {
  hiddenItems.forEach((item) => {
    item.style.display = "flex";
  });
  loadMoreBtn.style.display = "none";
  loadMorebtnContainer.style.border = "none";
});

// Here we create a Function and append "Why Choose Us" items
function createAndAppendWhyUsItems() {
    const reasonsContainer = document.querySelector(".reasons-container");
  
    whyUS.forEach((item) => {
      const whyUsItem = createWhyUsItem(item);
      reasonsContainer.appendChild(whyUsItem);
    });
  }
  
  // Function to create a single "Why Choose Us" item
  function createWhyUsItem(item) {
    const whyUsItem = document.createElement("div");
    whyUsItem.classList.add("why-us-item");
  
    const itemContent = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    `;
  
    whyUsItem.innerHTML = itemContent;
    return whyUsItem;
  }
  
  createAndAppendWhyUsItems();


/* 
const cases = [
  {
    title: "Car Accident",
    details: "A client was injured in a car accident caused by a reckless driver.",
    result: "2 million",
    reason: "Negligence of the other driver",
  },
  {
    title: "Medical Malpractice",
    details: "A patient suffered complications due to a surgical error during a routine procedure.",
    result: "5 million",
    reason: "Medical negligence",
  },
  {
    title: "Product Liability",
    details: "A consumer was injured by a defective product that malfunctioned during use.",
    result: "3 million",
    reason: "Manufacturer's failure to ensure product safety",
  },
  {
    title: "Slip and Fall",
    details: "A person slipped and fell in a grocery store due to a wet floor with no warning signs.",
    result: "1.5 million",
    reason: "Store's negligence in maintaining a safe environment",
  },
  {
    title: "Workplace Injury",
    details: "An employee sustained serious injuries at work due to inadequate safety measures.",
    result: "4 million",
    reason: "Employer's failure to provide a safe working environment",
  },
  {
    title: "Defamation",
    details: "A person's reputation was damaged by false statements made by a competitor.",
    result: "8 million",
    reason: "Malicious false statements causing harm to the individual's reputation",
  },
  {
    title: "Wrongful Death",
    details: "A family lost a loved one due to a faulty medical diagnosis and treatment.",
    result: "6 million",
    reason: "Medical malpractice resulting in a tragic loss",
  },
  {
    title: "Employment Discrimination",
    details: "An employee faced discrimination at work based on their gender and ethnicity.",
    result: "1 million",
    reason: "Violation of anti-discrimination laws",
  },
  {
    title: "Environmental Pollution",
    details: "A community suffered health issues due to a chemical company's pollution of their water supply.",
    result: "20 million",
    reason: "Environmental damage and health consequences",
  },
  {
    title: "Construction Site Accident",
    details: "A construction worker was injured in a scaffolding collapse.",
    result: "4.5 million",
    reason: "Failure to maintain safe working conditions",
  },
  {
    title: "Dog Bite",
    details: "A person was bitten by a neighbor's aggressive dog.",
    result: "800,000",
    reason: "Dog owner's negligence in controlling their pet",
  },
  {
    title: "Aviation Accident",
    details: "A passenger suffered injuries during a commercial airline turbulence incident.",
    result: "7 million",
    reason: "Negligence in flight operations",
  },
  {
    title: "Nursing Home Neglect",
    details: "An elderly resident of a nursing home suffered injuries due to neglect and lack of proper care.",
    result: "3.5 million",
    reason: "Nursing home's failure to provide adequate care",
  },
  {
    title: "Asbestos Exposure",
    details: "A worker developed mesothelioma due to prolonged exposure to asbestos at the workplace.",
    result: "12 million",
    reason: "Employer's knowledge of asbestos exposure risks",
  },
  {
    title: "Police Brutality",
    details: "A citizen suffered physical harm and civil rights violations in an incident of police brutality.",
    result: "2.5 million",
    reason: "Excessive use of force by law enforcement",
  },
  {
    title: "Defective Medication",
    details: "A patient experienced severe side effects from a prescription medication with undisclosed risks.",
    result: "9 million",
    reason: "Pharmaceutical company's failure to warn of risks",
  },
  {
    title: "Boating Accident",
    details: "A boating accident resulted in injuries to passengers due to the boat operator's recklessness.",
    result: "1.2 million",
    reason: "Boat operator's negligence in following safety guidelines",
  },
  {
    title: "Toxic Chemical Exposure",
    details: "Factory workers were exposed to toxic chemicals, leading to health issues.",
    result: "5.5 million",
    reason: "Factory's failure to implement safety measures",
  },
  {
    title: "Train Derailment",
    details: "Passengers on a train suffered injuries in a derailment caused by poor maintenance.",
    result: "6.8 million",
    reason: "Railroad company's negligence in maintaining tracks",
  },
  {
    title: "Defective Tires",
    details: "A vehicle accident was caused by defective tires that led to a loss of control.",
    result: "1.7 million",
    reason: "Tire manufacturer's failure to produce safe products",
  },
  {
    title: "Child Injury",
    details: "A child was injured on a defective playground equipment in a public park.",
    result: "1.3 million",
    reason: "Government agency's negligence in maintaining park equipment",
  },
  {
    title: "Gas Explosion",
    details: "A gas explosion in a residential building caused severe injuries to residents.",
    result: "14 million",
    reason: "Gas company's failure to detect and address gas leaks",
  },
  {
    title: "Product Recall",
    details: "Consumers were injured by a product that was later recalled due to safety hazards.",
    result: "2.3 million",
    reason: "Manufacturer's delay in issuing a recall",
  },
];

const whyUS = [
  {
    title: "No fee unless we win your case",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "Record-setting results",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "Record-setting results",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "We’re available 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "3 convenient locations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
  {
    title: "3 convenient locations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a pretium leo.",
  },
];


const hamburgerMenu = document.getElementById("hamburger-menu") as HTMLElement;
const bar1 = document.getElementById("bar1") as HTMLElement;
const bar2 = document.getElementById("bar2") as HTMLElement;
const bar3 = document.getElementById("bar3") as HTMLElement;
const mobileNav = document.getElementById("mobile-nav") as HTMLElement;
const body = document.body;
const sliderContainer = document.querySelector(".slider-inner") as HTMLElement;
const prevBtn = document.getElementById("prevBtn") as HTMLElement;
const nextBtn = document.getElementById("nextBtn") as HTMLElement;
const loadMoreBtn = document.querySelector(".load-more-btn") as HTMLElement;
const loadMorebtnContainer = document.querySelector(
  "section.services div div.load-more"
) as HTMLElement;
const hiddenItems = document.querySelectorAll(
  "section.services div div:nth-child(n + 4):nth-child(-n + 9)"
) as NodeListOf<HTMLElement>;

let currentSlideIndex = 0;

hamburgerMenu.addEventListener("click", () => {
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
  mobileNav.classList.toggle("show-mobile-nav");
  body.classList.toggle("body-blur");
});

// Here we create a Function and append "Card" items
function createAndAppendCards() {
  cases.forEach((caseData) => {
    const card = createCaseCard(caseData);
    sliderContainer.appendChild(card);
  });
}

function createCaseCard(caseData: {
  title: string;
  details: string;
  result: string;
  reason: string;
}) {
  const card = document.createElement("div");
  card.classList.add("case-card");

  const cardContent = `
    <h2>${caseData.title}</h2>
    <p>${caseData.details}</p>
    <div>
      Result: <span>$${caseData.result}</span>
    </div>
    <p>Reason: ${caseData.reason}</p>
  `;

  card.innerHTML = cardContent;
  return card;
}

function updateSliderPosition() {
  const cardWidth = sliderContainer.offsetWidth;
  const translateX = -currentSlideIndex * cardWidth;
  sliderContainer.style.transform = `translateX(${translateX}px)`;
}

createAndAppendCards();

nextBtn.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= cases.length) {
    currentSlideIndex = 0;
  }
  updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = cases.length - 1;
  }
  updateSliderPosition();
});

loadMoreBtn.addEventListener("click", () => {
  hiddenItems.forEach((item) => {
    item.style.display = "flex";
  });
  loadMoreBtn.style.display = "none";
  loadMorebtnContainer.style.border = "none";
});

// Here we create a Function and append "Why Choose Us" items
function createAndAppendWhyUsItems() {
  const reasonsContainer = document.querySelector(".reasons-container");
  if (reasonsContainer) {
    whyUS.forEach((item) => {
      const whyUsItem = createWhyUsItem(item);
      reasonsContainer.appendChild(whyUsItem);
    });
  }
}

// Function to create a single "Why Choose Us" item
function createWhyUsItem(item: { title: string; description: string }) {
  const whyUsItem = document.createElement("div");
  whyUsItem.classList.add("why-us-item");

  const itemContent = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
  `;

  whyUsItem.innerHTML = itemContent;
  return whyUsItem;
}

createAndAppendWhyUsItems();



  
 */