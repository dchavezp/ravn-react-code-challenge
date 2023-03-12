export function groupByKey<T, K extends keyof T>(arr: T[], key: K) {
    return arr.reduce((map, obj) => {
        const keyValue = obj[key];
        const group = map.get(keyValue) || [];
        group.push(obj);
        map.set(keyValue, group);
        return map;
    }, new Map<T[K], T[]>());
}