import { useDocuments } from "@/contexts/DocumentsContext";
import { Trash } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const DeleteMarkdownButton = ({ id }: { id: string }) => {

    const [open, setOpen] = useState<boolean>(false)
    const { remove } = useDocuments()
    
    return (
        <div>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                        onClick={() => setOpen(true)}>
                        <Trash className="w-4 h-4" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Deletar</p>
                </TooltipContent>
            </Tooltip>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>A exclusão do documento não pode ser desfeita.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {
                            (remove(id))
                        }}>Deletar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default DeleteMarkdownButton;