import React from 'react';

function UserList({userList}) {

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
                {userList.map(user => singleUser(user.name))}
            </ul>
        </div>

    )
}

export default UserList;