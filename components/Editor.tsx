import { useDocuments } from "@/contexts/DocumentsContext";
import { CircleCheck, CircleX, Loader } from "lucide-react";
import EditorToolbar from "./EditorToolbar";
import { Textarea } from "./ui/textarea";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { useEditor } from "@/contexts/EditorContext";

const Editor = () => {

    const { selectedDocument } = useDocuments()
    const { textAreaRef } = useEditor()

    if (!selectedDocument) {
        return (
            <div>
                <p>Nenhum documento foi encontrado!</p>
            </div>
        )
    }

    const {
        saveStatus,
        inputValue,
        setInputValue,
        handleKeyDown
    } = useMarkdownEditor({ selectedDocument: selectedDocument })

    return (
        <div className="w-1/2 flex flex-col justify-center items-center">
            <h2 className="font-bold ml-3 mb-2.5">Editor</h2>
            <EditorToolbar />
            {saveStatus === "saving" && <Loader className="text-gray-500 mt-5" />}
            {saveStatus === "saved" && <CircleCheck className="text-green-600 mt-5" />}
            {saveStatus === "error" && <CircleX className="text-red-600 mt-5" />}
            <Textarea
                ref={textAreaRef}
                value={inputValue}
                className="resize-none h-screen mt-5"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Editor;