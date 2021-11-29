import './Company.css';

const Company = ({ name, catchPhrase }) => {
	return (
		<div className="Company">
			<div className="Company__name">{name}</div>
			<div className="Company__catch-phrase">{catchPhrase}</div>
		</div>
	);
};

export default Company;
