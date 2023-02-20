export type EditProps = {
    id: string
    profile: string
    name: string
    title: string
    comments?: {
        id: string
        questionId: string
        userId: string
    }[]
}