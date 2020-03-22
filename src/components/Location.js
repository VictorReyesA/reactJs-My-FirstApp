import React from 'react';

const Location = (props) => {
	//DEstructuring
	//Cuando tenemos una poropiadad que queremos asignar a una variable con el mismo nombre se utiliza la tecicna Deconttructing
	//console.log(props.city)
	//debugger;
	const {city} = props; // === const city = props.city <-- la variable se llama igual a su propiedad, asi que se puede deconstruir.
		return(

		<div>
			<h2>{city}</h2>
			</div>);
	}
export default Location;