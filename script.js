function goToRandomCat() {
  const catPages = [
    "cats/cat1.html",
    "cats/cat2.html",
    "cats/cat3.html",
    "cats/cat4.html",
    "cats/cat5.html"
  ];

  const randomIndex = Math.floor(Math.random() * catPages.length);
  const randomPage = catPages[randomIndex];

  window.location.href = randomPage;
}

const personalityTypes = [
    {
        title: "Milo",
        desc: "Milo is a smart cat who loves puzzle toys and learning tricks.",
        img: "images/cat6.jpg"
    },
    {
        title: "Luna",
        desc: "Luna loves chasing laser pointers and climbing cat trees.",
        img: "images/cat1.jpg"
    },
    {
		title: "Max",
		desc: "Max enjoys lounging in sunbeams and getting gentle head scratches.",
		img: "images/cat2.jpg"
	},
	{
		title: "Cleo",
		desc: "Cleo is elegant and prefers quiet spaces and soft blankets.",
		img: "images/cat7.jpg"
	}
];
const quizData = [
    {
        question: "At a party, you tend to...",
        options: ["Stick close to friends, observing conversations",
			"Play games, joke around, and meet new people ",
			"Stay relaxed, listening more than speaking",
			"Dress well, engage in deep 1-on-1 talks"],
        personalityScores: [1, 2, 3, 4] //scores for each option
    },
	{
		question: "When faced with a challenge, you...",
		options: ["Research thoroughly before deciding how to proceed",
			"Try to come up with a creative solution",
			"Stay patient and avoid rushing anything",
			"Prefer structured, step-by-step plans"],
		personalityScores: [1, 2, 3, 4]		
	},
	{
		question: "If a coworker upsets you, you..",
		options: ["Try to talk it out and figure out the best way to move forward",
			"Lighten the mood with humor ",
			"Stay quiet to avoid escalation",
			"Withdraw briefly to reflect"],
		personalityScores: [1, 2, 3, 4]		 
	},
	{
		question: "Your flight has been delayed 5 hours, your group is starting to get restless. What do you do?",
		options: ["Listen what what your friends are saying and carefully work out a what to do for the next 5 hours",
			"Lighten the mood with humour",
			"Try to calm everyone down",
			"Withdraw briefly to reflect"],
		personalityScores: [1, 2, 3, 4]		
	},
	{
		question: "At work you..",
		options: ["Are one always sorting out the till",
			"Are normally the center of attention",
			"Are patient with difficult customers",
			"Keep to yourself"],
		personalityScores: [1, 2, 3, 4]		
	},
	{
		question: "When studying, you are..",
		options: ["Organised and never leave work too late",
			"Prone to distraction",
			"Always on top of your work to avoid rushing",
			"Likely to work better in isolation"],
		personalityScores: [1, 2, 3, 4]		
	},
];

// Initialize quiz
function initQuiz() {
    const form = document.getElementById('quiz-form');
    
    quizData.forEach((q, i) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h3>${i+1}. ${q.question}</h3>`;
        
        q.options.forEach((opt, j) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${i}" value="${j}" required>
                    ${opt}
                </label><br>
            `;
        });
        
        form.appendChild(questionDiv);
    });
}

// Calculate results
document.getElementById('submit-btn').addEventListener('click', () => {
    const results = [0, 0, 0, 0]; // Assuming 4 personality types
    
    quizData.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            const scoreIndex = parseInt(selected.value);
            results[q.personalityScores[scoreIndex]-1]++;
        }
    });
    
    const resultIndex = results.indexOf(Math.max(...results));
    const personality = personalityTypes[resultIndex];
    
    document.getElementById('results').innerHTML = `
        <div class="result">
            <img src="${personality.img}" alt="${personality.title} icon" width="150">
            <h3>You Got: ${personality.title}</h3>
            <p>${personality.desc}</p>
        </div>
    `;
});

// Initialize on load
window.onload = initQuiz;
