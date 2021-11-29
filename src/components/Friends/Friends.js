import { useEffect, useState } from 'react';
import './Friends.css';
import User from '../User/User.js';

const Friends = (props) => {
	const [users, setUsers] = useState(null);
	const [selectedUsers, setSelectedUsers] = useState([]);

	const getUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	};

	useEffect(getUsers, []);
	useEffect(() => {
		console.log(selectedUsers);
	}, [selectedUsers]);

	const renderUsers = () => {
		if (users === null) return <h1>Loading...</h1>;
		return users.map((user) => {
			return <User key={user.id} {...user} setSelectedUsers={setSelectedUsers} />;
		});
	};

	return (
		<div id="Friends">
			{renderUsers()}
			<button onClick={() => setSelectedUsers((oldArray) => [...oldArray, 1])}>Add</button>
		</div>
	);
};

export default Friends;
