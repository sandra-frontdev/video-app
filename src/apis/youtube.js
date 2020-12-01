import axios from 'axios';

const KEY = 'AIzaSyAX3ODusPgdVtMNZI4fUBlFBLWq-9LsbME';

export default axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3',
	params: { part: "snippet", maxResults: 5, key: KEY }
});