import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../../api';
import Container from '../../components/container';

const Category = () => {
	const [category, setCategory] = useState([])
	const { name } = useParams();

	useEffect(() => {
		getFilteredCategory(name).then(({ meals }) => setCategory(meals));
	}, [name])

	console.log(category)

	return (
		<div className='categories'>
			<Container>
				<div className='categories__inner'>
					{
						category.map(({ idMeal, strMealThumb, strMeal }) => (
							<div className='categories__item' key={idMeal}>
								<div className='categories__item-picture'>
									<img className='categories__item-img' src={strMealThumb} alt={strMeal} />
								</div>
								<h3 className='categories__item-title'>{strMeal}</h3>
								<Link className='categories__item-button' to={`/meal/${idMeal}`}>Watch recipe</Link>
							</div>
						))
					}
				</div>
			</Container>
		</div>
	)
}

export default Category;