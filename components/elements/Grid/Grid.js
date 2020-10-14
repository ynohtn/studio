import { useEffect, memo, useContext } from 'react';
import ThemeContext from '../../../utils/context/themeContext';
import styles from './styles.module.scss';
import { RefCard, SmpCard } from '../../index';
import { default as NextLink } from 'next/link';
import { RichText } from 'prismic-reactjs';
import { gsap } from 'gsap';

const Grid = memo(({ items }) => {
	const { dispatchPageType } = useContext(ThemeContext);
	// console.log(items);

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
				duration: 0.8,
				stagger: 0.1
			}
		);
	}, []);

	return (
		<div className={styles.grid}>
			{items.map((item, i) => {
				const contentType = item.reference ? 'reference' : 'sample_pack';
				return (
					<NextLink
						key={i}
						href={item.reference ? 'references/[uid]' : 'samples/[uid]'}
						as={
							item.reference
								? `references/${item.reference.uid}`
								: `samples/${item.sample.uid}`
						}
					>
						<a
							id={`griditem`}
							onClick={() => dispatchPageType({ type: contentType })}
						>
							{item.reference ? (
								<RefCard
									name={RichText.asText(item.reference.artist_name)}
									track={RichText.asText(item.reference.track_name)}
									cover={item.reference.cover}
								/>
							) : (
								<SmpCard
									name={RichText.asText(item.sample.pack_name)}
									cover={item.sample.pack_cover}
								/>
							)}
						</a>
					</NextLink>
				);
			})}
		</div>
	);
});

export default Grid;
