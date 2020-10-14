import Head from 'next/head';
import ThemeContext from '../utils/context/themeContext';
import { useState, useReducer, useRef, useEffect } from 'react';
import layoutReducer from '../utils/reducer/layoutReducer';
import { AnimatePresence } from 'framer-motion';
import {
	Header,
	Layout,
	Footer,
	Background,
	ErrorBoundary
} from '../components';
import '../styles/_globals.scss';
// import { v4 as uuidv4 } from 'uuid';

const App = ({ Component, pageProps }) => {
	const [darkMode, setDarkMode] = useState(true);
	const [pageType, dispatchPageType] = useReducer(layoutReducer, 'homepage');
	const pageTypeRef = useRef(pageType);

	// ##### ZONE DE TRAVAIL EN COURS
	// Le darkMode provoquait un re-render du composant Layout
	// useReducer me permet de toggle une key (ici une ref pour éviter le re-render au changement de valeur)
	// pour Layout(../component/elements/Layout) par page évitant de re-render lorsque je toggle le darkMode.
	// Cependant ma transition de page est bugée (ne s'effectue pas).
	// A la base j'utilisais pageProps.doc.type (infos de la page envoyées par Prismic), mais au build -> .type of undefined...
	// D'où l'utilisation du useReducer.
	// 2 pistes de réflexion :
	// - Creuser un peu dans l'API framer pour voir si une fonction ou une prop pourrait m'aider
	// - Ne plus utiliser framer pour les transi et les gérer avec gsap au mount / unmount avec un custom hook.
	// ##### ZONE DE TRAVAIL EN COURS

	useEffect(() => {
		// console.log(pageTypeRef);
		// pageTypeRef.current && (pageTypeRef.current = pageType);

		pageType !== pageTypeRef.current && (pageTypeRef.current = pageType);
		// console.log(pageTypeRef);
	}, [pageType]);

	console.log(pageTypeRef);

	return (
		pageProps && (
			<div className={darkMode ? 'darkMode' : 'lightMode'}>
				<Head>
					<meta name="robots" content="noindex, nofollow" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<ThemeContext.Provider
					value={{
						darkMode,
						setDarkMode,
						pageType,
						dispatchPageType
					}}
				>
					<Header menu={pageProps.menu} />

					<ErrorBoundary>
						<AnimatePresence exitBeforeEnter>
							<Layout
								key={`layout-${pageTypeRef}`}
								// key={uuidv4()}
							>
								<Component {...pageProps} />
							</Layout>
						</AnimatePresence>
					</ErrorBoundary>

					<Footer />

					<Background url={'/wavesbg.svg'} />
				</ThemeContext.Provider>
			</div>
		)
	);
};

export default App;
