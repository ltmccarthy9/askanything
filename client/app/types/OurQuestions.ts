export type OurQuestionType = {
    id: string
    name: string
    email: string
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

// type Ques = {
//   id: string
//   questionId: string
//   title: string
//   name: string
//   profilePic: string
//   comments?: {
//     createdAt: string
//     id: string
//     questionId: string
//     userId: string
// }[] | undefined
// }
