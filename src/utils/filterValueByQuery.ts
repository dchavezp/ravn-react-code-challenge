const hasTaskTag = (element: string) => element === "ANDROID" || element === "IOS" || element === "NODE_JS" || element === "RAILS" || element === "REACT"

const isStatus = (element: string) =>
    "BACKLOG" === element
    || "CANCELLED" === element
    || "DONE" === element
    || "IN_PROGRESS" === element
    || "TODO" === element
const isPointEstimate = (element: string) =>
    "EIGHT" === element
    || "FOUR" === element
    || "ONE" === element
    || "TWO" === element
    || "ZERO" === element

export const filterValueByQuery = (query: string) => {
    const fullFilter: string[] = query.split(";");
    const filterMap = new Map<string, unknown>([
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
            if (key === "tags") {
                if (valueToMap?.toUpperCase().split(",").some(hasTaskTag)) {
                    filterMap.set(key, valueToMap?.toUpperCase().split(",").filter(hasTaskTag))
                } else {
                    filterMap.set(key, undefined)
                }
            }
            else if (key === "status") {
                if (isStatus(value.toUpperCase())) {
                    filterMap.set(key, value.toUpperCase())
                } else {
                    filterMap.set(key, undefined)
                }
            }
            else if (key === "pointEstimate") {
                if (isPointEstimate(value.toUpperCase())) {
                    filterMap.set(key, value.toUpperCase())
                } else {
                    filterMap.set(key, undefined)
                }
            }
            else if (key === "dueDate") {
                filterMap.set(key, undefined)
            }
            else {
                filterMap.set(key, valueToMap)
            }
        }
    });
    return Object.fromEntries(filterMap)
}