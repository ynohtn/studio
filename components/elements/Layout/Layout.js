import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Layout = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={styles.layout}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
