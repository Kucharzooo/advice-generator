const adviceId = document.querySelector('.advice-id');
const advice = document.querySelector('.card__advice');
const btn = document.querySelector('.card__btn');

const URL = 'https://api.adviceslip.com/advice';
console.log(advice);
const getAdvice = () => {
	axios
		.get(URL)
		.then((res) => {
			const id = res.data.slip.id;
			const adviceText = `"` + res.data.slip.advice + `"`;
			adviceId.textContent = id;
			advice.textContent = adviceText;
		})
		.catch((error) => console.log(error));
};

btn.addEventListener('click', getAdvice);
getAdvice();
