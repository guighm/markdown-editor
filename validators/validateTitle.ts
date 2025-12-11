export const validateTitle = (title: string) => {
    const errors: string[] = []

    if (title.trim().length === 0) {
        errors.push("O título não pode estar vazio!")
    }

    const forbidden = /[\/\\:*?"<>|]/;
    if (forbidden.test(title)) {
        errors.push(`O título contém caracteres inválidos -> ${[...new Set(title.match(forbidden))].join(", ")}`)
    }

    if (title.length > 100) {
        errors.push("O título é muito longo (máx: 100 caracteres)!")
    }

    if (title !== title.trim()) {
        errors.push("O título não pode começar ou terminar com espaço!")
    }

    return errors;
}