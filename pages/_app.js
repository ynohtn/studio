import Head from 'next/head';
import ThemeContext from '../utils/context/themeContext';
import { useState, useReducer, useRef, useEffect } from 'react';
import pageTypeReducer from '../utils/reducer/layoutReducer';

import { AnimatePresence } from 'framer-motion';
import {
	Header,
	Layout,
	Footer,
	Background,
	ErrorBoundary
} from '../components';
import '../styles/_globals.scss';

const App = ({ Component, pageProps }) => {
	const [darkMode, setDarkMode] = useState(true);
	const [pageType, dispatchPageType] = useReducer(pageTypeReducer, 'homepage');
	const pageTypeRef = useRef(pageType);

	useEffect(() => {
		pageType !== pageTypeRef.current && (pageTypeRef.current = pageType);
		dispatchPageType({ type: pageTypeRef.current });
	}, [pageType]);

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
							<Layout key={`#layout-${pageTypeRef.current}`}>
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
