import { useState } from "react";

//To fix

function useListCheckBox<T>(initialValues: T[] | []) {
    const [list, setUpdateList] = useState<T[]>(initialValues)
    const addToList = (value: T) => {
        if (!list.includes(value)) {
            setUpdateList((val) => [...val, value])
        } else {
            const filteredArray = list.filter((data) => data !== value);
            setUpdateList(() => [...filteredArray])
        }
    }
    const isOnList = (value: T) => {
        return list.includes(value)
    }
    return { list, addToList, isOnList }
}

export default useListCheckBox;