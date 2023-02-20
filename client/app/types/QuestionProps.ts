export type EditProps = {
    questionId: string
    profilePic: string
    name: string
    questionTitle: string
    comments?: {
      id: string
      postId: string
      userId: string
    }[]
  }