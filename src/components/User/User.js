import { useEffect, useState } from 'react';
import './User.css';
import Address from '../Address/Address.js';
import Company from '../Company/Company.js';

const User = ({ email, address, company, name, phone, setSelectedUsers }) => {
	const add = (event) => {
		setSelectedUsers(name);
	};

	return (
		<div className="User" onClick={add}>
			<div className="User__data">
				<div className="User__name">{name}</div>
				<div className="User__email__wrapper">
					<a className="User__email" href={`mailto:${email}`}>
						{email}
					</a>
				</div>
				<div className="User__phone">{phone}</div>
			</div>
			<Address {...address} />
			<Company {...company} />
		</div>
	);
};

export default User;
