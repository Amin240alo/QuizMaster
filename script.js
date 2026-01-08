// ============== STATE ==================
const STATE = {
  START: "START",
  QUIZ: "QUIZ",
  RESULT: "RESULT"
};

const appState = {
  screen: STATE.START,
  selectedCategory: "ALL",
  selectedDifficulty: "any",
  questionCount: 5,
  modeSuddenDeath: false,
  currentIndex: 0,
  currentQuestions: [],
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  startTime: null,
  endTime: null,
  answersHistory: [],
  // Timer
  timerId: null,
  timeLeft: 30,
  timerPerQuestion: 30,
  // Persistent Stats
  bestScore: 0,
  streakDays: 0,
  lastPlayed: null
};


// ============== DOM REFERENCES ==================
const startView = document.getElementById("start-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const questionCountSelect = document.getElementById("question-count-select");
const suddenDeathCheckbox = document.getElementById("sudden-death-checkbox");
const startQuizBtn = document.getElementById("start-quiz-btn");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const timerDisplay = document.getElementById("timer-display");
const quizInfo = document.getElementById("quiz-info");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedbackBox = document.getElementById("feedback");
const explanationText = document.getElementById("explanation-text");
const nextQuestionBtn = document.getElementById("next-question-btn");

const scorePercent = document.getElementById("score-percent");
const correctCountEl = document.getElementById("correct-count");
const wrongCountEl = document.getElementById("wrong-count");
const totalTimeEl = document.getElementById("total-time");
const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");
const playAgainBtn = document.getElementById("play-again-btn");
const backToStartBtn = document.getElementById("back-to-start-btn");
const appEl = document.getElementById("app");
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navDrawer = document.getElementById("nav-drawer");
const overlay = document.getElementById("overlay");

const historyView = document.getElementById("history-view");
const settingsView = document.getElementById("settings-view");
const legalView = document.getElementById("legal-view");


// Stats + Daily Question DOM
const bestScoreEl = document.getElementById("best-score");
const streakDaysEl = document.getElementById("streak-days");
const dailyQuestionEl = document.getElementById("daily-question");

// Fehleranalyse DOM
const errorAnalysisEl = document.getElementById("error-analysis");
const errorListEl = document.getElementById("error-list");

// Settings DOM
const settingTimerSelect = document.getElementById("setting-timer");

function populateCategorySelect() {
  if (!categorySelect) return;

  const categories = Array.from(new Set(QUESTIONS.map(q => q.category)))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  // Reset auf nur "ALL"
  categorySelect.innerHTML = `<option value="ALL">Alle Fragen</option>`;

  for (const cat of categories) {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  }
}


// ============== HELPERS ==================
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function goToScreen(screenName) {
  appState.screen = screenName;

  startView.classList.remove("active");
  quizView.classList.remove("active");
  resultView.classList.remove("active");
  historyView?.classList.remove("active");
  settingsView?.classList.remove("active");
  legalView?.classList.remove("active");


  if (screenName === STATE.START) {
    startView.classList.add("active");
  } else if (screenName === STATE.QUIZ) {
    quizView.classList.add("active");
  } else if (screenName === STATE.RESULT) {
    resultView.classList.add("active");
  }

  document.getElementById("app").classList.toggle("is-start", screenName === STATE.START);
}

function buildQuestionList() {
  let list = QUESTIONS;

  if (appState.selectedCategory !== "ALL") {
    list = list.filter(q => q.category === appState.selectedCategory);
  }

  if (appState.selectedDifficulty !== "any") {
    list = list.filter(q => q.difficulty === appState.selectedDifficulty);
  }

  // HIER: dieser Block ist neu
  list = shuffleArray(list);

  const requested = appState.questionCount;
  const available = list.length;

  if (available < requested) {
    alert(`Es gibt nur ${available} Fragen für diese Auswahl. Es werden ${available} Fragen gespielt.`);

  }

  if (available === 0) {
  appState.currentQuestions = [];
  return;
}


  appState.currentQuestions = list.slice(0, Math.min(requested, available));
}

// -------- Timer --------
function stopTimer() {
  if (appState.timerId !== null) {
    clearInterval(appState.timerId);
    appState.timerId = null;
  }
}

function startTimer() {
  stopTimer();
  appState.timeLeft = appState.timerPerQuestion;
  timerDisplay.textContent = `${appState.timeLeft}s`;

  appState.timerId = setInterval(() => {
    appState.timeLeft -= 1;
    if (appState.timeLeft <= 0) {
      timerDisplay.textContent = "0s";
      stopTimer();
      handleAnswerTimeout();
    } else {
      timerDisplay.textContent = `${appState.timeLeft}s`;
    }
  }, 1000);
}

// -------- LocalStorage (Bestscore + Streak + Settings) --------
const STORAGE_KEY = "quizmaster_stats";

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      appState.bestScore = 0;
      appState.streakDays = 0;
      appState.lastPlayed = null;
      appState.timerPerQuestion = 30;
      if (settingTimerSelect) settingTimerSelect.value = "30";
      updateStatsDisplay();
      return;
    }
    const data = JSON.parse(raw);
    appState.bestScore = data.bestScore || 0;
    appState.streakDays = data.streakDays || 0;
    appState.lastPlayed = data.lastPlayed || null;
    appState.timerPerQuestion = data.timerPerQuestion || 30;
    updateStatsDisplay();

    if (settingTimerSelect) {
      settingTimerSelect.value = String(appState.timerPerQuestion);
    }
  } catch (e) {
    console.error("Konnte Stats/Settings nicht laden:", e);
  }
}

function saveStats() {
  const data = {
    bestScore: appState.bestScore,
    streakDays: appState.streakDays,
    lastPlayed: appState.lastPlayed,
    timerPerQuestion: appState.timerPerQuestion
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Konnte Stats/Settings nicht speichern:", e);
  }
}

function isSameDay(dateStr1, dateStr2) {
  if (!dateStr1 || !dateStr2) return false;
  return dateStr1.slice(0, 10) === dateStr2.slice(0, 10);
}

function updateStreakAfterGame() {
  const todayStr = new Date().toISOString();
  if (!appState.lastPlayed) {
    appState.streakDays = 1;
  } else if (isSameDay(appState.lastPlayed, todayStr)) {
    // gleicher Tag → Streak bleibt wie er ist
  } else {
    const last = new Date(appState.lastPlayed);
    const today = new Date(todayStr);
    const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      appState.streakDays += 1;
    } else {
      appState.streakDays = 1;
    }
  }
  appState.lastPlayed = todayStr;
}

function updateStatsDisplay() {
  if (bestScoreEl) bestScoreEl.textContent = appState.bestScore;
  if (streakDaysEl) streakDaysEl.textContent = appState.streakDays;
}

// -------- Daily Question --------
function setupDailyQuestion() {
  if (!dailyQuestionEl) return;
  const hardQuestions = QUESTIONS.filter(q => q.difficulty === "hard");
  if (hardQuestions.length === 0) {
    dailyQuestionEl.textContent = "Noch keine schweren Fragen vorhanden.";
    return;
  }
  const random = hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
  dailyQuestionEl.textContent = random.question;
}

// -------- Fehleranalyse --------
function renderErrorAnalysis() {
  if (!errorAnalysisEl || !errorListEl) return;

  const wrongAnswers = appState.answersHistory.filter(entry => !entry.isCorrect);
  if (wrongAnswers.length === 0) {
    errorAnalysisEl.classList.add("hidden");
    errorListEl.innerHTML = "";
    return;
  }

  errorAnalysisEl.classList.remove("hidden");
  errorListEl.innerHTML = "";

  wrongAnswers.forEach((entry, idx) => {
    const question = QUESTIONS.find(q => q.id === entry.questionId);
    if (!question) return;

    const container = document.createElement("div");
    container.className = "error-item";
    const yourAnswerText =
      entry.chosenIndex === null || entry.chosenIndex === undefined
        ? "Keine Antwort (Zeit abgelaufen)"
        : question.answers[entry.chosenIndex];

    container.innerHTML = `
      <div class="error-question">${idx + 1}. ${question.question}</div>
      <div class="error-correct"><strong>Richtige Antwort:</strong> ${question.answers[question.correctIndex]}</div>
      <div class="error-your"><strong>Deine Antwort:</strong> ${yourAnswerText}</div>
      <div class="error-expl">${question.explanation}</div>
    `;
    errorListEl.appendChild(container);
  });
}


// ============== QUIZ FLOW ==================
function startQuiz() {
  appState.selectedCategory = categorySelect.value;
  appState.selectedDifficulty = difficultySelect.value;
  appState.questionCount = Number(questionCountSelect.value);
  appState.modeSuddenDeath = suddenDeathCheckbox.checked;

  appState.currentIndex = 0;
  appState.score = 0;
  appState.correctCount = 0;
  appState.wrongCount = 0;
  appState.answersHistory = [];
  appState.startTime = Date.now();
  appState.endTime = null;

  buildQuestionList();

  if (appState.currentQuestions.length === 0) {
    alert("Für diese Kombination aus Kategorie/Schwierigkeit gibt es noch keine Fragen.");
    return;
  }

  goToScreen(STATE.QUIZ);
  showQuestion();
}

function showQuestion() {
  const current = appState.currentQuestions[appState.currentIndex];
  if (!current) {
    finishQuiz();
    return;
  }

  const total = appState.currentQuestions.length;
  progressText.textContent = `Frage ${appState.currentIndex + 1} / ${total}`;

  let percent = (appState.currentIndex / total) * 100;
  progressBar.style.width = `${percent}%`;
  if (appState.currentIndex === total - 1) {
    progressBar.style.width = "100%";
  }

  questionText.textContent = current.question;
  quizInfo.textContent = `${current.category} • ${current.difficulty}`;

  answersContainer.innerHTML = "";
  const prefixes = ["A", "B", "C", "D"];

  current.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = `<span class="option-prefix">${prefixes[index]}.</span><span>${answer}</span>`;
    btn.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(btn);
  });

  feedbackBox.classList.add("hidden");
  explanationText.textContent = "";

  startTimer();
}

function handleAnswer(chosenIndex) {
  stopTimer();

  const current = appState.currentQuestions[appState.currentIndex];
  if (!current) return;

  const isCorrect = chosenIndex === current.correctIndex;

  if (isCorrect) {
    appState.correctCount += 1;

    let basePoints = 10;
    if (current.difficulty === "medium") basePoints = 20;
    if (current.difficulty === "hard") basePoints = 30;

    appState.score += basePoints;
  } else {
    appState.wrongCount += 1;

    if (appState.modeSuddenDeath) {
      appState.answersHistory.push({
        questionId: current.id,
        chosenIndex,
        correctIndex: current.correctIndex,
        isCorrect
      });
      finishQuiz();
      return;
    }
  }

  appState.answersHistory.push({
    questionId: current.id,
    chosenIndex,
    correctIndex: current.correctIndex,
    isCorrect
  });

  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.correctIndex) {
      btn.classList.add("correct");
    } else if (index === chosenIndex) {
      btn.classList.add("wrong");
    }
  });

  explanationText.textContent = current.explanation;
  feedbackBox.classList.remove("hidden");
}

function handleAnswerTimeout() {
  const current = appState.currentQuestions[appState.currentIndex];
  if (!current) return;

  appState.wrongCount += 1;

  appState.answersHistory.push({
    questionId: current.id,
    chosenIndex: null,
    correctIndex: current.correctIndex,
    isCorrect: false
  });

  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.correctIndex) {
      btn.classList.add("correct");
    }
  });

  explanationText.textContent = "Zeit abgelaufen – diese Frage zählt als falsch.";
  feedbackBox.classList.remove("hidden");

  if (appState.modeSuddenDeath) {
    finishQuiz();
  }
}

function nextQuestion() {
  appState.currentIndex += 1;
  if (appState.currentIndex >= appState.currentQuestions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz() {
  stopTimer();

  appState.endTime = Date.now();
  const totalQuestions = appState.currentQuestions.length || 1;
  const percent = Math.round((appState.correctCount / totalQuestions) * 100);
  const totalMs = (appState.endTime - appState.startTime) || 0;
  const totalSeconds = Math.round(totalMs / 1000);

  scorePercent.textContent = `${percent}%`;
  correctCountEl.textContent = appState.correctCount;
  wrongCountEl.textContent = appState.wrongCount;
  totalTimeEl.textContent = `${totalSeconds}s`;
  finalScoreEl.textContent = appState.score;

  if (appState.score > appState.bestScore) {
    appState.bestScore = appState.score;
  }
  updateStreakAfterGame();
  updateStatsDisplay();
  saveStats();

  let msg = "";
  if (percent < 50) msg = "Anfänger – weiter üben, du bist auf dem richtigen Weg!";
  else if (percent < 80) msg = "Fortgeschritten – stark, da geht noch mehr!";
  else if (percent < 95) msg = "Profi – sehr gutes Ergebnis!";
  else msg = "Quiz-Legende – beeindruckend!";
  resultMessageEl.textContent = msg;

  renderErrorAnalysis();
  goToScreen(STATE.RESULT);
}


// ============== EVENT LISTENERS ==================
startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", nextQuestion);

playAgainBtn.addEventListener("click", () => {
  stopTimer();
  appState.currentIndex = 0;
  appState.score = 0;
  appState.correctCount = 0;
  appState.wrongCount = 0;
  appState.answersHistory = [];
  appState.startTime = Date.now();
  appState.endTime = null;
  buildQuestionList();
  goToScreen(STATE.QUIZ);
  showQuestion();
});

backToStartBtn.addEventListener("click", () => {
  stopTimer();
  goToScreen(STATE.START);
  updateStatsDisplay();
});

// Setting-Änderung live speichern
if (settingTimerSelect) {
  settingTimerSelect.addEventListener("change", () => {
    const val = Number(settingTimerSelect.value);
    if (!Number.isNaN(val) && val > 0) {
      appState.timerPerQuestion = val;
      saveStats();
    }
  });
}

// --- Keyboard Shortcuts ---
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (appState.screen === STATE.QUIZ) {
    if (["1", "2", "3", "4"].includes(key)) {
      const idx = Number(key) - 1;
      const buttons = answersContainer.querySelectorAll(".answer-btn");
      if (buttons[idx] && !buttons[idx].disabled) {
        buttons[idx].click();
      }
    }

    if ((key === "n" || key === "N" || key === "Enter") && !feedbackBox.classList.contains("hidden")) {
      nextQuestionBtn.click();
    }
  }

  if (appState.screen === STATE.RESULT && (key === "Enter" || key === " ")) {
    playAgainBtn.click();
  }
});

function openMenu(){
  navDrawer.classList.add("open");
  overlay.classList.remove("hidden");
  menuBtn.setAttribute("aria-expanded", "true");
  navDrawer.setAttribute("aria-hidden", "false");

  menuBtn.classList.add("hidden"); // <- neu
}

function closeMenu(){
  navDrawer.classList.remove("open");
  overlay.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  navDrawer.setAttribute("aria-hidden", "true");

  menuBtn.classList.remove("hidden"); // <- neu
}

menuBtn?.addEventListener("click", openMenu);
closeMenuBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

document.querySelectorAll(".nav-item[data-nav]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-nav");
    closeMenu();

    if (target === "quiz") goToScreen(STATE.START);
    else if (target === "history") goToScreen("HISTORY");
    else if (target === "settings") goToScreen("SETTINGS");
    else if (target === "legal") goToScreen("LEGAL");
    else if (target === "about") alert("QuizMaster – Version 1.0");
  });
});


// Initial
loadStats();
setupDailyQuestion();
populateCategorySelect();
goToScreen(STATE.START);
