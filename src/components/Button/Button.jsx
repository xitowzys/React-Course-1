import './Button.css';
import { useState } from 'react';

function Button({ children, onClick }) {

	// const [text, setText] = useState('Сохранить');

	// const clicked = () => {
	// 	// setText('Закрыть');
	// 	// console.log('Hello');
	// };

	return (
		<button className='button accent' onClick={onClick}>{children}</button>
	);
}

export default Button;
