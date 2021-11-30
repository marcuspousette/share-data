import './Company.css';

const Company = ({ name, catchPhrase, selected }) => {
	return (
		<div className={`Company ${selected && 'Company--selected'}`}>
			<div className="Company__name">{name}</div>
			<div className="Company__catch-phrase">{catchPhrase}</div>
		</div>
	);
};

export default Company;
