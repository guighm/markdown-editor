import { useDocuments } from "@/contexts/DocumentsContext";
import { useEditor } from "@/contexts/EditorContext";
import useMarkdownEditor from "@/hooks/useMarkdownEditor";
import { CircleCheck, CircleX, Loader } from "lucide-react";
import EditorToolbar from "./EditorToolbar";
import { Textarea } from "./ui/textarea";

const Editor = () => {

    const { selectedDocument } = useDocuments()
    const { textAreaRef } = useEditor()

    const {
        saveStatus,
        inputValue,
        setInputValue,
        handleKeyDown,
        handleTool
    } = useMarkdownEditor()

    if (!selectedDocument) {
        return (
            <div>
                <p>Nenhum documento foi encontrado!</p>
            </div>
        )
    }

    return (
        <div className="w-1/2 flex flex-col justify-center items-center">
            <h2 className="font-bold ml-3 mb-2.5">Editor</h2>
            <div className="flex gap-5">
                <EditorToolbar handleTool={handleTool} />
                <div className="absolute left-44 top-32">
                    {saveStatus === "saving" && <Loader className="text-gray-500 mt-5" />}
                    {saveStatus === "saved" && <CircleCheck className="text-green-600 mt-5" />}
                    {saveStatus === "error" && <CircleX className="text-red-600 mt-5" />}
                </div>
            </div>
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