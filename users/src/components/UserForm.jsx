import React, {useState} from 'react';

const UserForm = ({onUserAdd}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!name || !email) return;

        const user = {
            name,
            email
        }
        onUserAdd(user)
        setName('')
        setEmail('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Enter Name</label>
                <input type="text" name="name" id='name' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type='submit'>Add user</button>
        </form>
    );
};

export default UserForm;