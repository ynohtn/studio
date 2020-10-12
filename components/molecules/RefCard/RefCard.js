import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const RefCard = ({ name, track, cover }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.055, zIndex: 666 }}
			whileTap={{ scale: 0.95, zIndex: -666, transition: { duration: 0.25 } }}
		>
			<div className={styles.refcard}>
				<figure>
					<img src={cover.url} alt={cover.alt} />
				</figure>
				<div className={styles.refcardcontent}>
					<h3>{name}</h3>
					<p>{track}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default RefCard;
