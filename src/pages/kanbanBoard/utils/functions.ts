import { PriorityKeys, UserProps } from "../KanbanBoardProps";
import { images } from "./constants";

export const userDetails = (users: UserProps[], user_id: string) => {
    const user = users.find((user) => user.id === user_id);
    return user;
};

export function groupAndSortTickets<T extends Record<string, any>, K extends keyof T>(
    array: T[],
    groupBy: K,
    sortBy: K
): Record<string, T[]> {
    const grouped: Record<string, T[]> = array.reduce<Record<string, T[]>>((result, item) => {
        const groupValue = item[groupBy] as unknown as string;
        if (!result[groupValue]) {
            result[groupValue] = [];
        }
        result[groupValue].push(item);
        return result;
    }, {});

    Object.keys(grouped).forEach((group) => {
        grouped[group].sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];
            return aValue > bValue ? 1 : -1;
        });
    });
    return grouped;
};

export const getPriorityImage = (priority: number, position: "header" | "footer"): string => {
    const priorityKey = priority.toString() as PriorityKeys;
    return images.priority[position][priorityKey] || images.priority[position]["0"];
};

export const getStatusImage = (status: string): string => {
    return images.status[status as keyof typeof images.status] || images.status["Cancelled"];
};