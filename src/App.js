import React, { Component } from 'react';
import './App.css';
import Person from './Person.js';
import AddForm from './AddForm';

class App extends Component {
	App() {
		console.log('App.js Consturctor');
  }
  
  componentDidMount(){
		console.log('did mount');
	}

componentDidUpdate(){
  console.log("Updated");
}

	

	state = {
		friends: [
			{ name: 'Sujan', address: 'Chabahil', contact: 9813234434 },
			{ name: 'Suraj', address: 'Kalopul', contact: 9841232232 },
			{ name: 'Kundan', address: 'Gokarna', contact: 9860023400 },
			{ name: 'Mack', address: 'Mitrapark', contact: 9813621921 }
		]
	};

	save = (friend) => {
		this.setState({
			friends: this.state.friends.concat([ friend ])
		});
	};

	render() {
		console.log('App.js render');
		return (
			<div className="container col-md-4  mt-5">
				<div className="card bg-danger ">
					<div className="card-header bg-danger">
						<h3 className="text-center text-white">{this.props.message}</h3>
					</div>
					<div className="card-body bg-light">
						<h4>Input your friends information :</h4>
						<AddForm onSave={this.save} />
						<h4>List of your friends info.: </h4>
						{this.state.friends.map((friend) => {
							return <Person name={friend.name} add={friend.address} con={friend.contact} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
