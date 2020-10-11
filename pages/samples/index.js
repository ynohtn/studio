import { Client } from '../../lib/prismic-configuration';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { getSamplePackData } from '../../lib/api';
import styles from '../../styles/Samples.module.scss';

import Head from 'next/head';
import { default as NextLink } from 'next/link';
import { Layout, SmpCard, Backlink } from '../../components';
import { RichText } from 'prismic-reactjs';

export default function Samples({ doc, items, menu }) {
	// console.log(doc)
	// console.log(items)

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
				<title>Samples</title>
				<meta name="title" content="Samples from Studio" />
				<meta
					name="description"
					content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://studio-seven.vercel.app/samples"
				/>
				<meta property="og:title" content="Samples from Studio" />
				<meta
					property="og:description"
					content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"
				/>
				<meta property="og:image" content="/meta-cover.jpg" />

				{/* Twitter */}
				<meta property="twitter:card" content="/meta-cover.jpg" />
				<meta
					property="twitter:url"
					content="https://studio-seven.vercel.app/samples"
				/>
				<meta property="twitter:title" content="Samples from Studio" />
				<meta
					property="twitter:description"
					content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"
				/>
				<meta property="twitter:image" content="/meta-cover.jpg" />
			</Head>

			<h1 className={styles.pad}>{RichText.asText(doc.data.samples_title)}</h1>

			<div className={styles.grid}>
				{items.map((item, i) => (
					<NextLink
						key={i}
						href={'samples/[uid]'}
						as={`samples/${item.sample.uid}`}
					>
						<a id={`griditem`}>
							<SmpCard
								name={RichText.asText(item.sample.pack_name)}
								cover={item.sample.pack_cover}
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

	const doc = (await client.getSingle('samples', ref ? { ref } : null)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

	const samples = doc.data.body;
	const index = samples.findIndex(
		(data) => data['slice_type'] === 'list_of_articles'
	);
	const items = await getSamplePackData(samples[index].items);

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

// export async function getStaticProps(context) {

//   const req = context.req
//   const res = await Client(req).getSingle('samples')

//   const samples = res.data.body
//   const index = samples.findIndex((data) => data['slice_type'] === 'list_of_articles')
//   // const items = samples[index].items
//   const items = await getSamplePackData(samples[index].items)

//   return {
//     props: {
//       res,
//       items
//     }
//   }
// }
