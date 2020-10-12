import { Client } from '../../lib/prismic-configuration';
import { getReferences } from '../../lib/api';
import { useContext } from 'react';
import ThemeContext from '../../utils/context/themeContext';
import styles from '../../styles/References.module.scss';
import { useRouter } from 'next/router';
import { Layout, SliceZone, Seo } from '../../components';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Reference({ r, menu, slices, doc }) {
	const router = useRouter();
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		bodyDark: darkMode && styles.bodyDark,
		bodyLight: !darkMode && styles.bodyLight
	});
	// console.log(r)
	// console.log(slices)

	return (
		<Layout menu={menu}>
			<Seo info={doc} path={router.asPath} />
			<section className="scrollctn">
				<section className={`${styles.refhead} ${className}`}>
					<figure>
						<img src={r.cover.url} alt={r.cover.alt} />
					</figure>
					<div className={styles.refinfo}>
						<h1>{RichText.asText(r.artist_name)}</h1>
						<h2>{RichText.asText(r.track_name)}</h2>
					</div>
				</section>
				<section className={className}>
					<SliceZone sliceZone={slices} />
				</section>
			</section>
		</Layout>
	);
}

export async function getStaticPaths() {
	const response = await getReferences();
	const paths = response.results.map(({ uid }) => ({
		params: {
			uid
		}
	}));
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({
	params,
	preview = null,
	previewData = {}
}) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getByUID('reference', params.uid, ref ? { ref } : null)) ||
		{};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

	const r = doc.data;
	const slices = doc.data.body;

	return {
		props: {
			r,
			menu,
			slices,
			doc
		},
		revalidate: 1
	};
}
