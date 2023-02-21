import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCatecories } from '../../api'
import Container from '../../components/container'

const Home = () => {
	const [categories, setCategories] = useState([])


	useEffect(() => {
		getCatecories().then(({ categories }) => setCategories(categories));
	}, [])

	return (
		<div className='categories'>
			<Container>
				<div className='categories__inner'>
					{
						categories.map(item => (
							<div className='categories__item' key={item.idCategory}>
								<div className='categories__item-picture'>
									<img className='categories__item-img' src={item.strCategoryThumb} alt={item.strCategory} />
								</div>
								<h3 className='categories__item-title'>{item.strCategory}</h3>
								<p className='categories__item-description'>{item.strCategoryDescription.slice(0, 110)}...</p>
								<Link className='categories__item-button' to={`/category/${item.strCategory}`}>Watch category</Link>
							</div>
						))
					}
				</div>
			</Container>
		</div>
	)
}

export default Home;