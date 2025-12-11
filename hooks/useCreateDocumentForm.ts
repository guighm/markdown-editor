import { useDocuments } from "@/contexts/DocumentsContext"
import { DocumentDto } from "@/types/entities/document.entity"
import { FormState, FormStatus } from "@/types/form-state"
import { validateTitle } from "@/validators/validateTitle"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState } from "react"

const useCreateDocumentForm = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [createdDocument, setCreatedDocument] = useState<DocumentDto | undefined>(undefined)
    const router = useRouter()
    const { create } = useDocuments()

    const defaultState: FormState = {
        status: FormStatus.IDLE,
        message: ""
    }

    const handleSubmit = (_: FormState, formData: FormData) => {
        const title = String(formData.get("title")) || ""
        const errors = validateTitle(title)
        let response: FormState;

        if (errors.length > 0) {
            response = {
                status: FormStatus.ERROR,
                message: errors[0]
            }
        } else {
            const newDocument: DocumentDto = {
                id: crypto.randomUUID(),
                title: title,
                content: `# ${title}`,
                updatedAt: new Date().toISOString()
            }

            setCreatedDocument(create(newDocument))

            response = {
                status: FormStatus.SUCCESS,
                message: "Markdown criado com sucesso!"
            }
        }

        return response;
    }

    const [state, formAction, isPending] = useActionState(handleSubmit, defaultState)

    useEffect(() => {
        const openEditor = () => {
            if (state.status === FormStatus.SUCCESS && createdDocument) {
                setOpen(false)
                router.push(`/doc/${createdDocument.id}`)
            }
        }
        openEditor()
    }, [state, createdDocument])

    return {
        open,
        setOpen,
        formAction,
        state,
        isPending
    }
}

export default useCreateDocumentForm;