"use client"

import EditorContainer from "@/components/EditorContainer";
import HomeButton from "@/components/HomeButton";
import { useDocuments } from "@/contexts/DocumentsContext";
import { EditorProvider } from "@/contexts/EditorContext";
import { X } from "lucide-react";
import { use, useEffect } from "react";

interface Params {
    id: string;
}

interface PageParams {
    params: Promise<Params>
}

const DocumentEditionPage = ({ params }: PageParams) => {
    const { id } = use(params)
    const { select, selectedDocument, clearSelection } = useDocuments()

    useEffect(() => {
        select(id)
    }, [select, id])

    useEffect(() => {
        return () => clearSelection()
    }, [clearSelection])

    if (!selectedDocument) {
        return (
            <div className="p-6 max-w-xl mx-auto">
                <div className="flex flex-col items-center border p-10 rounded-2xl border-primary">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center border border-primary">
                        <X className="w-10 h-10" />
                    </div>
                    <p className="mt-5 font-bold">Nenhum documento encontrado!</p>
                </div>
            </div>
        )
    }

    return (
        <EditorProvider>
            <div>
                <HomeButton />
                <div className="min-h-screen">
                    <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0 p-[30px]">
                        Editar Arquivo
                    </h2>
                    <div>
                        <EditorContainer />
                    </div>
                </div>
            </div>
        </EditorProvider>
    )
}

export default DocumentEditionPage;