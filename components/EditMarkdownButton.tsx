import { PencilLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const EditMarkdownButton = ({ id }: { id: string }) => {

    const router = useRouter()

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => router.push(`/doc/${id}`)}
                >
                    <PencilLine className="w-4 h-4" />
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Editar</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default EditMarkdownButton;