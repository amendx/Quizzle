export interface Question {
    id: number,
    name: string,
    description: string,
    parentId: number,
    answers?: number[],
    correctAnswer: number;
    isCorrect?: boolean;
}