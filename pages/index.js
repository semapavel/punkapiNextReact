import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BeersList from '../components/BeersList';
import Pagination from '../components/Pagination';

import styles from '../styles/index.module.sass'

const Index = () => {
	
	const [beers, setBeers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const[beersPerPage] = useState(9)

	const nextPage = () => {
		setCurrentPage(currentPage + 1)
	}
	
	const prevPage = () => {
		if (currentPage == 1) return
		setCurrentPage(currentPage - 1)
	}

	useEffect(() => {

		const getBeers = async() => {
			const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${beersPerPage}`)
			setBeers(response.data)

		} 
		getBeers()
	}, [currentPage])

	const [searchValue, setSearchValue] = useState('')
	console.log(searchValue)
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				
			<h1>Главная страница</h1>
			<input value = {searchValue} onChange = {(e) => setSearchValue(e.target.value)} placeholder='Введите название пива' type="text" />
			<Pagination
				nextPage={nextPage}
				prevPage={prevPage}
				currentPage={currentPage}
				beersPerPage={beersPerPage}
				beersOnPage={beers.length}
			/>
			<BeersList
				beers={beers}
				searchValue={searchValue}
			/>
			<Pagination
				nextPage={nextPage}
				prevPage={prevPage}
				currentPage={currentPage}
				beersPerPage={beersPerPage}
				beersOnPage={beers.length}
			/>
		</div>
		</div>

	);
};

export default Index;

// export async function getServerSideProps(context) {
// 	const response = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=6`)
// 	const beers = await response.json()
//   return {
//     props: {beers,}, // will be passed to the page component as props
//   }
// }