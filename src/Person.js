import React, { Component } from 'react';

const Person = (props) => (
	<div className="mb-2">
		<span className='mr-1 p-1 border border-success rounded bg-success text-light'>Name : {props.name}</span>
		<span className=' mr-1 p-1 border border-primary rounded bg-primary text-white'>Address : {props.add}</span>
		<span className=" p-1 border border-danger rounded bg-danger text-light">Mobile No: {props.con}</span>
	</div>
);

export default Person;
