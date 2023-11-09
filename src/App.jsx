import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

// [
// 	{
// 		"id": 1,
// 		"title": "Подготовка к обновлению курсов",
// 		"text": "Горные походы открывают удивительные природные ландшафты",
// 		"date": "2023-11-09T00:00:00Z"
// 	},
// 	{
// 		"id": 2,
// 		"title": "Поход в годы",
// 		"text": "Думал, что очень много времени",
// 		"date": "2023-11-09T00:00:00Z"
// 	}
// ]

// const INITIAL_DATA = [
// 	{
// 		id: 1,
// 		title: 'Подготовка к обновлению курсов',
// 		text: 'Горные походы открывают удивительные природные ландшафт',
// 		date: new Date()
// 	},
// 	{
// 		id: 2,
// 		title: 'Поход в годы',
// 		text: 'Думал, что очень много времени',
// 		date: new Date()
// 	}
// ];

function App() {
	const [items, setItems] = useState([]);


	useEffect(() => {

		const data = JSON.parse(localStorage.getItem('data'));

		if (data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			console.log('Запись!');
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}


export default App;
