import './Address.css';

const Address = ({ city, street }) => {
	return (
		<div className="Address">
			<div className="Address__city">{city}</div>
			<div className="Address__street">{street}</div>
		</div>
	);
};

export default Address;
