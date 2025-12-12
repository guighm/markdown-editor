export interface DocumentDto {
    id: string;
    title: string;
    content: string;
    updatedAt: string;
}

export type DocumentDtoKeys = keyof DocumentDto;