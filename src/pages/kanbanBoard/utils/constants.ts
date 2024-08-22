export const images = {
    priority: {
        header: {
            "4": "SVG - Urgent Priority colour.svg",
            "3": "Img-High_Priority.svg",
            "2": "Img - Medium Priority.svg",
            "1": "Img - Low Priority.svg",
            "0": "No-priority.svg",
        },
        footer: {
            "4": "SVG - Urgent Priority grey.svg",
            "3": "Img - Low Priority.svg",
            "2": "Img - Medium Priority.svg",
            "1": "Img-High_Priority.svg",
            "0": "No-priority.svg",
        },
    },
    status: {
        "Todo": "To-do.svg",
        "In progress": "in-progress.svg",
        "done": "Done.svg",
        "Backlog": "Backlog.svg",
        "Cancelled": "Cancelled.svg",
    }
} as const;

export const titleMap = {
    priority: {
        "0": "No Priority",
        "1": "Low Priority",
        "2": "Medium Priority",
        "3": "High Priority",
        "4": "Urgent Priority",
    },
    status: {
        "Todo": "To-do",
        "In progress": "In progress",
        "done": "Done",
        "Backlog": "Backlog",
        "Cancelled": "Cancelled",
    }
} as const;
