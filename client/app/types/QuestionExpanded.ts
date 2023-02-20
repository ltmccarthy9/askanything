export type QuestionExpand = {
    id: string
    title: string
    content?: string | undefined
    createdAt: string
    author: {
        name: string
        image: string
    }
    comments?: {
        author: {
            name: string
            image: string
        }
        createdAt: string
        id: string
        userId: string
    }[] | undefined
}