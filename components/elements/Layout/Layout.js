import { memo } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const Layout = memo(({ children }) => {
	return (
		<motion.div
			initial={{
				opacity: 0
				// x: 100,
				// y: -50
			}}
			animate={{
				opacity: 1
				// x: 0,
				// y: 0
			}}
			exit={{
				opacity: 0
				// x: -100,
				// y: -50
			}}
			transition={{
				duration: 0.5,
				ease: 'easeOut'
			}}
			className={styles.layout}
		>
			<div className={styles.layoutSizer}>{children}</div>
		</motion.div>
	);
});

export default Layout;
