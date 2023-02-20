import React from 'react'
import Container from '../container'

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<div className='footer__inner'>
					<div className='footer__logo'>
						<h3 className='footer__logo-text'>Food project</h3>
					</div>
					<nav className='footer__menu'>
						<ul className='footer__list'>
							<li className='footer__item'>
								<a className='footer__link' href='!#' >Repo</a>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</footer>
	)
}

export default Footer