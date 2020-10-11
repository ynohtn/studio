import { Client } from '../../lib/prismic-configuration';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { getReferenceData } from '../../lib/api';
import styles from '../../styles/References.module.scss';

import Head from 'next/head';
import { default as NextLink } from 'next/link';
import { Layout, RefCard } from '../../components';
import { RichText } from 'prismic-reactjs';

export default function References({ doc, items, menu }) {
	useEffect(() => {
		gsap.fromTo(
			'#griditem',
			{
				y: 100,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.1
			}
		);
	}, []);

	return (
		<Layout menu={menu}>
			<Head>
				{/*Primary Meta Tags*/}
				<title>References</title>
				<meta name="title" content="References from Studio" />
				<meta
					name="description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://studio-seven.vercel.app/references"
				/>
				<meta property="og:title" content="References from Studio" />
				<meta
					property="og:description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio"
				/>
				<meta property="og:image" content="/meta-cover.jpg" />

				{/* Twitter */}
				<meta property="twitter:card" content="/meta-cover.jpg" />
				<meta
					property="twitter:url"
					content="https://studio-seven.vercel.app/references"
				/>
				<meta property="twitter:title" content="References from Studio" />
				<meta
					property="twitter:description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio"
				/>
				<meta property="twitter:image" content="/meta-cover.jpg" />
			</Head>

			<h1 className={styles.pad}>{RichText.asText(doc.data.single_title)}</h1>

			<div className={styles.grid}>
				{items.map((item, i) => (
					<NextLink
						key={i}
						href={'references/[uid]'}
						as={`references/${item.reference.uid}`}
					>
						<a id={`griditem`}>
							<RefCard
								name={RichText.asText(item.reference.artist_name)}
								track={RichText.asText(item.reference.track_name)}
								cover={item.reference.cover}
							/>
						</a>
					</NextLink>
				))}
			</div>

			{/* <Backlink text='Home' href='/' /> */}
		</Layout>
	);
}

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getSingle('references', ref ? { ref } : null)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

	const references = doc.data.body;
	const index = references.findIndex(
		(data) => data['slice_type'] === 'list_of_articles'
	);
	const items = await getReferenceData(references[index].items);

	return {
		props: {
			doc,
			menu,
			items,
			preview
		},
		revalidate: 1
	};
}
