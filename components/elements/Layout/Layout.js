import { Header, Footer, Switch } from '../../index';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const Layout = ({ children, menu }) => {
	return (
		<main className={styles.index}>
			<Header menu={menu} />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
				className={styles.layout}
			>
				{children}
			</motion.div>

			<Footer />

			<figure className="static-bg">
				<img src="/wavesbg.svg" alt="background" />
			</figure>
		</main>
	);
};

export default Layout;
