const data= [{
   question: "1. Met welke opleiding leer je websites bouwen?",
   a:"Allround Medewerker IT S/D",
   b:"Exper IT S/D",
   c:"Medewerker IT",
   d:"Software Developer",
   correct:"d",
   },
   {
   question: "2.  Hoelang duurt een MBO 4 Opleiding gemiddeld? ",
   a:"1 jaar",
   b:"2 jaar",
   c:"3/4 jaar",
   d:"5 jaar",
   correct:"c",
   },
   {
   question: "3. Welke Progameer Taal/Talen leer je eerst bij de Software Developer opleiding?",
   a:"HTML CSS",
   b:"Javascript",
   c:"Python",
   d:"PHP",
   correct:"a",
   },
   {
   question: "4. Welk MBO Niveau Duurt het langst?",
   a:"Niveau 1",
   b:"Niveau 2",
   c:"Niveau 3",
   d:"Niveau 4",
   correct:"d",
   },
   {
   question: "5. Door welke opleiding is deze quiz gemaakt?",
   a:"Software Developer",
   b:"IT Medewerker",
   c:"Allround medewerker productietechniek",
   d:"Allround Laborant",
   correct:"a",
   },
   {
      question: "6. Wie is de GOAT?",
      a:"R9",
      b:"Cruyff",
      c:"Messi",
      d:"CR7",
      correct:"c",
      },
      {
         question: "7. Wie staat eerste in de eredivisie?",
         a:"Feyenoord",
         b:"PSV",
         c:"Ajax",
         d:"FC Volendam",
         correct:"b",
         },
         {
            question: "8.Welk Seizoen is het nu?",
            a:"Winter",
            b:"Herfst",
            c:"Lente",
            d:"Zomer",
            correct:"a",
            },
            {
               question: "9. Wie heeft deze quiz gemaakt?",
               a:"Jayden",
               b:"Husseen",
               c:"Shaakir",
               d:"Niemand",
               correct:"b",
               },
               {
                  question: "10. Beste voetbal club?",
                  a:"FC Barcelona",
                  b:"Real Madrid",
                  c:"Manchester City",
                  d:"Bayern Munchen",
                  correct:"a",
                  },
                  {
                     question: "11. Wat is gezond om te drinken?",
                     a:"Wijn",
                     b:"Cola",
                     c:"Bier",
                     d:"Water",
                     correct:"d",
                     },
                     {
                        question: "12.Wie heeft als laatst het WK gewonnen?",
                        a:"Argentinië",
                        b:"Frankrijk",
                        c:"Nederland",
                        d:"Brazilië",
                        correct:"a",
                        },
                        {
                           question: "13.Wat is fruit?",
                           a:"Komkommer",
                           b:"Aubergine",
                           c:"Banaan",
                           d:"Lente Ui",
                           correct:"c",
                           },
                           {
                              question: "14. Land met de meeste WK's?",
                              a:"Brazilië",
                              b:"Frankrijk",
                              c:"Nederland",
                              d:"Somalië",
                              correct:"a",
                              },
                              {
                                 question: "15.Welk land ligt in Afrika?.",
                                 a:"Rusland",
                                 b:"Uganda",
                                 c:"Frankrijk",
                                 d:"Colombia",
                                 correct:"b",
                                 },
   ]
   // DOM-elementen ophalen
   const quiz = document.getElementById("quiz")
   const answerEls = document.querySelectorAll(".answer")
   const questionEl = document.getElementById("question")
   const a_text = document.getElementById('a_text')
   const b_text = document.getElementById('b_text')
   const c_text = document.getElementById('c_text')
   const d_text = document.getElementById('d_text')
   const sumbitBtn = document.getElementById("sumbit")
   const resultsContainer = document.getElementById("resultsContainer"); 
   
   // Huidige vraag en score bijhouden
   let currentQuiz = 0;
   let score = 0;
   
   loadQuiz()
   // Functie om de quiz te laden
   function loadQuiz(){
    deselectAnswers()

    // Huidige vraaggegevens ophalen
    const currentQuizData = data[currentQuiz]

       // Vraag en antwoorden in de HTML plaatsen
   questionEl.innerText= currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
   }

   // Functie om antwoorden te deselecteren
   function deselectAnswers(){
   answerEls.forEach((answerEL)=>(
   answerEL.checked = false
   
   ))
   }
 // Functie om geselecteerd antwoord op te halen
   function getSelected(){
   let answer
   
   answerEls.forEach((answerEL) =>{
   if (answerEL.checked){
       answer = answerEL.id
   }
   
   })
   return answer
   }
   // Eventlistener toevoegen voor klikken op de 'Submit' knop
   sumbitBtn.addEventListener("click",() =>{
   const  answer = getSelected()
   if (answer){
        // Score bijwerken als het antwoord correct is
    if(answer === data[currentQuiz].correct)   {
       score++
    }
    currentQuiz++
     // Nieuwe vraag laden of resultaten tonen als er geen vragen meer zijn
    if(currentQuiz < data.length){
       loadQuiz()
    }
    
    else {
                   showResults();}
    function showResults() {
           resultsContainer.innerHTML = `<h2>Je hebt : ${score}/${data.length} vragen goed! </h2>;
           <button onclick="location.reload()">Doe het nog een keer</button>                             `
         sumbitBtn.style.display = "none";// 'Submit' knop verbergen
           
         
       }
       

}
})
