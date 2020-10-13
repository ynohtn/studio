import { Header, Footer, Background } from '../../index';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Layout = ({ children, type }) => {
	return (
		<motion.div
			key={`layout-${type}`}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{
				opacity: 0,
				x: 200,
				y: -100
			}}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={styles.layout}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
