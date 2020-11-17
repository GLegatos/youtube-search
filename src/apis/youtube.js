import axios from 'axios';

const KEY = 'AIzaSyDKaxD2AlB1YBbrcCbGSLNi0I0hOXfnfjA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

