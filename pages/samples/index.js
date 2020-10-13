import { Client } from '../../lib/prismic-configuration';
import { getSamplePackData } from '../../lib/api';
import styles from '../../styles/Samples.module.scss';
import { useRouter } from 'next/router';
import { Grid, Seo } from '../../components';
import { RichText } from 'prismic-reactjs';

export default function Samples({ doc, items }) {
	const router = useRouter();
	// console.log(doc);
	// console.log(items);

	return (
		<>
			<Seo info={doc} path={router.pathname} />

			<h1 className={styles.pad}>{RichText.asText(doc.data.title)}</h1>

			<Grid items={items} type={doc.type} />
		</>
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
