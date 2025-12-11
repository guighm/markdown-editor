"use client"

import { useDocuments } from "@/contexts/DocumentsContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = () => {
    const { selectedDocument } = useDocuments()

    if (!selectedDocument) {
        return <p>Nenhum documento aqui!</p>
    }

    return (
        <div className="w-1/2 flex flex-col justify-center items-center">
            <h2 className="font-bold ml-3">Preview</h2>
            <div className="prose dark:prose-invert border-2 rounded-2xl min-h-screen min-w-[750px] dark:text-white p-5 mt-16">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {selectedDocument.content}
                </Markdown>
            </div>
        </div>
    )
}

export default Preview;