const correctAnswers = ['B', 'B', 'B', 'B'];
let insertedAnswers = [];

const form = document.querySelector('.quiz-form');
const modal = new bootstrap.Modal(document.querySelector('.modal'));
const modalBody = document.querySelector('.modal-body');
const modalFooter = document.querySelector('.modal-footer');

const checkAnswer = (correctAnswer, index) => {
	const currentAnswer = `inputQuestion${index + 1}`;
	const isCorrectAnswer = form[currentAnswer].value === correctAnswer;

	if (isCorrectAnswer) {
		insertedAnswers.push('C');
		return;
	}
	insertedAnswers.push('W');
};

const showScore = () => {
	const correctAnswerAmount = insertedAnswers.filter((answer) => answer === 'C').length;
	const correctAnswerRatio = correctAnswerAmount / correctAnswers.length;
	const correctAnswerRatioMessage = `Voce acertou ${correctAnswerRatio}`;
	const correctAnswerPercentageMessage = `${correctAnswerRatio * 100}%`;

	modalBody.innerHTML = correctAnswerRatioMessage;
	modalFooter.innerHTML = correctAnswerPercentageMessage;

	modal.toggle();
};

const checkPerformance = (event) => {
	event.preventDefault();

	insertedAnswers = [];

	correctAnswers.forEach((correctAnswer, index) => {
		checkAnswer(correctAnswer, index);
	});

	showScore();
};

form.addEventListener('submit', checkPerformance);
