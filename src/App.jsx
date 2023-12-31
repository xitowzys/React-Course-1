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
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContext, UserContextProvider } from './context/user.context';

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

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	// const [items, setItems] = useState([]);


	// useEffect(() => {

	// 	const data = JSON.parse(localStorage.getItem('data'));

	// 	if (data) {
	// 		setItems(data.map(item => ({
	// 			...item,
	// 			date: new Date(item.date)
	// 		})));
	// 	}
	// }, []);

	const [items, setItems] = useLocalStorage('data');


	const [selectedItem, setSelectedItem] = useState(null);
	// useEffect(() => {
	// 	if (items.length) {
	// 		console.log('Запись!');
	// 		localStorage.setItem('data', JSON.stringify(items));
	// 	}
	// }, [items]);

	const addItem = item => {

		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
			}]);
		} else {
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item
					};
				}
				return i;
			})]);
		}
	};

	const deleteItem = (id) => {
		setItems([...items.filter(i => i.id !== id)]);
	};

	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header />
					<JournalAddButton clearForm={() => setSelectedItem(null)} />
					<JournalList items={mapItems(items)} setItem={setSelectedItem} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem} onDelete={deleteItem} />
				</Body>
			</div>
		</UserContextProvider>
	);
}


export default App;
