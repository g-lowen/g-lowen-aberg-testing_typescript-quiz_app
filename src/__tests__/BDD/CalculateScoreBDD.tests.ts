import { loadFeature, defineFeature } from 'jest-cucumber';
import { useCalculateScore } from '../../utilities/useCalculateScore';
import { Points } from '../../interfaces/IPoints';
const feature = loadFeature('./specs/features/calcScore.feature');

 defineFeature(feature, (test) => {
    let calcResult : number = 0;
    let questionAnswers: Points[] = []
    let questionAnswer: Points = {difficultyPoints: 0, timePoints: 0 }

    
    test('Add two numbers', ({ given, when, then }) => {
        given(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
        })
        when(/^x: (\d+), y: (\d+)$/, (diff, time) => {
            questionAnswer.difficultyPoints = parseInt(diff)
            questionAnswer.timePoints = parseInt(time)
            questionAnswers.push(questionAnswer)
            console.log(questionAnswers);
            
        })

        when('Calling the function to add two numbers', () => {
            calcResult = useCalculateScore(questionAnswers);
            // expect(calcResult).toBe(calcResult);
        });

        then(/^the result should be (\d+)$/, (expected) => {
            expect(calcResult).toBe(parseInt(expected));
        });
  });
});