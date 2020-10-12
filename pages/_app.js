import Head from 'next/head';
import ThemeContext from '../utils/context/themeContext';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from '../components';
import '../styles/_globals.scss';

const App = ({ Component, pageProps }) => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? 'darkMode' : 'lightMode'}>
			<Head>
				<meta name="robots" content="noindex, nofollow" />
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
				<ErrorBoundary>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} />
					</AnimatePresence>
				</ErrorBoundary>
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
