import { useDocuments } from "@/contexts/DocumentsContext";
import { Folder } from "lucide-react";
import DocumentsListItem from "./DocumentsListItem";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

const DocumentsList = () => {
    const { documentsList } = useDocuments()

    if (documentsList.length === 0) {
        return (
            <div className="flex flex-col items-center border p-10 rounded-2xl border-primary">
                <div className="w-20 h-20 rounded-full flex items-center justify-center border border-primary">
                    <Folder className="w-10 h-10" />
                </div>
                <p className="mt-5 font-bold">Nenhum documento criado!</p>
            </div>
        )
    }

    return (
        <div>
            <h2 className="pb-5 text-xl text-center font-semibold tracking-tight first:mt-0">
                Arquivos Criados
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Nome do Markdown</TableHead>
                        <TableHead className="font-bold">Última modificação</TableHead>
                        <TableHead className="font-bold text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {documentsList.map((doc) => {
                        return (
                            <DocumentsListItem key={doc.id} document={doc} />
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default DocumentsList;