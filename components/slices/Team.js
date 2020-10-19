import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { gsap } from 'gsap';

const Team = ({ slice }) => {
	useEffect(() => {
		gsap.fromTo(
			'.team-grid-item',
			{
				x: -100,
				opacity: 0
			},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.1
			}
		);
	}, []);

	return (
		<section className="team-section content-section">
			<h2 className="team-section-title">
				{RichText.asText(slice.primary.team_section)}
			</h2>
			<div className="team-grid">
				{slice.items.map((item, index) => (
					<TeamMember item={item} key={index} />
				))}
			</div>
		</section>
	);
};

const TeamMember = ({ item }) => (
	<div className="team-grid-item">
		<figure>
			<img src={item.portrait.Mobile.url} alt={item.portrait.Mobile.alt} />
		</figure>
		<div className="team-grid-item-ctn">
			<h3>{RichText.asText(item.name)}</h3>
			<h4>{RichText.asText(item.position)}</h4>
			<p>{RichText.asText(item.description)}</p>
		</div>
	</div>
);

export default Team;
