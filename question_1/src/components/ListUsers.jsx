import React, {useState} from 'react';

const ListUsers = ({users = []}) => {

    const sortedUsers = users.sort((a,b)=>
        a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
    );

    const userCnt = sortedUsers.length;
    return (
        <div>
            <h2>List Users </h2>
            <div>
                <div className='user-count'>Users : {userCnt}</div>
                {
                    userCnt > 0 && (
                        <div>
                            <ul className="user-list">
                                {sortedUsers.map((user, index) => (
                                    <li key={index}>
                                        {user.firstName} {user.lastName}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default ListUsers;