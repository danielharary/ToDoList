import React from "react";
import "./list-item.css";

const ListItem = ({ user }) => {
    const getEyeColor = () => {
        if (user.eyeColor === "green") {
            return "🟢";
        }
        if (user.eyeColor === "blue") {
            return "🔵";
        }
        if (user.eyeColor === "black") {
            return "⚫";
        }
        if (user.eyeColor === "brown") {
            return "🟤";
        }
    };

    return (
        <div className="user-card">
            <div className="user-emoji">
                {(() => {
                    if (user.gender === "male") {
                        return "👨";
                    } else {
                        return "👩";
                    }
                })()}
            </div>

            <h3>User:{user.name}</h3>
            <div>Eye Color:{getEyeColor()}</div>
        </div>
    );
};

export default ListItem;
