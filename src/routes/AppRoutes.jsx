import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetailsPage from '../pages/ProductDetails';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:product_id' element={<ProductDetailsPage />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
