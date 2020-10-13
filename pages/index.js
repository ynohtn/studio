import { Client } from '../lib/prismic-configuration';
import { RichText } from 'prismic-reactjs';
import { useRouter } from 'next/router';
import { Seo } from '../components';
import TextLoop from 'react-text-loop';
import styles from '../styles/Home.module.scss';

export default function Home({ doc }) {
	const router = useRouter();
	// console.log(doc);

	return (
		<>
			<Seo info={doc} path={router.pathname} />

			<div className={styles.homectn}>
				<h1 className={styles.hometitle}>{RichText.asText(doc.data.title)}</h1>
				<h2 className={styles.homesubtitle}>
					<span className={styles.space}>We love</span>
					<TextLoop
						children={['producing', 'mixing', 'mastering', 'your music']}
						interval={2000}
					/>
				</h2>
			</div>
		</>
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
