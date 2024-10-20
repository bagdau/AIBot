// Объект с переводами для разных языков
const translations = {
    ru: {
        appTitle: "AIShym - Умный помощник",
        historyTitle: "История запросов",
        sendBtn: "Отправить",
        voiceBtn: "🎤 Голосовой ввод",
        categoriesTitle: "Категории",
        categoryTech: "Технологии",
        categoryScience: "Наука",
        categoryMusic: "Музыка",
        placeholder: "Введите запрос..."
    },
    kk: {
        appTitle: "AIShym - Ақылды көмекші",
        historyTitle: "Сұраулар тарихы",
        sendBtn: "Жіберу",
        voiceBtn: "🎤 Дауыс енгізу",
        categoriesTitle: "Санаттар",
        categoryTech: "Технологиялар",
        categoryScience: "Ғылым",
        categoryMusic: "Музыка",
        placeholder: "Сұрауыңызды енгізіңіз..."
    },
    en: {
        appTitle: "AIShym - Smart Assistant",
        historyTitle: "Query History",
        sendBtn: "Send",
        voiceBtn: "🎤 Voice Input",
        categoriesTitle: "Categories",
        categoryTech: "Technology",
        categoryScience: "Science",
        categoryMusic: "Music",
        placeholder: "Enter your query..."
    }
};

// Функция для изменения языка интерфейса
function changeLanguage() {
    const selectedLang = document.getElementById("language-selector").value;
    const langTranslations = translations[selectedLang];

    // Изменяем текст на странице согласно выбранному языку
    document.getElementById("app-title").textContent = langTranslations.appTitle;
    document.getElementById("history-title").textContent = langTranslations.historyTitle;
    document.getElementById("send-btn").textContent = langTranslations.sendBtn;
    document.getElementById("voice-btn").textContent = langTranslations.voiceBtn;
    document.getElementById("categories-title").textContent = langTranslations.categoriesTitle;
    document.getElementById("category-tech").textContent = langTranslations.categoryTech;
    document.getElementById("category-science").textContent = langTranslations.categoryScience;
    document.getElementById("category-music").textContent = langTranslations.categoryMusic;
    document.getElementById("user-input").placeholder = langTranslations.placeholder;
}

// Функция отправки запроса
function sendQuery() {
    const userInput = document.getElementById("user-input").value;
    // Логика обработки запроса и ответа
    // Сохраняем запрос в истории и обновляем интерфейс
}

// Функция для голосового ввода
function startVoiceInput() {
    // Логика использования Web Speech API для голосового ввода
}
