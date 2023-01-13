import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';

const ProductContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px;
	margin-top: 120px;
`;

const ProductImageContainer = styled.div`
	width: 30%;
	margin-right: 20px;
`;

const ProductDetailContainer = styled.div`
	width: 70%;
`;

const ProductImage = styled.img`
	width: 100%;
`;

const ProductTitle = styled.h1`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 20px;
`;

const ProductInfo = styled.p`
	font-size: 18px;
	margin-bottom: 20px;
`;

const ProductList = styled.ul`
	list-style: none;
	padding: 0;
	font-size: 18px;
	margin-bottom: 20px;
`;

const IngredientList = styled.ul`
	list-style: none;
	padding: 0;
	font-size: 18px;
`;

const ProductListItem = styled.li`
	margin-bottom: 10px;
`;

const IngredientItem = styled.li`
	margin-bottom: 10px;
	font-size: 13px;
	background-color: #3433;
	padding: 5px;
	margin-right: 10px;
	-moz-border-radius-topright: 5px;
	-moz-border-radius-bottomright: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	float: left;
`;

const SpanItem = styled.span`
	margin-bottom: 10px;
	font-size: 13px;
	background-color: #3433;
	padding: 5px;
	margin-right: 10px;
	-moz-border-radius-topright: 5px;
	-moz-border-radius-bottomright: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`;

const BoldH3 = styled.h3`
	font-weight: bold;
	font-size: 16px;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Button = styled.button`
	background-color: blue;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	float: center;
	text-align: center;
	text-decoration: none;
	&:hover {
		background-color: darkblue;
	}
`;

const CenteredDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProductDetailsPage = () => {
	let { product_id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	console.log('KIGALI', product_id);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://neutrogena-1.themissionboy.repl.co/products/${product_id}`
				);
				setProduct(response.data);
				setLoading(false);
			} catch (err) {
				setError(true);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>An error occurred</p>;
	}

	console.log('sjsjs', product);
	return (
		<>
			<Header pageName={'Product details'} />
			<ProductContainer>
				<ProductImageContainer>
					<ProductImage src={product.main_image} alt={product.name} />
				</ProductImageContainer>
				<ProductDetailContainer>
					<ProductTitle>{product.name}</ProductTitle>
					<ProductInfo>
						Brand: <SpanItem>{product.brand_id}</SpanItem>
					</ProductInfo>
					<ProductInfo>
						Category: <SpanItem>{product.category_id}</SpanItem>
					</ProductInfo>
					{/* <ProductInfo>Product URL: {product.product_url}</ProductInfo> */}
					<BoldH3>Description</BoldH3>
					<ProductInfo>{product.description.items.join(' ')}</ProductInfo>
					<BoldH3>Active Ingredients</BoldH3>

					<ProductList>
						{product.active_ingredients.items.map((ingredient, index) => (
							<ProductListItem key={index}>{ingredient}</ProductListItem>
						))}
					</ProductList>
					<BoldH3>Benefits</BoldH3>

					<ProductList>
						{product.benefits.items.map((benefit, index) => (
							<ProductListItem key={index}>{benefit}</ProductListItem>
						))}
					</ProductList>
					<BoldH3>All Ingredients</BoldH3>

					<IngredientList>
						{product.all_ingredients.map((ingredient, index) => (
							<>
								<IngredientItem key={index}>{ingredient}</IngredientItem>
							</>
						))}
					</IngredientList>
				</ProductDetailContainer>
			</ProductContainer>
			<CenteredDiv>
				<Link to='/'>
					<Button>Go Home</Button>
				</Link>
			</CenteredDiv>
		</>
	);
};

export default ProductDetailsPage;
