// import Link from 'next/link'
import { Switcher } from '../../index';

import styles from './styles.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<nav className={styles.footernav}>
				<ul className={styles.footernavList}>
					<li className={styles.switchItem}>
						<Switcher />
					</li>
					<li>mentions légales</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
