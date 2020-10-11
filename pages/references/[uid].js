import { Client } from '../../lib/prismic-configuration';
import { getReferences } from '../../lib/api';
import { useContext } from 'react';
import ThemeContext from '../../utils/context/themeContext';
import styles from '../../styles/References.module.scss';
import Head from 'next/head';
import { Layout, SliceZone, Backlink } from '../../components';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Reference({ r, menu, slices, uid }) {
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		bodyDark: darkMode && styles.bodyDark,
		bodyLight: !darkMode && styles.bodyLight
	});
	// console.log(r)
	// console.log(uid)
	// console.log(slices)

	return (
		<Layout menu={menu}>
			<Head>
				{/*Primary Meta Tags*/}
				<title>{`${RichText.asText(r.artist_name)} - ${RichText.asText(
					r.track_name
				)}`}</title>
				<meta
					name="title"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} on Studio`}
				/>
				<meta
					name="description"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} engineered in Studio`}
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="article" />
				<meta
					property="og:url"
					content={`https://studio-seven.vercel.app/references/${uid}`}
				/>
				<meta
					property="og:title"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} on Studio`}
				/>
				<meta
					property="og:description"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} engineered in Studio`}
				/>
				<meta property="og:image" content={r.cover.url} />

				{/* Twitter */}
				<meta property="twitter:card" content={r.cover.url} />
				<meta
					property="twitter:url"
					content={`https://studio-seven.vercel.app/references/${uid}`}
				/>
				<meta
					property="twitter:title"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} on Studio`}
				/>
				<meta
					property="twitter:description"
					content={`Discover ${RichText.asText(
						r.track_name
					)} by ${RichText.asText(r.artist_name)} engineered in Studio`}
				/>
				<meta property="twitter:image" content={r.cover.url} />
			</Head>

			<section className="scrollctn">
				<section className={`${styles.refhead} ${className}`}>
					<figure>
						<img src={r.cover.url} alt={r.cover.alt} />
					</figure>
					<div className={styles.refinfo}>
						<h1>{RichText.asText(r.artist_name)}</h1>
						<h2>{RichText.asText(r.track_name)}</h2>
					</div>
					{/* <Backlink text='References' href='/references' /> */}
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
	const uid = params.uid;

	return {
		props: {
			r,
			menu,
			slices,
			uid
		},
		revalidate: 1
	};
}
