import React, { useEffect, useMemo, useState } from "react";
import { fetchKanbanData } from "../../api/apiService";
import { TicketProps, UserProps } from "./KanbanBoardProps";
import Dropdown from "./components/DropdownFilter/DropdownFilter";
import RenderTickets from "./components/RenderTickets/RenderTickets";
import RenderColumnHeader from "./components/RenderColumnHeader/RenderColumnHeader";
import { groupAndSortTickets } from "./utils/functions";
import "./kanbanBoard.css";

const KanbanBoard = () => {

    const [tickets, setTickets] = useState<TicketProps[]>([]);
    const [users, setUsers] = useState<UserProps[]>([]);
    const [grouping, setGrouping] = useState<keyof TicketProps>('status');
    const [sortOption, setSortOption] = useState<keyof TicketProps>('priority');

    const handleGroupingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGrouping(event.target.value as keyof TicketProps);
    };

    const handleOrderingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as keyof TicketProps);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetchKanbanData();
        if (Array.isArray(data)) {
            setTickets(data);
        } else if (data && Array.isArray(data.tickets)) {
            setTickets(data.tickets);
            setUsers(data.users);
        } else {
            console.error('Unexpected data format:', data);
        }
    };

    const groupedTickets = useMemo(() => groupAndSortTickets(tickets, grouping, sortOption), [tickets, grouping, sortOption]);

    return (
        <div className="container">
            <div className="header">
                <Dropdown handleGroupingChange={handleGroupingChange} handleOrderingChange={handleOrderingChange} grouping={grouping} sortOption={sortOption} />
            </div>
            <div className="board">
                {Object.keys(groupedTickets).map(key => (
                    <div className="column" key={key}>
                        <RenderColumnHeader grouping={grouping} users={users} groupKey={key} groupedTickets={groupedTickets} />
                        <div className="ticketList">
                            <RenderTickets tickets={groupedTickets[key]} users={users} grouping={grouping} />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default KanbanBoard;
