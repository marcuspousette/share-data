import { useEffect, useState } from 'react';
import './User.css';
import Address from '../Address/Address.js';
import Company from '../Company/Company.js';

const User = ({ email, address, company, name, phone, setSelectedUsers }) => {
	const [selected, setSelected] = useState(false);

	const select = (event) => {
		setSelected(!selected);
		setSelectedUsers({ email, name, phone });
	};

	return (
		<div className={`User ${selected ? 'User--slected' : ''}`} onClick={select}>
			<div className="User__data">
				<div className="User__name">{name}</div>
				<div className="User__email__wrapper">
					<a className="User__email" href={`mailto:${email}`}>
						{email}
					</a>
				</div>
				<div className="User__phone">{phone}</div>
			</div>
			<Address {...address} selected={selected} />
			<Company {...company} selected={selected} />
		</div>
	);
};

export default User;
