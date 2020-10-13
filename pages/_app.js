import Head from 'next/head';
import ThemeContext from '../utils/context/themeContext';
import { useState } from 'react';
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
	// console.log(pageProps.doc.type);
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
				<Header menu={pageProps.menu} />

				<ErrorBoundary>
					<AnimatePresence exitBeforeEnter>
						<Layout
							key={`layout-${pageProps.doc.type}`}
							type={pageProps.doc.type}
						>
							<Component {...pageProps} />
						</Layout>
					</AnimatePresence>
				</ErrorBoundary>

				<Footer />

				<Background url={'/wavesbg.svg'} />
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
