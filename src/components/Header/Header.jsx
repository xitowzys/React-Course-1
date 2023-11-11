import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	console.log('Header');

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<Logo />
			{/* <img className={styles.logo} src={logos[logoIndex]} alt="Логотип журнала" /> */}
			<SelectUser />
			<Button onClick={toggleLogo}>Сменить лого</Button>
		</>
	);
}

export default Header;