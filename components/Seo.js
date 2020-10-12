import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

const Seo = ({ info, path }) => {
	// console.log(info);
	return (
		<>
			{info.type === 'sample_pack' ? (
				<SmpHead info={info} path={path} />
			) : info.type === 'reference' ? (
				<RefHead info={info} path={path} />
			) : (
				<PageHead info={info} path={path} />
			)}
		</>
	);
};

const PageHead = ({ info, path }) => (
	<Head>
		{/*Primary Meta Tags*/}
		<title>{RichText.asText(info.data.title)}</title>

		<meta name="title" content={info.data.seo_title} />
		<meta name="description" content={info.data.seo_desc} />

		{/* Open Graph / Facebook */}
		<meta
			property="og:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta property="og:type" content="website" />
		<meta property="og:title" content={info.data.seo_title} />
		<meta property="og:description" content={info.data.seo_desc} />
		<meta property="og:image" content={info.data.seo_banner.url} />

		{/* Twitter */}
		<meta
			property="twitter:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta property="twitter:card" content={info.data.seo_banner.url} />
		<meta property="twitter:title" content={info.data.seo_title} />
		<meta property="twitter:description" content={info.data.seo_desc} />
		<meta property="twitter:image" content={info.data.seo_banner.url} />
	</Head>
);

const RefHead = ({ info, path }) => (
	<Head>
		{/*Primary Meta Tags*/}
		<title>{`${RichText.asText(info.data.artist_name)} - ${RichText.asText(
			info.data.track_name
		)}`}</title>
		<meta
			name="title"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} on Studio`}
		/>
		<meta
			name="description"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} engineered in Studio`}
		/>

		{/* Open Graph / Facebook */}
		<meta property="og:type" content="article" />
		<meta
			property="og:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta
			property="og:title"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} on Studio`}
		/>
		<meta
			property="og:description"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} engineered in Studio`}
		/>
		<meta property="og:image" content={info.data.cover.url} />

		{/* Twitter */}
		<meta property="twitter:card" content={info.data.cover.url} />
		<meta
			property="twitter:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta
			property="twitter:title"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} on Studio`}
		/>
		<meta
			property="twitter:description"
			content={`Discover ${RichText.asText(
				info.data.track_name
			)} by ${RichText.asText(info.data.artist_name)} engineered in Studio`}
		/>
		<meta property="twitter:image" content={info.data.cover.url} />
	</Head>
);

const SmpHead = ({ info, path }) => (
	<Head>
		{/*Primary Meta Tags*/}
		<title>{`${RichText.asText(info.data.pack_name)} sample pack`}</title>
		<meta
			name="title"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack from Studio`}
		/>
		<meta
			name="description"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack made with love by passionnate musicians and audio engineers in Studio`}
		/>

		{/* Open Graph / Facebook */}
		<meta property="og:type" content="article" />
		<meta
			property="og:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta
			property="og:title"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack from Studio`}
		/>
		<meta
			property="og:description"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack made with love by passionnate musicians and audio engineers in Studio`}
		/>
		<meta property="og:image" content={info.data.pack_cover.url} />

		{/* Twitter */}
		<meta property="twitter:card" content={info.data.pack_cover.url} />
		<meta
			property="twitter:url"
			content={`https://studio-seven.vercel.app${path}`}
		/>
		<meta
			property="twitter:title"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack from Studio`}
		/>
		<meta
			property="twitter:description"
			content={`Discover ${RichText.asText(
				info.data.pack_name
			)} sample pack made with love by passionnate musicians and audio engineers in Studio`}
		/>
		<meta property="twitter:image" content={info.data.pack_cover.url} />
	</Head>
);

export default Seo;
