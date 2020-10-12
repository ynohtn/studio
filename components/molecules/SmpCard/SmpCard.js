import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const SmpCard = ({ name, cover }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.055, zIndex: 666 }}
			whileTap={{ scale: 0.95, zIndex: -666, transition: { duration: 0.25 } }}
		>
			<div className={styles.smpcard}>
				<figure>
					<img src={cover.url} alt={cover.alt} />
				</figure>
				<div className={styles.smpcardcontent}>
					<h3>{name}</h3>
				</div>
			</div>
		</motion.div>
	);
};

export default SmpCard;
