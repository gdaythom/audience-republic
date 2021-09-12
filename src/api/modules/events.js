import mockEvents from '../data/events';

const fetchEvents = () => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(mockEvents);
  }, 2000);
}));

export default { fetchEvents };
