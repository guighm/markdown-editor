import { Home } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const HomeButton = () => {

    return (
        <div className="absolute top-7 left-16 flex gap-2.5">
            <Tooltip>
                <TooltipTrigger>
                    <Link href={"/"}>
                        <Home className="w-6 h-6" />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Voltar para a Home</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )

}

export default HomeButton;