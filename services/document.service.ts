import { DocumentDto } from "@/types/entities/document.entity";
import { baseService } from "./base/base.service";

export const documentService = baseService<DocumentDto>("documents")