interface IdentifiableProps {
    id: string;
}

export const baseService = <Entity extends IdentifiableProps>(storageKey: string) => {

    const getAllRecords = (): Entity[] => {
        const records = localStorage.getItem(storageKey)
        return records ? JSON.parse(records) : []
    }

    const saveAllRecords = (entities: Entity[]): void => {
        localStorage.setItem(storageKey, JSON.stringify(entities))
    }

    const createNewRecord = (entity: Entity): Entity => {
        const records = getAllRecords()
        records.push(entity)
        saveAllRecords(records)
        return entity
    }

    const updateOneRecord = (id: string, updatedRecord: Partial<Entity>): Entity => {
        const records = getAllRecords()
        const i = records.findIndex((record) => record.id === id)
        records[i] = { ...records[i], ...updatedRecord, updatedAt: new Date().toISOString() }
        saveAllRecords(records)
        return records[i]
    }

    const getOneRecord = (id: string): Entity | undefined => {
        const records = getAllRecords()
        const record = records.find((record) => record.id === id);
        return record
    }

    const deleteOneRecord = (id: string): boolean => {
        const records = getAllRecords()
        const filtered = records.filter((record) => record.id !== id)
        saveAllRecords(filtered)
        return records.length !== filtered.length
    }

    return {
        findAll: (): Entity[] => {
            return getAllRecords()
        },
        findOne: (id: string): Entity | undefined => {
            return getOneRecord(id)
        },
        update: (id: string, updatedRecord: Partial<Entity>): Entity => {
            return updateOneRecord(id, updatedRecord)
        },
        create: (entity: Entity): Entity => {
            return createNewRecord(entity)
        },
        remove: (id: string): boolean => {
            return deleteOneRecord(id)
        }
    }

}