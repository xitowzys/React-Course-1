import './JournalItem.css';

function JournalItem({ title, text, date }) {

    // const formattedDate = date.toLocaleString().split(',')[0].replace(/\//g, '.');
    const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <div className="journal-item">
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{formattedDate}</div>
                <div className="journal-item__text">{text}</div>
            </h2>
        </div>
    );
}


export default JournalItem;
