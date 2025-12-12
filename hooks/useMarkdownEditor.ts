import { useEditor } from "@/contexts/EditorContext"
import { validateContent } from "@/validators/validateContent"
import useInputManager from "./useInputManager"
import { useDocuments } from "@/contexts/DocumentsContext"

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

    const applyFormat = (before: string, after: string) => {
        const textarea = textAreaRef.current
        if (!textarea) return

        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        const selectedLines = textarea.value.substring(start, end).split("\n")
        const formattedLines: string[] = []

        for (const line of selectedLines) {
            if (line.length !== 0) {
                const formattedLine = line.trim().replace(before, "").replace(after, "")
                formattedLines.push(`${before}${formattedLine}${after}`)
            } else {
                formattedLines.push(line)
            }
        }

        const formattedSelection = formattedLines.join("\n")

        textarea.value = (
            textarea.value.substring(0, start)
            +
            formattedSelection
            +
            textarea.value.substring(end)
        )

        setInputValue(textarea.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const keyCombo = `${e.ctrlKey ? "ctrl+" : ""}${e.key}`

        switch (keyCombo) {
            case "ctrl+1":
                e.preventDefault()
                applyFormat("# ", "")
                break
            case "ctrl+2":
                e.preventDefault()
                applyFormat("## ", "")
                break
            case "ctrl+3":
                e.preventDefault()
                applyFormat("### ", "")
                break
            case "ctrl+4":
                e.preventDefault()
                applyFormat("#### ", "")
                break
            case "ctrl+b":
            case "ctrl+B":
                e.preventDefault()
                applyFormat("**", "**")
                break
            case "ctrl+i":
            case "ctrl+I":
                e.preventDefault()
                applyFormat("*", "*")
                break
            case "ctrl+c":
            case "ctrl+C":
                e.preventDefault()
                applyFormat("`", "`")
                break
            case "ctrl+l":
            case "ctrl+L":
                e.preventDefault()
                applyFormat("- ", "")
                break
            default:
                break
        }
    }

    const handleTool = (tool: string) => {
        switch (tool) {
            case "h1":
                applyFormat("# ", "")
                break
            case "h2":
                applyFormat("## ", "")
                break
            case "h3":
                applyFormat("### ", "")
                break
            case "h4":
                applyFormat("#### ", "")
                break
            case "bold":
                applyFormat("**", "**")
                break
            case "italic":
                applyFormat("*", "*")
                break
            case "code":
                applyFormat("`", "`")
                break
            case "list":
                applyFormat("- ", "")
                break
            default:
                break
        }
    }

    return {
        saveStatus,
        inputValue,
        setInputValue,
        handleKeyDown,
        handleTool
    }
}

export default useMarkdownEditor;