import { Client } from '../../lib/prismic-configuration';
import { getReferenceData } from '../../lib/api';
import styles from '../../styles/References.module.scss';
import { useRouter } from 'next/router';
import { Grid, Seo } from '../../components';
import { RichText } from 'prismic-reactjs';

export default function References({ doc, items }) {
	const router = useRouter();
	// console.log(items);
	// console.log(doc);

	return (
		<>
			<Seo info={doc} path={router.pathname} />

			<h1 className={styles.pad}>{RichText.asText(doc.data.title)}</h1>

			<Grid items={items} />
		</>
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
