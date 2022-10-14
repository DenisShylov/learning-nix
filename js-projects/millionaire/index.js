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
const containerElem = document.querySelector('.container');
// const callElem = document.querySelector('.call');
const questionsElem = document.querySelector('.questions');
const btnElem = document.createElement('button');
btnElem.textContent = 'Играть заново';

const result = [];
const data = [
  {
    text: 'Что из этого не является косметическим средством?',
    answers: {
      wrong1: 'Помада',
      correct: 'Татуировка',
      wrong2: 'Крем',
      wrong3: 'Пудра',
    },
  },
  {
    text: 'Кто, в конце концов, скушал Колобка?',
    answers: {
      wrong1: 'Дед',
      wrong2: 'Баба',
      wrong3: 'Заяц',
      correct: 'Лиса',
    },
  },
  {
    text: 'Какой шахматной фигуры не существует?',
    answers: {
      wrong1: 'Пешка',

      correct: 'Конь',
      wrong2: 'Король',
      wrong3: 'Дама',
    },
  },
  {
    text: 'Что означает буква «О» в аббревиатуре ОРТ?',
    answers: {
      wrong1: 'Олигархическое',
      correct: 'Объективное',
      wrong2: 'Общественное',
      wrong3: 'Однообразное',
    },
  },
  {
    text: 'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
    answers: {
      wrong1: 'Расторгуев',
      correct: 'Чикатило',
      wrong2: 'Тумбочкин',
      wrong3: 'Раскольников',
    },
  },
  {
    text: 'В состав любого органического вещества входит…',
    answers: {
      wrong1: 'кислород',
      correct: 'углерод',
      wrong2: 'водород',
      wrong3: 'азот',
    },
  },
  {
    text: 'Какое слово здесь лишнее?',
    answers: {
      wrong1: 'Автор',
      correct: 'Товар ',
      wrong2: 'Отвар',
      wrong3: 'Ворот',
    },
  },
  {
    text: 'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?',
    answers: {
      wrong1: 'Синодский регистратор',
      correct: 'Провинциальный секретарь',
      wrong2: 'Коллежский регистратор',
      wrong3: 'Кабинетский регистратор',
    },
  },
  {
    text: 'Кто изобрел громоотвод?',
    answers: {
      wrong1: 'Франклин',
      correct: 'Рузвельт',
      wrong2: 'Вашингтон',
      wrong3: 'Линкольн',
    },
  },
  {
    text: 'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?',
    answers: {
      wrong1: 'Дворовые',
      correct: 'Захребетники',
      wrong2: 'Нахлебники',
      wrong3: 'Бестягольные',
    },
  },
  {
    text: 'В каком городе находится штаб-квартира Microsoft?',
    answers: {
      wrong1: 'Нью-Йорк',
      correct: 'Ричмонд',
      wrong2: 'Новый Орлеан',
      wrong3: 'Сиэтл',
    },
  },
  {
    text: 'При каком правителе к России была присоединена территория Финляндии?',
    answers: {
      wrong1: 'Петр I',
      correct: 'Екатерина II',
      wrong2: 'Павел I',
      wrong3: 'Александр I',
    },
  },
  {
    text: 'Ричард Львиное Сердце был пленен во время',
    answers: {
      wrong1: 'крестового похода',
      correct: 'столетней войны',
      wrong2: 'войны алой и белой розы',
      wrong3: 'войны за независимость',
    },
  },
  {
    text: 'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?',
    answers: {
      wrong1: '10',
      correct: '20',
      wrong2: '70',
      wrong3: '90',
    },
  },
  {
    text: 'Кто такой «молотоглав»?',
    answers: {
      wrong1: 'Птица',
      correct: 'Рыба',
      wrong2: 'Змея',
      wrong3: 'Насекомое',
    },
  },
];

// const key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

// рендерим вопрос
const getQuestion = (e) => {
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
  // первый блок ответов
  if (result.length === 0) {
    oneOptionsElem.textContent = data[0].answers.correct;
    twoOptionsElem.textContent = data[0].answers.wrong1;
    threeOptionsElem.textContent = data[0].answers.wrong2;
    fourOptionsElem.textContent = data[0].answers.wrong3;
  }
  if (result.length === 1) {
    twoOptionsElem.textContent = data[1].answers.correct;
    oneOptionsElem.textContent = data[1].answers.wrong1;
    threeOptionsElem.textContent = data[1].answers.wrong2;
    fourOptionsElem.textContent = data[1].answers.wrong3;
  }
  if (result.length === 2) {
    twoOptionsElem.textContent = data[2].answers.wrong1;
    oneOptionsElem.textContent = data[2].answers.correct;
    threeOptionsElem.textContent = data[2].answers.wrong2;
    fourOptionsElem.textContent = data[2].answers.wrong3;
  }

  if (result.length === 3) {
    twoOptionsElem.textContent = data[3].answers.wrong1;
    oneOptionsElem.textContent = data[3].answers.correct;
    threeOptionsElem.textContent = data[3].answers.wrong2;
    fourOptionsElem.textContent = data[3].answers.wrong3;
  }
  if (result.length === 4) {
    twoOptionsElem.textContent = data[4].answers.wrong1;
    oneOptionsElem.textContent = data[4].answers.correct;
    threeOptionsElem.textContent = data[4].answers.wrong2;
    fourOptionsElem.textContent = data[4].answers.wrong3;
  }
  if (result.length === 5) {
    twoOptionsElem.textContent = data[5].answers.wrong1;
    oneOptionsElem.textContent = data[5].answers.correct;
    threeOptionsElem.textContent = data[5].answers.wrong2;
    fourOptionsElem.textContent = data[5].answers.wrong3;
  }
  if (result.length === 6) {
    twoOptionsElem.textContent = data[6].answers.wrong1;
    oneOptionsElem.textContent = data[6].answers.correct;
    threeOptionsElem.textContent = data[6].answers.wrong2;
    fourOptionsElem.textContent = data[6].answers.wrong3;
  }
  if (result.length === 7) {
    twoOptionsElem.textContent = data[7].answers.wrong1;
    oneOptionsElem.textContent = data[7].answers.correct;
    threeOptionsElem.textContent = data[7].answers.wrong2;
    fourOptionsElem.textContent = data[7].answers.wrong3;
  }
  if (result.length === 8) {
    twoOptionsElem.textContent = data[8].answers.wrong1;
    oneOptionsElem.textContent = data[8].answers.correct;
    threeOptionsElem.textContent = data[8].answers.wrong2;
    fourOptionsElem.textContent = data[8].answers.wrong3;
  }
  if (result.length === 9) {
    twoOptionsElem.textContent = data[9].answers.wrong1;
    oneOptionsElem.textContent = data[9].answers.correct;
    threeOptionsElem.textContent = data[9].answers.wrong2;
    fourOptionsElem.textContent = data[9].answers.wrong3;
  }
  if (result.length === 10) {
    twoOptionsElem.textContent = data[10].answers.wrong1;
    oneOptionsElem.textContent = data[10].answers.correct;
    threeOptionsElem.textContent = data[10].answers.wrong2;
    fourOptionsElem.textContent = data[10].answers.wrong3;
  }
  if (result.length === 11) {
    twoOptionsElem.textContent = data[11].answers.wrong1;
    oneOptionsElem.textContent = data[11].answers.correct;
    threeOptionsElem.textContent = data[11].answers.wrong2;
    fourOptionsElem.textContent = data[11].answers.wrong3;
  }
  if (result.length === 12) {
    twoOptionsElem.textContent = data[12].answers.wrong1;
    oneOptionsElem.textContent = data[12].answers.correct;
    threeOptionsElem.textContent = data[12].answers.wrong2;
    fourOptionsElem.textContent = data[12].answers.wrong3;
  }
  if (result.length === 13) {
    twoOptionsElem.textContent = data[13].answers.wrong1;
    oneOptionsElem.textContent = data[13].answers.correct;
    threeOptionsElem.textContent = data[13].answers.wrong2;
    fourOptionsElem.textContent = data[13].answers.wrong3;
  }
  if (result.length === 14) {
    twoOptionsElem.textContent = data[14].answers.wrong1;
    oneOptionsElem.textContent = data[14].answers.correct;
    threeOptionsElem.textContent = data[14].answers.wrong2;
    fourOptionsElem.textContent = data[14].answers.wrong3;
  }
  if (result.length === 15) {
    answerOptionsElem.style.display = 'none';

    questionsElem.append(btnElem);
  }
};

const newGame = () => {
  result.splice(0, result.length);
  answerOptionsElem.style.display = 'block';
  btnElem.style.display = 'none';
  getQuestion();
  getAnswer();
};

const correctAnsw = (e) => {
  if (e.target.textContent === data[0].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[1].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[2].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[3].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[4].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[5].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[6].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[7].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[8].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[9].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[10].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[11].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[12].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[13].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  } else if (e.target.textContent === data[14].answers.correct) {
    result.push(1);
    console.log(result);
    // alert('Correct');
    getQuestion();
    getAnswer();
  }
};

const helpFifty = (e) => {
  const isFifty = e.target.classList.contains('fifty');
  const isCall = e.target.classList.contains('call');
  if (isFifty || isCall) {
    e.target.style.background = '#797e7f';
    e.target.disabled = 'true';
  }
  if (isFifty) {
  }
  if (isCall) {
    oneOptionsElem.style.color = 'green';
  }
};

const helpCall = () => {};

// обработчики событий
answerOptionsElem.addEventListener('click', correctAnsw, true);
helpElem.addEventListener('click', helpFifty);
// callElem.addEventListener('.call', helpCall);
getQuestion();
getAnswer();
btnElem.addEventListener('click', newGame);
