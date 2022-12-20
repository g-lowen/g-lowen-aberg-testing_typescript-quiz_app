import { useCalculateScore } from '../../utilities/useCalculateScore';
import { Points } from '../../interfaces/IPoints';

describe("Calulation total score", () => {
    test("Calcutate total score given timePoints = 5 and the forth answer is incorrect ", () => {
        // arange
        let expected = 126
        let calcResult : number = 0;
        let questionAnswers: Points[] = []
        let questionAnswer: Points = {difficultyPoints: 0, timePoints: 0 }
    
        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 0
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        questionAnswer.difficultyPoints = 1
        questionAnswer.timePoints = 5
        questionAnswers.push(questionAnswer)

        // act
        calcResult = useCalculateScore(questionAnswers);
        
        // assert
        expect(calcResult).toBe(expected)
    })
})