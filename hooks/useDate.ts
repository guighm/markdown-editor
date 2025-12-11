import { useMemo } from "react";

const useDate = (iso: string) => {

    const date = useMemo(() => {
        const d: Date = new Date(iso)
        return {
            day: String(d.getDate()).padStart(2, "0"),
            month: String(d.getMonth() + 1).padStart(2, "0"),
            year: d.getFullYear(),
            hour: String(d.getHours()).padStart(2, "0"),
            minute: String(d.getMinutes()).padStart(2, "0")
        }
    }, [iso])

    return date
}

export default useDate;