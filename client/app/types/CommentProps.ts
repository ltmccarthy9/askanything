export type CommentProps = {
    id: string
    profilePic: string
    username: string
    createdAt: string
    comment: string
}

export type CommentType = {
    id: string
    profilePic: string
    username: string
    createdAt: string
    message: string
    author: {
        name: string
        image: string
    }
}