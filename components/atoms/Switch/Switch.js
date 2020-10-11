import { useContext } from 'react';
import ThemeContext from '../../../utils/context/themeContext';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
// import styles from './styles.module.scss';

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[300],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: purple[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const Switcher = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	const toggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Switch
						checked={darkMode}
						onChange={toggle}
						name="darkmode"
						color="default"
					/>
				}
				// control={<PurpleSwitch checked={darkMode} onChange={toggle} name="darkmode" />}
				label={!darkMode ? 'light' : 'dark'}
			/>
		</FormGroup>
	);
};

export default Switcher;
