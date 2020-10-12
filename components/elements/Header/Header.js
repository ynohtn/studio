import { useContext } from 'react';
import ThemeContext from '../../../utils/context/themeContext';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-reactjs';

const cx = classNames.bind(styles);

const Header = ({ menu }) => (
	<header className={styles.header}>
		<Nav menu={menu} />
	</header>
);

const Nav = ({ menu }) => {
	const router = useRouter();
	if (menu) {
		return (
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{menu.data.menu_links.map((menuLink, index) => (
						<NavItem
							menuLink={menuLink}
							linkType={menuLink.link.type}
							routerPath={router.pathname}
							key={`menulink-${index}`}
						/>
					))}
				</ul>
			</nav>
		);
	}
	return null;
};

const NavItem = ({ menuLink, routerPath, linkType }) => {
	const { darkMode } = useContext(ThemeContext);
	const className = cx({
		active:
			routerPath.includes(`/${menuLink.link.uid}`) ||
			(routerPath === '/' && linkType === 'homepage')
				? styles.active
				: '',
		activeDark: darkMode && styles.activeDark,
		activeLight: !darkMode && styles.activeLight
	});

	return (
		<li className={className}>
			<NextLink href={linkType === 'homepage' ? '/' : `/${menuLink.link.uid}`}>
				<a>{RichText.asText(menuLink.label)}</a>
			</NextLink>
		</li>
	);
};

export default Header;
