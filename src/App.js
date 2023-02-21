import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style/style.scss';
import Home from './pages/home';
import MainLayout from './layout';
import Meal from './pages/meal';

// const MainLayout = lazy(() => import('./layout'));
const Category = lazy(() => import('./pages/category'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const NotFound = lazy(() => import('./pages/notFound'));

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<MainLayout />
				}
			>
				<Route
					index
					element={
						<Home />
					}
				/>
				<Route
					path='/contact'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<Contact />
						</Suspense>
					}
				/>
				<Route
					path='/about'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path='/category/:name'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<Category />
						</Suspense>
					}
				/>
				<Route
					path='/Meal/:name'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<Meal />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<NotFound />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
