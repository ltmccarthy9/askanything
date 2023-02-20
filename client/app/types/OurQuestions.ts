export type OurQuestionType = {
    id: string
    name: string
    email?: string | undefined
    image: string
    questions: {
        id: string
        title: string
        content?: string | undefined
        createdAt: string
        comments?: {
            createdAt: string
            id: string
            questionId: string
            userId: string
        }[] | undefined
    }[]
}