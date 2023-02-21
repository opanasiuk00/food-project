import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../api';

const Meal = () => {
	const [meal, setMeal] = useState({});
	const { name } = useParams();
	console.log(meal);

	useEffect(() => {
		getMealById(name).then(({ meals }) => setMeal(meals[0]))
	}, [name])

	return (
		<div>
			<ol>
				{
					meal.strInstructions && meal.strInstructions.split('\r\n').map((item, i) => (<li key={i}>{item}</li>))
				}
			</ol>
		</div>
	)
}

export default Meal;