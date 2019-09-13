import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ChartNew from '../charts/ChartNew.js'

const Users = (props) => {

	console.log('Users', props)
	console.log('props.users : ', props.users)

	const handleInfoClick = (event) => {

	}

	const User = ({ user }) => {
		return (
			<React.Fragment>
				{user.customer_account_id} {user.Product}
			</React.Fragment>
		)
	}

	const users = props.users.map((user, index) => {
		//console.log('user : ', user);
		return (
			<li key={index}>
				<User user={user} />
			</li>
		)
	})

	return (
		users
	)
}

// Setup Brand - so selectable brand
const GetBrand = (props) => {
	const brand = props.brand || 'Very'
	return brand;

}

// Setup filter
const SetFilter = (props) => {
	const filter = props.filter;

	return filter;
}

const GetData = () => {
	const [users, setUsers] = useState([])
	//const []


	let resData;
	let filteredObj;

	const promise = axios.get('delivery.json')

	const hook = () => {
		axios
			.get('delivery.json')
			.then(resp => {
				const filtered = resp.data.filter(user => user.D1.includes('Extremely dissatisfied') && user.Brand.includes('Very'));
				setUsers(filtered);
			})
	}

	console.log('hook : ', hook);
	useEffect(hook, []);

	/*axios.get('delivery.json').then(resp => {
		console.log(resp.data);
		const filtered = resp.data.filter(user => user.D1.includes('Extremely dissatisfied'));
		console.log('filtered : ', filtered);
		filteredObj = JSON.parse(filtered);
	});*/

	const handleBtnClick = (event) => {
		//setNewName(event.target.value)

	}


	return (
		<div className="jsonResponseData">
			<input className="btn" type="button" value="Click Me"></input>
			<input
				value="Btn"
				onChange={handleBtnClick}
			/>

			<Users
				users={users}
				setUsers={setUsers}
			/>
		</div>
	);
}


export default GetData;
