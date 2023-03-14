import { PointEstimate, Status, TaskTag } from "@/model/task"


const hasTaskTag = (element: string) => Object.keys(TaskTag).includes(element)

const isStatus = (element: string) => Object.keys(Status).includes(element)

const isPointEstimate = (element: string) => Object.keys(PointEstimate).includes(element)

type valueType = string[] | string | number | Date | undefined
export const filterValueByQuery = (query: string) => {
    const fullFilter: string[] = query.split(";");
    const filterMap = new Map<string, valueType>([
        ["name", undefined],
        ["ownerId", undefined],
        ["tags", undefined],
        ["status", undefined],
        ["dueDate", undefined],
        ["pointEstimate", undefined],
    ])
    fullFilter.forEach(element => {
        const [key, value] = element.split(":");
        const valueToMap = value !== "" ? value : undefined
        if (element.split(":").length === 2) {
            switch (key) {
                case "tags":
                    if (valueToMap?.toUpperCase().split(",").some(hasTaskTag)) {
                        filterMap.set(key, valueToMap?.toUpperCase().split(",").filter(hasTaskTag))
                    } else {
                        filterMap.set(key, undefined)
                    }
                    break
                case "status":
                    if (isStatus(value.toUpperCase())) {
                        filterMap.set(key, value.toUpperCase())
                    } else {
                        filterMap.set(key, undefined)
                    }
                    break
                case "pointEstimate":
                    if (isPointEstimate(value.toUpperCase())) {
                        filterMap.set(key, value.toUpperCase())
                    } else {
                        filterMap.set(key, undefined)
                    }
                    break
                case "dueDate":
                    filterMap.set(key, undefined)
                    break
                default:
                    filterMap.set(key, valueToMap)
                    break
            }
        }
    });
    return Object.fromEntries(filterMap)
}