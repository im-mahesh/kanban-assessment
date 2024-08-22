import React from "react";
import { RenderTicketProps } from "../../KanbanBoardProps";
import { getPriorityImage, userDetails } from "../../utils/functions";
import "./RenderTickets.css";

const RenderTickets = ({ tickets, users, grouping }: RenderTicketProps) => {
    return <React.Fragment>
        {tickets.map(ticket => {
            const user = userDetails(users, ticket.userId);
            return (
                <div className="card" key={ticket.id}>
                    <div className="cardHeader">
                        <div className="cardId">{ticket.id}</div>
                        {grouping !== "userId" && user && (
                            <div className="photoWrapper">
                                <img src="/assets/person.svg" className="photo" alt={user.name} />
                                <div className={`statusIndicator ${user.available ? 'green' : 'red'}`}></div>
                            </div>
                        )}
                    </div>
                    <div className="cardContent">
                        {grouping !== "status" && (
                            <>
                                {ticket.status === "Todo" && (
                                    <img src="/assets/To-do.svg" className="cardImage" alt="Todo" />
                                )}
                                {ticket.status === "Backlog" && (
                                    <img src="/assets/Backlog.svg" className="cardImage" alt="Backlog" />
                                )}
                                {ticket.status === "In progress" && (
                                    <img src="/assets/in-progress.svg" className="cardImage" alt="In progress" />
                                )}
                            </>
                        )}
                        <h3 className="cardTitle">{ticket.title}</h3>
                    </div>
                    <div className="cardFooter">
                        {ticket.priority !== undefined && grouping !== "priority" && (
                            <div className="footerItem">
                                <img
                                    src={`/assets/${getPriorityImage(ticket.priority, "footer")}`}
                                    className="footerIcon"
                                    alt={`Priority ${ticket.priority}`}
                                />
                            </div>
                        )}
                        {ticket.tag && (
                            <div className="footerItemWithText">
                                <div className="GeyIndicator"></div>
                                <span className="footerText">{ticket.tag.join(', ')}</span>
                            </div>
                        )}
                    </div>
                </div>
            )
        })}
    </React.Fragment>
};

export default RenderTickets;