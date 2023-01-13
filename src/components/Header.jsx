import styles from '../styles/Home.module.css';
import { BiUserCircle } from 'react-icons/bi';

export default function Header({ pageName }) {
	return (
		<div className={styles.heading}>
			<div>
				<h2 className='text-gradient'>Venoma Products</h2>
				<h2 className='text-gradient'>{pageName}</h2>
				<div className={styles.account}>
					<BiUserCircle size={30} />
				</div>
			</div>
		</div>
	);
}
