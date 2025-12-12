import { useDocuments } from "@/contexts/DocumentsContext";
import { Bold, Code, Heading1, Heading2, Heading3, Heading4, Italic, List } from "lucide-react";
import { Toolbar, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem } from "./Toolbar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Props {
    handleTool: (tool: string) => void;
}

const EditorToolbar = ({ handleTool }: Props) => {
    const { selectedDocument } = useDocuments()

    if (!selectedDocument) {
        return (
            <div>
                <p>Nenhum documento foi encontrado!</p>
            </div>
        )
    }

    return (
        <div>
            <Toolbar className="inline-flex border border-primary rounded-2xl">
                <ToolbarToggleGroup
                    type="single"
                    onValueChange={handleTool}>
                    <div className="flex items-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="h1" className="p-2.5 cursor-pointer">
                                    <Heading1 />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Título 1 (Ctrl+1)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="h2" className="p-2.5 cursor-pointer">
                                    <Heading2 />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Título 2 (Ctrl+2)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="h3" className="p-2.5 cursor-pointer">
                                    <Heading3 />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Título 3 (Ctrl+3)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="h4" className="p-2.5 cursor-pointer">
                                    <Heading4 />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Título 4 (Ctrl+4)</p>
                            </TooltipContent>
                        </Tooltip>
                        <ToolbarSeparator className="w-px h-6 bg-primary mx-2" />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="bold" className="p-2.5 cursor-pointer">
                                    <Bold />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Negrito (Ctrl+B)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="italic" className="p-2.5 cursor-pointer">
                                    <Italic />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Itálico (Ctrl+I)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="list" className="p-2.5 cursor-pointer">
                                    <List />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Lista Simples (Ctrl+L)</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToolbarToggleItem value="code" className="p-2.5 cursor-pointer">
                                    <Code />
                                </ToolbarToggleItem>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Código Inline (Ctrl+E)</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </ToolbarToggleGroup>
            </Toolbar>
        </div>
    )
}

export default EditorToolbar;