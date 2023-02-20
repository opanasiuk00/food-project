import React from 'react'
import Container from '../container';
import CustomLink from '../customLink'

const Header = React.memo(() => {

	return (
		<header className='header'>
			<Container>
				<div className='header__inner'>
					<div className='header__logo'>
						<h3 className='header__logo-text'>Food project</h3>
					</div>
					<nav className='header__menu'>
						<ul className='header__list'>
							<li className='header__item'>
								<CustomLink path='/'>Home</CustomLink>
							</li>
							<li>
								<CustomLink path='/about'>About</CustomLink>
							</li>
							<li>
								<CustomLink path='/contact'>Contact</CustomLink>
							</li>
							<li>
								<CustomLink path='/movie'>Movie</CustomLink>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	)
});

export default Header