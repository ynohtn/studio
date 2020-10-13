import { Client } from '../../lib/prismic-configuration';
import { getSamplePacks } from '../../lib/api';
import { useContext } from 'react';
import ThemeContext from '../../utils/context/themeContext';
import styles from '../../styles/Samples.module.scss';
import { useRouter } from 'next/router';
import { Backlink, SliceZone, Seo } from '../../components';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function SamplePack({ smp, slices, doc }) {
	const router = useRouter();
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		bodyDark: darkMode && styles.bodyDark,
		bodyLight: !darkMode && styles.bodyLight
	});
	// console.log(smp)
	// console.log(slices)
	// console.log(router);

	return (
		<>
			<Seo info={doc} path={router.asPath} />
			<section className="scrollctn">
				<section className={`${styles.smphead} ${className}`}>
					<figure>
						<img src={smp.pack_cover.url} alt={smp.pack_cover.alt} />
					</figure>
					<div className={styles.smpinfo}>
						<h1>{RichText.asText(smp.pack_name)}</h1>
					</div>
					<Backlink text="Samples" href="/samples" />
				</section>

				<section className={className}>
					<SliceZone sliceZone={slices} />
				</section>
			</section>
		</>
	);
}

export async function getStaticPaths() {
	const response = await getSamplePacks();
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
		(await Client().getByUID(
			'sample_pack',
			params.uid,
			ref ? { ref } : null
		)) || {};
	const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

	// All slices
	const slices = doc.data.body;
	// Sample pack
	const smp = doc.data;

	return {
		props: {
			smp,
			menu,
			slices,
			doc
		},
		revalidate: 1
	};
}
