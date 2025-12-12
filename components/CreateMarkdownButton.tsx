import useCreateDocumentForm from "@/hooks/useCreateDocumentForm";
import { FormStatus } from "@/types/form-state";
import { FilePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";

const CreateMarkdownButton = () => {

    const { setOpen, open, formAction, state, isPending } = useCreateDocumentForm()

    return (
        <div className="absolute top-5 right-24 flex gap-2.5">
            <Button className="px-4 py-2 mb-3" onClick={() => {
                setOpen(true)
            }}>
                <FilePlusIcon />
                Criar Markdown
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Criar arquivo Markdown</DialogTitle>
                        <DialogDescription>Digite o nome do novo arquivo Markdown</DialogDescription>
                    </DialogHeader>
                    <div>
                        <form action={formAction} className="flex flex-col gap-5">
                            <Input placeholder="Nome do novo arquivo" name="title" />
                            {state.status === FormStatus.ERROR && (
                                <p className="text-red-500 text-sm font-medium ml-2">
                                    {state.message}
                                </p>
                            )}
                            <Button
                                type="submit"
                                className="self-end"
                                disabled={isPending}
                            >
                                Criar
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateMarkdownButton;