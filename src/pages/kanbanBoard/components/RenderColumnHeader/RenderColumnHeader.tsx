import { RenderColumnHeaderProps } from "../../KanbanBoardProps";
import { titleMap } from "../../utils/constants";
import { getPriorityImage, getStatusImage, userDetails } from "../../utils/functions";
import "./RenderColumnHeader.css";

const RenderColumnHeader = ({ grouping, users, groupKey, groupedTickets }: RenderColumnHeaderProps) => {
    let headerTitle = "";
    let userAvailable = false;

    if (grouping === "userId") {
        const user = userDetails(users, groupKey);
        if (user) {
            headerTitle = user.name;
            userAvailable = user.available;
        }
    } else if (grouping === "priority") {
        headerTitle = titleMap.priority[groupKey as keyof typeof titleMap.priority] || groupKey;
    } else if (grouping === "status") {
        headerTitle = titleMap.status[groupKey as keyof typeof titleMap.status] || groupKey;
    } else {
        headerTitle = groupKey;
    }

    return (
        <div className="columnHeader">
            {grouping === "userId" && (
                <div className="photoWrapper">
                    <img src="/assets/person.svg" className="photo" alt="Profile" />
                    <div className={`statusIndicator ${userAvailable ? 'green' : 'red'}`}></div>
                </div>
            )}
            {grouping === "priority" && (
                <div className="photoWrapper">
                    <img src={`/assets/${getPriorityImage(parseInt(groupKey), "header")}`} className="photo borderAndRadiusNone" alt={`Priority ${groupKey}`} />
                </div>
            )}
            {grouping === "status" && (
                <div className="photoWrapper">
                    <img src={`/assets/${getStatusImage(groupKey)}`} className="photo borderAndRadiusNone" alt={`Status ${groupKey}`} />
                </div>
            )}
            <div className="info">
                <h2>{headerTitle}</h2>
                <span className="taskCount">{groupedTickets[groupKey]?.length}</span>
            </div>
            <div className="images">
                <img src="/assets/add.svg" className="icon" alt="add" />
                <img src="/assets/3dotmenu.svg" className="icon" alt="menu" />
            </div>
        </div>
    );
};

export default RenderColumnHeader;