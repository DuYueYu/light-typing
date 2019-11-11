import axios from 'axios';

const pathConfig = {
    imgPath: 'http://127.0.0.1:8011/img/',	//这是知乎日报图片的地址
    apiPath: 'http://127.0.0.1:8010/'
};

const instance = axios.create({
    baseURL: pathConfig.apiPath,
	timeout: 1000,
	headers: {'X-Custom-Header': 'foobar'}
});

export default instance;