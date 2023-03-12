export const setColorFromEstimatedDate = (estimatedDate: number) => {
    if (estimatedDate === 0) return "primary";
    if (estimatedDate <= 2) return "tertiary"
    return "neutral";
}