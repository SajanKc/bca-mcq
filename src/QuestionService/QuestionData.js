const qBank = [
  {
    questionId: "1",
    question: "How many types of  main software are there ?",
    answers: ["1", "2", "3", "4"],
    correct: "2",
  },
  {
    questionId: "2",
    question: "What is the full from of SDLC ?",
    answers: ["Software development live cycle",
      "Software development leaf cycle",
      "Software development life cycle",
      "Software development life changing"],
    correct: "Software development life cycle",

  },
  {
    questionId: "3",
    question: "Which of the following is not a part of SDLC ?",
    answers: ["Designing", "Testing", "Hosting", "Coding"],
    correct: "Hosting"
  },
  {
    questionId: "4",
    question: " Which of the following is a SDLC model ?",
    answers: ["Decremental Model", "Bigbang Model", "X-Model", "Elite Model"],
    correct: "Bigbang Model"
  },
  {
    questionId: "5",
    question: "Which of the following is not a type of Feasibility Study ?",
    answers: ["Economic Feasibility", "Operational Feasibility", "Technical Feasibility", "Client Feasibility"],
    correct: "Client Feasibility"
  },
  // repeating question
  {
    questionId: "1",
    question: "How many types of  main software are there ?",
    answers: ["1", "2", "3", "4"],
    correct: "2",
  },
  {
    questionId: "2",
    question: "What is the full from of SDLC ?",
    answers: ["Software development live cycle",
      "Software development leaf cycle",
      "Software development life cycle",
      "Software development life changing"],
    correct: "Software development life cycle",

  },
  {
    questionId: "3",
    question: "Which of the following is not a part of SDLC ?",
    answers: ["Designing", "Testing", "Hosting", "Coding"],
    correct: "Hosting"
  },
  {
    questionId: "4",
    question: " Which of the following is a SDLC model ?",
    answers: ["Decremental Model", "Bigbang Model", "X-Model", "Elite Model"],
    correct: "Bigbang Model"
  },
  {
    questionId: "5",
    question: "Which of the following is not a type of Feasibility Study ?",
    answers: ["Economic Feasibility", "Operational Feasibility", "Technical Feasibility", "Client Feasibility"],
    correct: "Client Feasibility"
  }
  // {
  //   question: "",
  //   answers: [],
  //   correct: "",
  //   questionId: ""
  // }
];

export default (n = 10) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
