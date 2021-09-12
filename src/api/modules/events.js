import mockEvents from '../data/events';

const fetchEvents = () => new Promise(((resolve) => {
	setTimeout(() => {
		resolve(mockEvents);
	}, 100);
}));

export default { fetchEvents };
