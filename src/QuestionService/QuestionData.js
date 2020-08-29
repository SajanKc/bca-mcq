const qBank = [
  {
    questionId: "1",
    question: "Program which is used to control system performance is classified as...",
    answers: ["Experimental Program", "System Program", "Specialized Program", "Organized Program"],
    correct: "System Program"
  },
  {
    questionId: "2",
    question: "Shell is the exclusive feature of...",
    answers: ["UNIX", "DOS", "System Software", "Application Software"],
    correct: "UNIX"
  },
  {
    questionId: "3",
    question: "A program is a...",
    answers: ["device where information is stored", "sequence of instructions", "device that perform a sequence of operation specified by instruction in memory", "none of these"],
    correct: "sequence of instructions"
  },
  {
    questionId: "4",
    question: "The software used to drive microprocessor based system is called...",
    answers: ["firmware", "assembly language of program", "flowchart instruction", "BASIC interpreter instruction"],
    correct: "assembly language of program"
  },
  {
    questionId: "5",
    question: "How many types of  main software are there ?",
    answers: ["1", "2", "3", "4"],
    correct: "2"
  },
  {
    questionId: "6",
    question: "What is the full form of SDLC ?",
    answers: ["Software development live cycle", "Software development leaf cycle", "Software development life cycle", "Software development life changing"],
    correct: "Software development life cycle"
  },
  {
    questionId: "7",
    question: "Which one of the following is not a part of SDLC ?",
    answers: ["Designing", "Testing", "Hosting", "Coding"],
    correct: "Hosting"
  },
  {
    questionId: "8",
    question: "Which of the following is a SDLC model ?",
    answers: ["Decremental Model", "Big Bang Model", "Elite Model", "X-Model"],
    correct: "Big Bang Model"
  },
  {
    questionId: "9",
    question: "Which of the following is not a type of Feasibility Study ?",
    answers: ["Economical Feasibility", "Operational Feasibility", "Technical Feasibility", "Client Feasibility"],
    correct: "Client Feasibility"
  },
  {
    questionId: "10",
    question: "What are the attributes of software products ?",
    answers: ["Realibility", "Robustness", "None", "Realibility and Robustness"],
    correct: "None"
  },
  {
    questionId: "11",
    question: "RAD model has",
    answers: ["3 Phases", "5 Phases", "2 Phases", "6 Phases"],
    correct: "5 Phases"
  },
  {
    questionId: "12",
    question: "During software development, which factor is most crucial ?",
    answers: ["Product", "Process", "People", "Project"],
    correct: "People"
  },
  {
    questionId: "13",
    question: "First level of prototype is evaluated by...",
    answers: ["Tester", "Developer", "User", "System Analyst"],
    correct: "Developer"
  },
  {
    questionId: "14",
    question: "Which of the following is an example of system software ?",
    answers: ["MacOS", "Chrome", "VLC", "Ms Office"],
    correct: "MacOS"
  }
  ,
  {
    questionId: "15",
    question: "Spiral Model was developed by...",
    answers: ["Berry Boehm", "Bev Little wood", "Roger Pressman", "Victor Basili"],
    correct: "Berry Boehm"
  }
];

export default (n = 10) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
