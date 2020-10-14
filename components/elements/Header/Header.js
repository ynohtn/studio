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
	const { darkMode, dispatchPageType } = useContext(ThemeContext);

	const router = useRouter();
	if (menu) {
		return (
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{menu.data.menu_links.map((menuLink, index) => {
						const className = cx({
							active:
								router.pathname.includes(`/${menuLink.link.uid}`) ||
								(router.pathname === '/' && menuLink.link.type === 'homepage')
									? styles.active
									: '',
							activeDark: darkMode && styles.activeDark,
							activeLight: !darkMode && styles.activeLight
						});
						const handlePageType = () =>
							dispatchPageType({ type: menuLink.link.type });

						return (
							<NavItem
								itemClass={className}
								menuLink={menuLink}
								dispatch={handlePageType}
								linkType={menuLink.link.type}
								key={`menulink-${index}`}
							/>
						);
					})}
				</ul>
			</nav>
		);
	}
	return null;
};

const NavItem = ({ menuLink, itemClass, linkType, dispatch }) => {
	return (
		<li className={itemClass}>
			<NextLink href={linkType === 'homepage' ? '/' : `/${menuLink.link.uid}`}>
				<a onClick={dispatch}>{RichText.asText(menuLink.label)}</a>
			</NextLink>
		</li>
	);
};

export default Header;
