import { Client } from '../../lib/prismic-configuration';
import { useContext } from 'react';
import ThemeContext from '../../utils/context/themeContext';
import styles from '../../styles/About.module.scss';
import { useRouter } from 'next/router';
import { Layout, SliceZone, Seo } from '../../components';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function About({ doc, slices, menu }) {
	const router = useRouter();
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		bodyDark: darkMode && styles.bodyDark,
		bodyLight: !darkMode && styles.bodyLight
	});
	// console.log(doc)
	// console.log(slices)

	return (
		<Layout menu={menu}>
			<Seo info={doc} path={router.pathname} />

			<h1 className={styles.abouttitle}>{RichText.asText(doc.data.title)}</h1>

			<section className={`${styles.aboutbody} ${className}`}>
				<SliceZone sliceZone={slices} />
			</section>
		</Layout>
	);
}

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;

	const client = Client();

	const doc = (await client.getSingle('about', ref ? { ref } : null)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};
	const slices = doc.data.body;

	return {
		props: {
			doc,
			menu,
			slices,
			preview
		},
		revalidate: 1
	};
}
