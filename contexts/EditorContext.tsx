import { createContext, ReactNode, RefObject, use, useRef } from "react";

interface ContextProps {
    textAreaRef: RefObject<HTMLTextAreaElement | null>
}

const EditorContext = createContext<ContextProps | undefined>(undefined)

interface ProviderProps {
    children: ReactNode
}

const EditorProvider = ({ children }: ProviderProps) => {
    return (
        <EditorContext value={{
            textAreaRef: useRef<HTMLTextAreaElement>(null)
        }}>
            {children}
        </EditorContext>
    )
}

const useEditor = () => {
    const editor = use(EditorContext)
    if (!editor) {
        throw new Error("Contexto não definido!")
    }
    return editor
}

export { EditorProvider, useEditor }