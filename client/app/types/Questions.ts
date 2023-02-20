export type QuestionType = {
    id: string
    title: string
    content?: string
    createdAt: string
    author: {
        name: string
        image: string
    }
    comments?: {
        createdAt: string
        id: string
        questionId: string
        userId: string
    }[]
}