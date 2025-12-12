"use client"

import { documentService } from "@/services/document.service";
import { DocumentDto } from "@/types/entities/document.entity";
import { createContext, ReactNode, use, useCallback, useEffect, useState } from "react";

interface ContextProps {
    documentsList: DocumentDto[];
    selectedDocument: DocumentDto | undefined;
    select: (id: string) => void;
    clearSelection: () => void;
    create: (doc: DocumentDto) => DocumentDto;
    update: (id: string, doc: Partial<DocumentDto>) => DocumentDto;
    remove: (id: string) => boolean;
}

const DocumentsContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
    children: ReactNode
}

const DocumentsProvider = ({ children }: ProviderProps) => {
    const [documentsList, setDocumentsList] = useState<DocumentDto[]>([])
    const [selectedDocument, setSelectedDocument] = useState<DocumentDto | undefined>(undefined)

    const select = useCallback((id: string) => {
        const document = documentService.findOne(id)
        if (document) setSelectedDocument(document)
    }, [])

    const fetchDocuments = useCallback(() => {
        const documents = documentService.findAll()
        const sorted = documents.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        setDocumentsList(sorted)
    }, [])

    const create = (document: DocumentDto): DocumentDto => {
        const created = documentService.create(document)
        fetchDocuments()
        return created
    }

    const update = useCallback((id: string, document: Partial<DocumentDto>): DocumentDto => {
        const updated = documentService.update(id, document)
        fetchDocuments()
        select(updated.id)
        return updated
    }, [fetchDocuments, select])

    const remove = (id: string): boolean => {
        const removed = documentService.remove(id)
        fetchDocuments()
        return removed
    }

    const clearSelection = useCallback(() => {
        setSelectedDocument(undefined)
    }, [])

    useEffect(() => {
        const fetch = () => {
            fetchDocuments()
        }
        fetch()
    }, [fetchDocuments])

    const value: ContextProps = {
        documentsList: documentsList,
        selectedDocument: selectedDocument,
        select: select,
        create: create,
        update: update,
        remove: remove,
        clearSelection: clearSelection
    }

    return (
        <DocumentsContext value={value}>
            {children}
        </DocumentsContext>
    )
}

const useDocuments = () => {
    const docs = use(DocumentsContext)
    if (!docs) {
        throw new Error("Contexto não definido!")
    }
    return docs
}

export { DocumentsProvider, useDocuments };
