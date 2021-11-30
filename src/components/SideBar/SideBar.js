import './SideBar.css';
import UserName from '../UserName/UserName.js';

const SideBar = ({ users }) => {
	const displayUsers = () => {
		if (users.length === 0) return;
		return users.map((user, i) => <UserName name={user.name} key={i} />);
	};

	return <div id="SideBar">{displayUsers()}</div>;
};

export default SideBar;
