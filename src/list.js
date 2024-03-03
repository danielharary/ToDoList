import React from "react";
import ListItem from "./list-item";

const List = ({ users }) => {
    return (
        <div>
            {users.map((user, idx) => (
                <ListItem user={user} key={idx} />
            ))}
        </div>
    );
};

export default List;
