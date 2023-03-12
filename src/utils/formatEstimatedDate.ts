import { format, differenceInDays, formatRelative } from "date-fns";
export const formatEstimatedDate = (createdAt: string, dueDate: string) => {
    return differenceInDays(new Date(dueDate), new Date(createdAt)) > 0
        ? format(new Date(dueDate), "d MMMM, yyyy")
        : formatRelative(new Date(dueDate), new Date(createdAt))
}