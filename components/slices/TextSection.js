import { RichText } from 'prismic-reactjs';

const TextSection = ({ slice, index }) => {
	const sectionClass = slice.slice_type
		? `text-section-${slice.slice_type}-${index}`
		: 'text-section';
	return (
		<section className={`content-section ${sectionClass}`}>
			<RichText render={slice.primary.text} key={index} />
		</section>
	);
};

export default TextSection;
