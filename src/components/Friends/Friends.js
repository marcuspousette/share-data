import { useEffect, useState } from 'react';
import './Friends.css';
import User from '../User/User.js';
import SideBar from '../SideBar/SideBar.js';

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

	const addUser = (user) => {
		setSelectedUsers((oldData) => {
			// Check if the old array of users includes the new user we are trying to add
			const includes = oldData.some((element) => element.name === user.name);
			if (includes) {
				const filteredArray = oldData.filter((element) => element.name !== user.name);
				return filteredArray;
			} else {
				return [...oldData, user];
			}
		});
	};

	const renderUsers = () => {
		if (users === null) return <h1>Loading...</h1>;
		return users.map((user) => {
			return <User key={user.id} {...user} setSelectedUsers={addUser} />;
		});
	};

	return (
		<div id="Friends">
			<SideBar users={selectedUsers} />
			<div>{renderUsers()}</div>
		</div>
	);
};

export default Friends;
