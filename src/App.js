import React, { Component } from 'react';
import './css/style.css';
import questionData from './QuestionService/QuestionData'
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';

export default class App extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0
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
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title"><h1>BCA MCQ TEST</h1>
                    <p>Design and Develop by <a href="https://kcsajan.com.np" title="Click for more info">Sajan Kc</a></p></div>
                <div className="warning">
                    <h2>*_*Becareful*_*</h2>
                    <ol>
                        <li><p>Every time you refresh the page questions will be change.</p></li>
                        <li><p>Once you select the answer remaining are hidden and you can't change your answer.</p></li>
                        <li><p>After completing all the questions you will be redirected to result page.</p></li>
                    </ol>
                </div>
                {
                    this.state.questionBank.length > 0 &&
                    this.state.responses < 10 &&
                    this.state.questionBank.map(
                        ({ questionId, question, answers, correct }) =>
                            <QuestionCard
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                    )
                }
                {this.state.responses === 10 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        );
    }
}