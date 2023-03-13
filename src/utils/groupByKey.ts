export function groupByKey<T, K extends keyof T>(arr: T[] | undefined, key: K) {
    if (!arr) return
    const mapDataGrouped = arr.reduce((map, obj) => {
        const keyValue = obj[key];
        const group = map.get(keyValue) || [];
        group.push(obj);
        map.set(keyValue, group);
        return map;
    }, new Map<T[K], T[]>());
    return Array.from(mapDataGrouped); // Will Return an array where: [{0:key,1:data[]}] 
}