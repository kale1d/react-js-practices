import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

const Location = ({ city }) => {
	//destructuring 
	//const Location = (props)
	return (
		<div className="locationCont">
			<h1>{city}</h1>
		</div>
	)
};

Location.propTypes = {
	city: PropTypes.string.isRequired,
}
export default Location;