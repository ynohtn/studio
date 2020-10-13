import styles from './styles.module.scss';

const Background = ({ url }) => {
	return (
		<figure className={styles.staticBg}>
			<img src={url} alt="background" />
		</figure>
	);
};

export default Background;
