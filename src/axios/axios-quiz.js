import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-87420.firebaseio.com'
})