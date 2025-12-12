import { useDocuments } from "@/contexts/DocumentsContext"
import { useEditor } from "@/contexts/EditorContext"
import { validateContent } from "@/validators/validateContent"
import useInputManager from "./useInputManager"

const useMarkdownEditor = () => {

    const { textAreaRef } = useEditor()
    const { selectedDocument } = useDocuments()

    if (!selectedDocument) {
        throw new Error("Nenhum documento selecionado.")
    }

    const { inputValue, setInputValue, saveStatus } = useInputManager({
        key: "content",
        id: selectedDocument.id,
        initialValue: selectedDocument.content,
        validator: validateContent
    })

    const wrapSelection = (prefix: string, suffix: string) => {
        const textarea = textAreaRef ? textAreaRef.current : null;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = inputValue.slice(start, end) || "";
        const before = inputValue.slice(0, start);
        const after = inputValue.slice(end);
        const newValue = before + prefix + selectedText + suffix + after;
        setInputValue(newValue);
        requestAnimationFrame(() => {
            const cursorPosition = start + prefix.length + selectedText.length + suffix.length;
            textarea.focus();
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        });
    }

    const prefixLines = (prefix: string) => {
        const textarea = textAreaRef ? textAreaRef.current : null;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const before = inputValue.slice(0, start);
        const selectedText = inputValue.slice(start, end) || "";
        const after = inputValue.slice(end);
        const lines = selectedText.split('\n');
        const prefixedLines = lines.map(line => prefix + line).join('\n');
        const newValue = before + prefixedLines + after;
        setInputValue(newValue);
        requestAnimationFrame(() => {
            const cursorEnd = start + prefixedLines.length;
            textarea.focus();
            textarea.setSelectionRange(start, cursorEnd);
        });
    }

    const insertHeading = (level: number) => {
        const textarea = textAreaRef ? textAreaRef.current : null;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const lineStart = inputValue.lastIndexOf('\n', start - 1) + 1;
        const before = inputValue.slice(0, lineStart);
        const after = inputValue.slice(lineStart);
        const hashes = "#".repeat(level)
        const newValue = before + hashes + " " + after;
        setInputValue(newValue);
        requestAnimationFrame(() => {
            const cursorPosition = lineStart + hashes.length + 1 + (start - lineStart);
            textarea.focus();
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        });
    }

    const handleTool = (tool: string) => {
        switch (tool) {
            case "h1":
                insertHeading(1);
                break;
            case "h2":
                insertHeading(2);
                break;
            case "h3":
                insertHeading(3);
                break;
            case "h4":
                insertHeading(4);
                break;
            case "bold":
                wrapSelection("**", "**");
                break;
            case "italic":
                wrapSelection("*", "*");
                break;
            case "list":
                prefixLines("- ");
                break;
            case "code":
                wrapSelection("`", "`");
                break;
            default:
                break;
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {

        const mod = e.ctrlKey;
        if (!mod) return;
        const key = String(e.key).toLowerCase();

        switch (key) {
            case "1":
                e.preventDefault();
                insertHeading(1);
                break;
            case "2":
                e.preventDefault();
                insertHeading(2);
                break;
            case "3":
                e.preventDefault();
                insertHeading(3);
                break;
            case "4":
                e.preventDefault();
                insertHeading(4);
                break;
            case "b":
                e.preventDefault();
                wrapSelection("**", "**");
                break;
            case "i":
                e.preventDefault();
                wrapSelection("*", "*");
                break;
            case "l":
                e.preventDefault();
                prefixLines("- ");
                break;
            case "e":
                e.preventDefault();
                wrapSelection("`", "`");
                break;
            default:
                break;
        }

    }

    return {
        saveStatus,
        inputValue,
        setInputValue,
        handleTool,
        handleKeyDown
    }
}

export default useMarkdownEditor;