import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function shuffleArrayNoDuplicates(array) {
    const shuffledArray = [];
    const copyArray = [...array];
  
    while (copyArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      shuffledArray.push(copyArray.splice(randomIndex, 1)[0]);
    }
  
    return shuffledArray;
  }

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    answers: [
      {
        text: "Venus",
        correct: false,
      },
      {
        text: "Mars",
        correct: true,
      },
      {
        text: "Jupiter",
        correct: false,
      },
      {
        text: "Saturn",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is the chemical symbol for the element gold?",
    answers: [
      {
        text: "Go",
        correct: false,
      },
      {
        text: "Gl",
        correct: false,
      },
      {
        text: "Au",
        correct: true,
      },
      {
        text: "Ag",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Which famous scientist developed the theory of general relativity?",
    answers: [
      {
        text: "Isaac Newton",
        correct: false,
      },
      {
        text: "Galileo Galilei",
        correct: false,
      },
      {
        text: "Albert Einstein",
        correct: true,
      },
      {
        text: "Stephen Hawking",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "What is the SI unit of electric current?",
    answers: [
      {
        text: "Watt",
        correct: false,
      },
      {
        text: "Ampere",
        correct: true,
      },
      {
        text: "Volt",
        correct: false,
      },
      {
        text: "Ohm",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Which engineering discipline deals with the design and maintenance of aircraft?",
    answers: [
      {
        text: "Mechanical Engineering",
        correct: false,
      },
      {
        text: "Aerospace Engineering",
        correct: true,
      },
      {
        text: "Civil Engineering",
        correct: false,
      },
      {
        text: "Chemical Engineering",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Which type of bridge is known for its iconic arch shape?",
    answers: [
      {
        text: "Suspension Bridge",
        correct: false,
      },
      {
        text: "Cable-Stayed Bridge",
        correct: false,
      },
      {
        text: "Arch Bridge",
        correct: true,
      },
      {
        text: "Beam Bridge",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "What does the term 'HVAC' stand for in engineering?",
    answers: [
      {
        text: "High Voltage Alternating Current",
        correct: false,
      },
      {
        text: "Heating, Ventilation, and Air Conditioning",
        correct: true,
      },
      {
        text: "Hydro-Vacuum Air Circulation",
        correct: false,
      },
      {
        text: "Human Vibration and Acoustics Control",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What is the primary function of a turbocharger in an internal combustion engine?",
    answers: [
      {
        text: "Cooling the engine",
        correct: false,
      },
      {
        text: "Reducing exhaust emissions",
        correct: false,
      },
      {
        text: "Increasing fuel efficiency",
        correct: false,
      },
      {
        text: "Forcing more air into the combustion chamber",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "What material is commonly used as a semiconductor in electronic devices?",
    answers: [
      {
        text: "Copper",
        correct: false,
      },
      {
        text: "Silver",
        correct: false,
      },
      {
        text: "Silicon",
        correct: true,
      },
      {
        text: "Aluminum",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Which engineering field deals with the design of complex integrated circuits and microprocessors?",
    answers: [
      {
        text: "Mechanical Engineering",
        correct: false,
      },
      {
        text: "Civil Engineering",
        correct: false,
      },
      {
        text: "Electrical Engineering",
        correct: false,
      },
      {
        text: "Microelectronics Engineering",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question: "What does the term 'PID controller' stand for in control systems?",
    answers: [
      {
        text: "Proportional Incremental Derivative",
        correct: false,
      },
      {
        text: "Perceptual Integral Derivative",
        correct: false,
      },
      {
        text: "Proportional Integral Derivative",
        correct: true,
      },
      {
        text: "Predictive Inertial Differential",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "In civil engineering, what is the name for a type of foundation that distributes the load of a structure over a larger area?",
    answers: [
      {
        text: "Pile Foundation",
        correct: false,
      },
      {
        text: "Mat Foundation",
        correct: true,
      },
      {
        text: "Strip Foundation",
        correct: false,
      },
      {
        text: "Deep Foundation",
        correct: false,
      },
    ],
  },
  ];

  const shuffledData = [
    ...shuffleArrayNoDuplicates(data.slice(0, 5)),
    ...shuffleArrayNoDuplicates(data.slice(5, 10)),
    ...data.slice(10), // Questions 11 and beyond remain in their original order
  ];
  useEffect(() => {
    if (questionNumber > data.length) {
      setAllQuestionsAnswered(true);
    }
  }, [questionNumber, data.length]);


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
               <div className="endText">
                    <h1>{username}-You earned: {earned}</h1>
                    <button className="navigateButton" type="button" onClick={() => window.location.href = "/"}>
                        Next Game
                    </button>
                </div> 
            ) : allQuestionsAnswered ? (
                <div className="endText">
                    <h1>Congratulations, {username}! You've completed all questions.</h1>
                    <p>You earned: {earned}</p>
                    <button className="navigateButton" type="button" onClick={() => window.location.href = "/"}>
                    Start New Game
                    </button>
              </div>
            ):(
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                   data={shuffledData}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    // handleOptionClick={handleOptionClick}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
