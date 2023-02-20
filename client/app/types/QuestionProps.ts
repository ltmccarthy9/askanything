export type EditProps = {
    questionId: string
    profilePic: string
    name: string
    questionTitle: string
    comments?: {
      id: string
      questionId: string
      userId: string
    }[] | undefined
  }

  export type ExpandedProps = {
    questionId: string
    profilePic: string
    name: string
    questionTitle: string
    content: string
    comments?: {
      id: string
      questionId: string
      userId: string
    }[] | undefined
  }