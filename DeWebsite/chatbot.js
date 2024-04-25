const questions = [
    {
        name: "Chatbot",
        question: "Hoe heet je?",
        answer: "Ik ben een chatbot. Ik heb geen naam."
      },    
    {
        name: "Chatbot",
        question: "Wat kan je doen?",
        answer: "Ik kan basisvragen beantwoorden en informatie verstrekken."
    },
    {
        name: "Chatbot",
        question: "Vertel een mop",
        answer: "Waarom zijn spinnen goede programmeurs? Omdat ze uitstekend in het webdesign zijn!."
    },
    {
        name: "Chatbot",
        question: "Hoelang is een reis naar Marokko vanaf Rotterdam met een vliegtuig",
        answer: "Voor luchthavens in het noorden van Marokko, zoals Tanger Ibn Battouta Airport, kan de vliegtijd iets korter zijn, meestal rond de 3 uur en 30 minuten tot 4 uur."
    },
    {
        name: "Chatbot",
        question: "Kunt u mij de definitie vertellen van voetbal",
        answer: "Voetbal is een teamsport waarbij twee teams van elf spelers elk proberen een bal in het doel van de tegenstander te krijgen, zonder daarbij hun handen of armen te gebruiken, met als hoofddoel meer doelpunten te scoren dan de tegenstander binnen een vastgestelde speeltijd."
    },
    {
        name: "Chatbot",
        question: "Wat is de Hoofdstad van Italie",
        answer: "Hoofdstad van Italie is Rome"
    },
    {
        name: "Chatbot",
        question: "Wanneer komt Kung fu panda 4 uit",
        answer: "De film draait vanaf 20 maart 2024 in de Nederlandse bioscoop."
    },
    {
        name: "Chatbot",
        question: "Hoeveel inwoners zijn er in India",
        answer: "1,408 miljard (2021) inwoners"
    },
    {
        name: "Chatbot",
        question: "Hoeveel dagen geleden sinds 2006",
        answer: "Het verschil tussen maandag 29 januari 2024 en zondag 1 januari 2006 = -6602 dagen"
    },
    
    
    
];

const chatbox = document.getElementById('chatbox');
const textInput = document.getElementById('textInput');

function displayBotMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    p.style.marginBottom = '10px';
    chatbox.appendChild(p);
}

function clearInput() {
    textInput.value = '';
}

function handleFormSubmit(e) {
    e.preventDefault();
    const userQuestion = textInput.value.toLowerCase();
    let isQuestionFound = false;
  
    for (let i = 0; i < questions.length; i++) {
      if (userQuestion.includes(questions[i].question.toLowerCase())) {
        displayBotMessage(`${questions[i].name}: ${questions[i].answer}`);
        isQuestionFound = true;
        break;
      }
    }
  
    if (!isQuestionFound) {
      displayBotMessage(`${questions[0].name}: Het spijt me, ik heb geen antwoord op die vraag.`);
    }
  
    clearInput();
  };

textInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    handleFormSubmit(e);
  }
});

const form = document.getElementById('userInput');
form.addEventListener('submit',handleFormSubmit);  