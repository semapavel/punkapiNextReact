import React from 'react'

const Pagination = ({beerPerPage, totalBeers}) => {
	const pageNumbers =[]

	for (let i = 1; i<= Math.ceil(totalBeers / beerPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<ul className='pagination'>
				{
					pageNumbers.map(number => {
						<li key={number} className='pag__item'>
							<span className='pag__link'>
								{number}
							</span>
						</li>
					})
				}
			</ul>
		</div>
	)
}

export default Pagination;