import axios from 'axios'

const URL_BASE_URL = 'http://localhost:8080/list'
const URL_POST_GENERATE = 'http://localhost:8080/generate'


class UrlService {

    getUrls() {
        return axios.get(URL_BASE_URL);
    }

    generate(form) {
        console.log('SERVICE GENERATE !! ', form);
        return axios.post(URL_POST_GENERATE, form);
    }

}

export default new UrlService()