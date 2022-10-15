import data from './storage.js';

const questionElem = document.querySelector('.question');
const oneOptionsElem = document.querySelector('.one');
const twoOptionsElem = document.querySelector('.two');
const threeOptionsElem = document.querySelector('.three');
const fourOptionsElem = document.querySelector('.four');
const answerOptionsElem = document.querySelector('.answer-options');
const questionsNumbersElem = document.querySelectorAll(
  '.questions-numbers span'
);
const helpElem = document.querySelector('.help');
const callElem = document.querySelector('.call');
const questionsElem = document.querySelector('.questions');
const optionsCollection = document.querySelectorAll('.options');

// кнопка перезапуска игры
const reloadGameElem = document.createElement('button');
reloadGameElem.textContent = 'Играть заново';
reloadGameElem.classList.add('reload-btn');

// Вспомогательные переменные , для работы функций
const result = [];
let sum = 0;

// рендерим вопрос
const getQuestion = () => {
  // первый вопрос
  if (result.length === 0) {
    questionElem.textContent = data[0].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '1') {
        el.style.color = 'orange';
      }
    });
    // второй вопрос
  } else if (result.length === 1) {
    questionElem.textContent = data[1].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '1') {
        el.style.color = '';
      }
      if (el.dataset.num === '2') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 2) {
    questionElem.textContent = data[2].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '2') {
        el.style.color = '';
      }
      if (el.dataset.num === '3') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 3) {
    questionElem.textContent = data[3].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '3') {
        el.style.color = '';
      }
      if (el.dataset.num === '4') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 4) {
    questionElem.textContent = data[4].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '4') {
        el.style.color = '';
      }
      if (el.dataset.num === '5') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 5) {
    questionElem.textContent = data[5].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '5') {
        el.style.color = '';
        sum = 1000;
      }
      if (el.dataset.num === '6') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 6) {
    questionElem.textContent = data[6].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '6') {
        el.style.color = '';
      }
      if (el.dataset.num === '7') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 7) {
    questionElem.textContent = data[7].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '7') {
        el.style.color = '';
      }
      if (el.dataset.num === '8') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 8) {
    questionElem.textContent = data[8].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '8') {
        el.style.color = '';
      }
      if (el.dataset.num === '9') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 9) {
    questionElem.textContent = data[9].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '9') {
        el.style.color = '';
      }
      if (el.dataset.num === '10') {
        el.style.color = 'orange';
        sum = 32000;
      }
    });
  } else if (result.length === 10) {
    questionElem.textContent = data[10].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '10') {
        el.style.color = '';
      }
      if (el.dataset.num === '11') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 11) {
    questionElem.textContent = data[11].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '11') {
        el.style.color = '';
      }
      if (el.dataset.num === '12') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 12) {
    questionElem.textContent = data[12].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '12') {
        el.style.color = '';
      }
      if (el.dataset.num === '13') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 13) {
    questionElem.textContent = data[13].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '13') {
        el.style.color = '';
      }
      if (el.dataset.num === '14') {
        el.style.color = 'orange';
      }
    });
  } else if (result.length === 14) {
    questionElem.textContent = data[14].text;
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '14') {
        el.style.color = '';
      }
      if (el.dataset.num === '15') {
        el.style.color = 'red';
      }
    });
  } else if (result.length === 15) {
    questionElem.textContent = 'Вы выиграли 1 000 000 гривен!';
    [...questionsNumbersElem].map((el) => {
      if (el.dataset.num === '14') {
        el.style.color = '';
      }
    });
  }
};

// рендерим ответ
const getAnswer = () => {
  for (let i = 0; i < data.length; i++) {
    if (result.length === i) {
      oneOptionsElem.textContent = data[i].answers.correct;
      twoOptionsElem.textContent = data[i].answers.wrong1;
      threeOptionsElem.textContent = data[i].answers.wrong2;
      fourOptionsElem.textContent = data[i].answers.wrong3;
    }
    if (result.length === 15) {
      answerOptionsElem.style.display = 'none';

      questionsElem.append(reloadGameElem);
    }
  }
};

// Кнопка 'играть заново' перезагружает страницу. В данном случае это уместно(потому что размер страницы не большой)
// В случае 'тяжелой' страницы, я бы очищал массив result и перерендеревал ф-ции getQuestion && getAnswer
const newGame = () => {
  window.location.reload();
};

const correctAnsw = (e) => {
  for (let i = 0; i < data.length; i++) {
    if (e.target.textContent === data[i].answers.correct) {
      result.push(1);
      getQuestion();
      getAnswer();
      break;
    }

    if (
      e.target.textContent === data[i].answers.wrong1 ||
      e.target.textContent === data[i].answers.wrong2 ||
      e.target.textContent === data[i].answers.wrong3
    ) {
      if (sum === 1000 || sum === 32000) {
        questionElem.textContent = `Игра окончена! Ваш выигрыш: ${sum} грн`;
        answerOptionsElem.innerHTML = '';
        answerOptionsElem.append(reloadGameElem);
        reloadGameElem.style.display = 'block';
        result.splice(0, result.length);
      } else {
        questionElem.textContent = 'Вы проиграли';
        answerOptionsElem.innerHTML = '';
        answerOptionsElem.append(reloadGameElem);
        reloadGameElem.style.display = 'block';
        result.splice(0, result.length);
      }
    }
  }
};

const helpFifty = (e) => {
  const isFifty = e.target.classList.contains('fifty');
  const fiftyBtn = e.target;
  if (isFifty) {
    fiftyBtn.style.background = '#1f8e9a';
    fiftyBtn.disabled = true;

    // Перебираем коллекцию options
    [...optionsCollection].map((el) => {
      for (let i = 0; i < data.length; i++) {
        if (
          el.textContent === data[i].answers.correct ||
          el.textContent === data[i].answers.wrong1
        ) {
          el.style.background = '#0b980b73';
        }
        // Убираем стили для подсказки
        setTimeout(() => {
          el.style.background = '';
        }, 1000);
      }
    });
  }
};

const helpCall = (e) => {
  const isCall = e.target.classList.contains('call');
  const callBtn = e.target;
  if (isCall) {
    callBtn.style.background = '#1f8e9a';
    callBtn.disabled = true;

    // Перебираем коллекцию options
    [...optionsCollection].map((el) => {
      for (let i = 0; i < data.length; i++) {
        if (el.textContent === data[i].answers.correct) {
          el.style.background = '#0b980b73';
        }
        // Убираем стили для подсказки
        setTimeout(() => {
          el.style.background = '';
        }, 1000);
      }
    });
  }
};

// обработчики событий
getQuestion();
getAnswer();
answerOptionsElem.addEventListener('click', correctAnsw);
helpElem.addEventListener('click', helpFifty);
callElem.addEventListener('click', helpCall);
reloadGameElem.addEventListener('click', newGame);
