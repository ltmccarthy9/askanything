export type QuestionExpand = {
    id: string
    questionTitle: string
    content?: string | undefined
    createdAt: string
    author: {
        name: string
        image: string
    }
}