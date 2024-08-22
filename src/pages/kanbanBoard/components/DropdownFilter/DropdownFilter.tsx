import { useEffect, useRef, useState } from "react";
import "./DropdownFilter.css";

const Dropdown = ({ handleGroupingChange, handleOrderingChange, grouping, sortOption }: any) => {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                <img
                    src="/assets/Display.svg"
                    className="displayImg"
                    alt="DisplayImage"
                />
                <span className="displayText">Display by</span>
                <img src="/assets/down.svg" className="downImg" alt="DownImage" />
            </button>
            {dropdownOpen && (
                <div className="dropdown-menu">
                    <div className="option">
                        <label htmlFor="grouping">Grouping</label>
                        <select onChange={handleGroupingChange} value={grouping}>
                            <option value="userId">User</option>
                            <option value="priority">Priority</option>
                            <option value="status">Status</option>
                        </select>
                    </div>
                    <div className="option">
                        <label htmlFor="ordering">Ordering</label>
                        <select onChange={handleOrderingChange} value={sortOption}>
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;