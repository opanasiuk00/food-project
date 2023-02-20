import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style/style.scss';
import Home from './pages/home';
import MainLayout from './layout';

// const MainLayout = lazy(() => import('./layout'));
const Movie = lazy(() => import('./pages/movie'));
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
					path='/movie'
					element={
						<Suspense fallback={<div>spiner</div>}>
							<Movie />
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
