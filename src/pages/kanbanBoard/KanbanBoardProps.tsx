import { images } from "./utils/constants";

export type TicketProps = {
    id: string;
    title: string;
    userId: string;
    status: string;
    priority: number;
    tag: string[];
}

export type UserProps = {
    id: string;
    name: string;
    available: boolean;
}

export type RenderTicketProps = {
    tickets: TicketProps[];
    users: UserProps[];
    grouping: string;
}

export type RenderColumnHeaderProps = {
    grouping: string;
    users: UserProps[];
    groupKey: string;
    groupedTickets: Record<string, TicketProps[]>;
}

export type PriorityKeys = keyof typeof images.priority.header;
