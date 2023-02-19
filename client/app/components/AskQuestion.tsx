'use client'

import { useState } from "react"

export default function AskQuestion(){
    const [question, setQuestion] = useState("")
    const [body, setBody] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <form className="bg-white my-8 p-4 rounded-md flex flex-col">
            <div className="flex flex-col my-2">
                <textarea 
                onChange={(e) => setQuestion(e.target.value)} 
                name="question" 
                value={question}
                placeholder="Ask a question."
                maxLength={200}
                className="py-3 px-4 align-middle text-m font-extrabold tracking-wide rounded-md my-2 h-12 resize-none overflow-hidden border"
                ></textarea>
            </div>
            <div className="flex flex-col my-2">
                <textarea 
                onChange={(e) => setBody(e.target.value)} 
                name="question" 
                value={body}
                placeholder="Text (optional)"
                maxLength={1000}
                className="py-3 px-4 align-middle text-md tracking-wide rounded-md my-2 overflow-hidden border"
                ></textarea>
            </div>
            <div className="w-full flex">
                <button
                disabled={isDisabled}
                className="text-sm bg-lime-700 text-white py-3 px-4 rounded-lg hover:bg-lime-600 ml-auto disabled:opacity-25"
                type="submit"
                >
                    Post Question
                </button>
            </div>
        </form>
    )
}