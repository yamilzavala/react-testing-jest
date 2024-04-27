import React from 'react';

const UserList = ({users}) => {
    const usersRendered = users?.map((user,idx) => {
        const {name,email} = user;
        return (
            <tr key={idx}>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        )
    })
    return (
        <div className='center-element'>
            <table >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody data-testid='users'>
                {usersRendered}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;