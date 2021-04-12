import React from 'react';

function UserList() {

    let users = ["Raj","Kunal","Dhanusri","Himani"]
    const singleUser = (user) => {
        return (
            <li className="list-group-item">{user}</li>
        );
    }

    return (
        <div className="detailed-view-user-list">
            <ul className="list-group">
                <li className="list-group-item list-group-item-success">Interested Users </li>
                {users.map(user => singleUser(user))}
            </ul>
        </div>

    )
}

export default UserList;