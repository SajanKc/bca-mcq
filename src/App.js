import React, { Component } from 'react';
import './css/style.css';
import questionData from './QuestionService/QuestionData'
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';
import { Warning } from './components/Warning';

export default class App extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0,
        submit: false
    };

    toggler = () => {
        this.setState({
            submit: true
        });
    };

    getQuestions = () => {
        questionData().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1,
                responses: this.state.responses + 1
            });
        } else {
            this.setState({
                responses: this.state.responses < 10 ? this.state.responses + 1 : 5
            })
        }
    };

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    <h1>BCA MCQ TEST</h1>
                    <p>Design and Develop by <a href="https://kcsajan.com.np" title="Click for more info">Sajan Kc</a></p>
                </div>
                <Warning />
                {
                    this.state.questionBank.length > 0 &&
                    this.state.responses < 10 &&
                    this.state.questionBank.map(
                        ({ questionId, question, answers, correct }, index) =>
                            <QuestionCard
                                counter={index}
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                    )
                }
                <button className="answerBtn" onClick={this.toggler} >Submit</button>
                {this.state.responses === 10 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        );
    }
}