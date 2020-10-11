import { Client } from '../../lib/prismic-configuration';
import { useContext } from 'react';
import ThemeContext from '../../utils/context/themeContext';
import styles from '../../styles/About.module.scss';
import { default as NextLink } from 'next/link';
import Head from 'next/head';
import { Layout, SliceZone, Backlink } from '../../components';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function About({ doc, slices, menu }) {
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		bodyDark: darkMode && styles.bodyDark,
		bodyLight: !darkMode && styles.bodyLight
	});
	// console.log(doc)
	// console.log(slices)

	return (
		<Layout menu={menu}>
			<Head>
				{/*Primary Meta Tags*/}
				<title>About</title>
				<meta name="title" content="About Studio" />
				<meta
					name="description"
					content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://studio-seven.vercel.app/about"
				/>
				<meta property="og:title" content="About Studio" />
				<meta
					property="og:description"
					content="Discover who we are, what we love, what we do. Finest audio engineers in Studio"
				/>
				<meta property="og:image" content="/meta-cover.jpg" />

				{/* Twitter */}
				<meta property="twitter:card" content="/meta-cover.jpg" />
				<meta
					property="twitter:url"
					content="https://studio-seven.vercel.app/about"
				/>
				<meta property="twitter:title" content="About Studio" />
				<meta
					property="twitter:description"
					content="Discover who we are, what we love, what we do. Finest audio engineers in Studio"
				/>
				<meta property="twitter:image" content="/meta-cover.jpg" />
			</Head>

			<h1 className={styles.abouttitle}>
				{RichText.asText(doc.data.about_title)}
			</h1>

			<section className={`${styles.aboutbody} ${className}`}>
				<SliceZone sliceZone={slices} />
			</section>

			{/* <Backlink text='Home' href='/' /> */}
		</Layout>
	);
}

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;

	const client = Client();

	const doc = (await client.getSingle('about', ref ? { ref } : null)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};
	const slices = doc.data.body;

	// doc.alternate_languages.forEach(function (altLang) {
	//   var id = altLang.id;
	//   var uid = altLang.uid;
	//   var type = altLang.type;
	//   var lang = altLang.lang;
	// });

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
