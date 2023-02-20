export type OurQuestionType = {
    id: string
    name?: string
    email?: string
    image?: string
    questions: {
        id: string
        title: string
        content?: string
        createdAt: string
        comments?: {
            createdAt: string
            id: string
            questionId: string
            userId: string
        }[]
    }[]
}