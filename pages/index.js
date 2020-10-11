import { Client } from '../lib/prismic-configuration';
import { RichText } from 'prismic-reactjs';
import TextLoop from 'react-text-loop';
import Head from 'next/head';
import { Layout } from '../components';
import styles from '../styles/Home.module.scss';

export default function Home({ doc, menu }) {
	// console.log(doc)
	// console.log(menu)

	return (
		<Layout menu={menu}>
			<Head>
				{/*Primary Meta Tags*/}
				<title>{RichText.asText(doc.data.site_name)}</title>
				<meta name="title" content="Studio" />
				<meta
					name="description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://studio-seven.vercel.app/" />
				<meta property="og:title" content="Studio" />
				<meta
					property="og:description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris"
				/>
				<meta property="og:image" content="/meta-cover.jpg" />

				{/* Twitter */}
				<meta property="twitter:card" content="/meta-cover.jpg" />
				<meta
					property="twitter:url"
					content="https://studio-seven.vercel.app/"
				/>
				<meta property="twitter:title" content="Studio" />
				<meta
					property="twitter:description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris"
				/>
				<meta property="twitter:image" content="/meta-cover.jpg" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.homectn}>
				<h1 className={styles.hometitle}>
					{RichText.asText(doc.data.site_name)}
				</h1>
				<h2 className={styles.homesubtitle}>
					<span className={styles.space}>We love</span>
					<TextLoop
						children={['producing', 'mixing', 'mastering', 'your music']}
						interval={2000}
					/>
				</h2>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;

	const client = Client();

	const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

	return {
		props: {
			doc,
			menu,
			preview
		},
		revalidate: 1
	};
}
