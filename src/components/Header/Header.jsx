import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {

	return (
		<>
			<Logo />
			{/* <img className={styles.logo} src={logos[logoIndex]} alt="Логотип журнала" /> */}
			<SelectUser />
		</>
	);
}

export default Header;