import useDate from "@/hooks/useDate";
import { DocumentDto } from "@/types/entities/document.entity";
import DeleteMarkdownButton from "./DeleteMarkdownButton";
import EditMarkdownButton from "./EditMarkdownButton";
import SmartInput from "./SmartInput";
import { TableCell, TableRow } from "./ui/table";

interface Props {
    document: DocumentDto;
}

const DocumentsListItem = ({ document }: Props) => {
    const { day, month, year, hour, minute } = useDate(document.updatedAt)
    const updatedAt = `${day}/${month}/${year} - ${hour}:${minute}`

    return (
        <TableRow className="cursor-pointer">
            <TableCell>
                <SmartInput initialValue={document.title} id={document.id} />
            </TableCell>
            <TableCell>{updatedAt}</TableCell>
            <TableCell>
                <div className="flex justify-center items-center">
                    <EditMarkdownButton id={document.id} />
                    <DeleteMarkdownButton id={document.id} />
                </div>
            </TableCell>
        </TableRow>
    )
}

export default DocumentsListItem;