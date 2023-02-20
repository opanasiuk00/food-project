import React from 'react';
import { Link, useMatch } from 'react-router-dom';


const CustomLink = ({ path, children }) => {
	const match = useMatch(path);

	return (
		<Link to={path} className={match ? 'header__link header__link--active' : 'header__link'}>{children}</Link>
	)
}

export default CustomLink;