import React from 'react'
import styles from '../styles/Pagination.module.sass'

const Pagination = ({nextPage, prevPage, currentPage, beersPerPage, beersOnPage}) => {

	return (
		<div>
			<ul className={styles.pagination}>
				<li className='pag__item'>
					<button disabled={currentPage == 1 ? true : false}  onClick={() =>prevPage()}>
						Previos
					</button>
					<button disabled={beersPerPage > beersOnPage ? true : false} onClick={() =>nextPage()}>
						Next
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Pagination;