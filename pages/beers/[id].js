import Link from 'next/link';
import styles from '../../styles/Beer.module.sass'


const Beer = ({beer}) => {
	return(
		<>
		<div className={styles.navigation}>
		<Link href={`/`}>
			<h2>На главную</h2>
		</Link></div>
		<div className={styles.container}>
			{beer.map(item =>
				<div className={styles.beer__row}>
					<img src={item.image_url} alt="beer" />
					<div className={styles.content}>
						<h1>{item.name}</h1>
						<h3>{item.tagline}</h3>
						<p>{item.description}</p>
						<p>alc: {item.abv}</p>
						<ul>
							{item.food_pairing.map(el =>
								<li>{el}</li>)}
						</ul>
					</div>
				</div> 
			
				
				)}
		</div>
		</>
	)

};
export default Beer;


export async function getServerSideProps({params}) {
	const response = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
	const beer = await response.json()
  return {
    props: {beer}, // will be passed to the page component as props
	}
}