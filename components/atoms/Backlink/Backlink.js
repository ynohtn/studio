import { useContext } from 'react';
import ThemeContext from '../../../utils/context/themeContext';
import { default as NextLink } from 'next/link';
import styles from './styles.module.scss';

const Backlink = ({ text, href }) => {
	const { dispatchPageType } = useContext(ThemeContext);

	return (
		<h2 className={styles.backlink}>
			<NextLink href={href}>
				<a onClick={() => dispatchPageType({ type: href.substring(1) })}>
					{text}
				</a>
			</NextLink>
		</h2>
	);
};

export default Backlink;
