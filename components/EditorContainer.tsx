import { useDocuments } from "@/contexts/DocumentsContext";
import Editor from "./Editor";
import Preview from "./Preview";
import SmartInput from "./SmartInput";

const EditorContainer = () => {
    const { selectedDocument } = useDocuments()

    if (selectedDocument) {
        return (
            <div className="px-20">
                <div className="flex gap-2">
                    <p className="font-bold ml-1">Nome: </p>
                    <SmartInput initialValue={selectedDocument.title} id={selectedDocument.id} />
                </div>
                <div className="flex gap-5 mt-3 items-start">
                    <Editor />
                    <Preview />
                </div>
            </div>
        )
    }
}

export default EditorContainer;