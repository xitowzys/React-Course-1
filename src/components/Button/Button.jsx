import './Button.css';
import { useState } from 'react';

function Button({ text, onClick }) {

	// const [text, setText] = useState('Сохранить');

	// const clicked = () => {
	// 	// setText('Закрыть');
	// 	// console.log('Hello');
	// };

	return (
		<button className='button accent' onClick={onClick}>{text}</button>
	);
}

export default Button;
