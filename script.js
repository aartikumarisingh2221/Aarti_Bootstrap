const planets = [
  {
    name: "Mercury",
    image: "/assets/mercury.png",
    fact: "Mercury is the closest planet to the Sun.",
    quiz: [
      { q: "Is Mercury the hottest planet?", a: "No", o: ["Yes", "No"] },
      { q: "Which planet is closest to the Sun?", a: "Mercury", o: ["Venus", "Mercury", "Earth"] }
    ]
  },
  {
    name: "Venus",
    image: "/assets/venus.png",
    fact: "Venus has a thick atmosphere that traps heat.",
    quiz: [
      { q: "Is Venus hotter than Mercury?", a: "Yes", o: ["Yes", "No"] },
      { q: "Which planet is known as Earth's twin?", a: "Venus", o: ["Mars", "Venus", "Jupiter"] }
    ]
  },
  {
    name: "Earth",
    image: "/assets/earth.png",
    fact: "Earth is the only planet known to support life.",
    bg: "#2b5876",
    quiz: [
      { q: "Which planet supports life?", a: "Earth", o: ["Mars", "Venus", "Earth"] },
      { q: "What is the name of Earth's moon?", a: "Luna", o: ["Luna", "Phobos", "Titan"] },
    ]
  },

  {
    name: "Mars",
    image: "/assets/mars.png",
    fact: "Mars may look warm but it's very cold.",
    bg: "#9b2b56ff",
    quiz: [
        { q: "How many moons does Mars have?", a: "2", o: ["1", "2", "4", "8"] },
        { q: "What is Mars’s nickname?", a: "The Red Planet", o: ["The Red Planet", "The Dusty Planet", "The Hot Planet", "The Smelly Planet"] },
    ]
  },
  
  {
    name: "Jupiter",
    image: "/assets/jupiter.png",
    fact:  "Jupiter is the 5th planet away from The Sun.",
    bg: "#909b2bff",
    quiz: [
      { q: "While the Earth's diameter is around 12,800 km, Jupiter's is around?", a: "142,800 KM", o: ["9,700 KM", "72,300 KM", "142,800 KM", "13,800 KM"] },
      { q: "How many planets have orbits closer to the Sun than Jupiter?", a: "seventy", o: ["Ten", "Seventy", "Forty", "Twenty"] },
    ]
  },

  {
    name: "Saturn",
    image: "/assets/saturn.png",
    fact: "Saturn has rings.",
    bg: "#0cc5e6ff",
    quiz: [
      { q: "The ancient Romans named Saturn after their god of time and", a: "agriculture", o: ["space", "agriculture", "natural disasters", "stone"]},
      { q: "Which language did the ancient Romans speak?", a: "Latin", o: ["Latin", "Italian", "Greek", "Old English"] },
    ]
  },

  {
    name: "Uranus",
    image: "/assets/uranus.png",
    fact: "It was the first planet to be discovered through a telescope.",
    bg: "#6c37c1ff",
    quiz: [
      { q: "It was discovered by the astronomer William Herschel in", a: "1781", o: ["1881", "1972", "1676", "1781"] },
      { q: "Herschel named it Georgium Sidus after his benefactor", a: "King George III of England", o: ["George Ludwig of Hanover", "King George III of England", "King George V of England", "King George I of England"] },
    ]
  },

  {
    name: "Neptune",
    image: "/assets/neptune.png",
    fact: "Neptune has at least 5 rings.",
    bg: "#f95a04ff",
    quiz: [
      { q: "Neptune is also the _______ of the solar system's planets.", a: "slowest", o: ["fastest", "coldest", "hottest", "slowest"]},
      { q: "It was eventually named after Neptunus, the Roman god of", a: "the sea", o: ["mountains", "fish and seafood", "the sea", "waterfalls"] },
    ]
  },
];

const container = document.getElementById("planet-container");
const planetInfo = document.getElementById("planet-info");
const quizSection = document.getElementById("quiz-section");
const planetTitle = document.getElementById("planet-title");
const planetImage = document.getElementById("planet-image");
const planetFact = document.getElementById("planet-fact");
const quizPlanetName = document.getElementById("quiz-planet-name");
const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");

let currentQuiz = [];
let currentQuestion = 0;

planets.forEach((planet, index) => {
  const div = document.createElement("div");
  div.textContent = planet.name;
  div.onclick = () => showPlanet(index);
  container.appendChild(div);
});

function showPlanet(index) {
  const planet = planets[index];

  planetInfo.classList.remove("hidden");
  quizSection.classList.remove("hidden");

  planetTitle.textContent = planet.name;
  planetImage.src = planet.image;
  planetImage.alt = `Image of ${planet.name}`;
  planetFact.textContent = planet.fact;

  currentQuiz = planet.quiz;
  currentQuestion = 0;
  quizPlanetName.textContent = planet.name;
  showQuestion();
}

function showQuestion() {
  const q = currentQuiz[currentQuestion];
  questionBox.textContent = q.q;
  optionsBox.innerHTML = "";

  q.o.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = currentQuiz[currentQuestion].a;
  if (selected === correct) {
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! Correct answer is: ${correct}`);
  }

  currentQuestion++;
  if (currentQuestion < currentQuiz.length) {
    showQuestion();
  } else {
    alert("🎉 Quiz finished!");
  }
}
