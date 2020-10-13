import Head from 'next/head';
import ThemeContext from '../utils/context/themeContext';
import { useState, useReducer, useEffect } from 'react';
// import layoutReducer from '../utils/reducer/layoutReducer';
import { AnimatePresence } from 'framer-motion';
import {
	Header,
	Layout,
	Footer,
	Background,
	ErrorBoundary
} from '../components';
import '../styles/_globals.scss';
import { v4 as uuidv4 } from 'uuid';

const App = ({ Component, pageProps }) => {
	const [darkMode, setDarkMode] = useState(true);
	// const [pageType, dispatchPageType] = useReducer(layoutReducer, 'homepage');

	// console.log(pageProps.doc.type);
	// useEffect(() => {
	// 	// console.log(pageType);
	// 	dispatchPageType({ type: pageProps.doc.type });
	// }, []);

	// console.log(pageType);

	return (
		pageProps && (
			<div className={darkMode ? 'darkMode' : 'lightMode'}>
				<>
					<Head>
						<meta name="robots" content="noindex, nofollow" />
						<link
							href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap"
							rel="stylesheet"
						></link>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<ThemeContext.Provider
						value={{
							darkMode,
							setDarkMode
							// pageType, dispatchPageType
						}}
					>
						<Header menu={pageProps.menu} />

						<ErrorBoundary>
							<AnimatePresence exitBeforeEnter>
								<Layout
									// key={`layout`}
									key={uuidv4()}
								>
									<Component {...pageProps} />
								</Layout>
							</AnimatePresence>
						</ErrorBoundary>

						<Footer />

						<Background url={'/wavesbg.svg'} />
					</ThemeContext.Provider>
				</>
			</div>
		)
	);
};

export default App;
