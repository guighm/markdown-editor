export const validateContent = (content: string) => {
    const errors: string[] = []

    if (content.trim().length === 0) {
        errors.push("O conteúdo não pode estar vazio!")
    }

    return errors;
}