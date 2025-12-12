export enum FormStatus {
    SUCCESS,
    ERROR,
    IDLE
}

export interface FormState {
    status: FormStatus;
    message: string;
}