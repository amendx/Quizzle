
export interface Quiz {
    id: number,
    questions: number[],
    name: string,
    description: string,
    answered: boolean,
    answers?: any[];
}