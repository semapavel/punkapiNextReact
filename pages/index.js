import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';

import styles from '../styles/index.module.sass'

const Index = ({beers}) => {

	const [searchValue, setSearchValue] = useState('')
	console.log(searchValue)
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
			<h1>Главная страница</h1>
			<input value = {searchValue} onChange = {(e) => setSearchValue(e.target.value)} placeholder='Введите название пива' type="text" />
			<div className={styles.beers}>
				{beers.filter((beer) => beer.name.toLowerCase().includes(searchValue.toLowerCase()))
					.map(beer => 
						<Link href={`/beers/${beer.id}`}>
							<div key={beer.id} className={styles.beer}>
							<img src={beer.image_url} alt="Пиво" />
							<div>
								<h2 className={styles.name}>{beer.name}</h2>
								<div className={styles.description}>
									{beer.description.length > 140 ? beer.description.slice(0, 139)+' ...':beer.description}</div>
							</div>
							</div>
						</Link>
					)}
			</div>
		</div>
		</div>

	);
};

export default Index;

export async function getServerSideProps(context) {
	const response = await fetch(`https://api.punkapi.com/v2/beers`)
	const beers = await response.json()
  return {
    props: {beers,}, // will be passed to the page component as props
  }
}