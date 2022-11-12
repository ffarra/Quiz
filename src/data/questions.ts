import {IQuestions} from "../models";

export const questions: IQuestions[] = [
    {
        questionText: 'What year was the very first model of the iPhone released?',
        answerOptions: [
            { answerText: '2000', isCorrect: false },
            { answerText: '2004', isCorrect: false },
            { answerText: '2007', isCorrect: true },
            { answerText: '2009', isCorrect: false },
        ],
    },
    {
        questionText: 'Which animal can be seen on the Porsche logo',
        answerOptions: [
            { answerText: 'Bat', isCorrect: false },
            { answerText: 'Horse', isCorrect: true },
            { answerText: 'Snake', isCorrect: false },
            { answerText: 'Dog', isCorrect: false },
        ],
    },
    {
        questionText: 'What was the name of the actor who played Jack Dawson in Titanic',
        answerOptions: [
            { answerText: ' Leonardo DiCaprio', isCorrect: true },
            { answerText: 'Johnny Depp', isCorrect: false },
            { answerText: 'Brad Pitt', isCorrect: false },
            { answerText: 'bradley cooper', isCorrect: false },
        ],
    },
    {
        questionText: 'Who has been the longest-serving monarch of the United Kingdom?',
        answerOptions: [
            { answerText: ' Queen Elizabeth I', isCorrect: false },
            { answerText: 'George II', isCorrect: false },
            { answerText: 'George III', isCorrect: false },
            { answerText: ' Queen Elizabeth II', isCorrect: true },
        ],
    },
    {
        questionText: 'How many eyes does a bee have?',
        answerOptions: [
            { answerText: 'Two', isCorrect: false },
            { answerText: 'Three', isCorrect: false },
            { answerText: 'Four', isCorrect: false },
            { answerText: 'Five', isCorrect: true },
        ],
    },
]