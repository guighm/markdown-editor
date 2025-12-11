import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { useDocuments } from "@/contexts/DocumentsContext";
import { SaveStatus } from "@/types/save-status";
import { toast } from "sonner";
import { DocumentDto, DocumentDtoKeys } from "@/types/entities/document.entity";

interface Props {
    key: DocumentDtoKeys;
    id: string;
    initialValue: string;
    validator: (field: string) => string[];
}

const useInputManager = ({ key, id, initialValue, validator }: Props) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle")
    const debouncedValue = useDebounce<string>(inputValue)
    const { update } = useDocuments()

    useEffect(() => {
        const changeStatus = () => {
            if (inputValue !== initialValue) {
                setSaveStatus("saving")
            } else {
                setTimeout(() => {
                    setSaveStatus("idle")
                }, 1500)
            }
        }
        changeStatus()
    }, [inputValue, initialValue])

    useEffect(() => {
        const handle = () => {
            const errors = validator(debouncedValue)

            if (errors.length > 0) {
                toast.error(errors[0])
                setSaveStatus("error")
                setInputValue(initialValue)
                return;
            }

            if (debouncedValue !== initialValue) {
                setSaveStatus("saving")
                const updatedDocument: Partial<DocumentDto> = {
                    [key]: debouncedValue
                }
                update(id, updatedDocument)
                setSaveStatus("saved")
            }
        }
        handle()
    }, [debouncedValue, key])

    return {
        saveStatus,
        inputValue,
        setInputValue
    }
}

export default useInputManager;