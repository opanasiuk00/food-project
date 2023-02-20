import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const MainLayout = () => {
	console.log('11')
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout;