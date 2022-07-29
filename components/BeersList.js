import Link from 'next/link';
import React from 'react';

import styles from '../styles/index.module.sass'


const BeersList = ({beers, searchValue}) => {
	return (
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
	);
};

export default BeersList;