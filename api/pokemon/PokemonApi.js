import axios from 'axios';
import endpoints from './endpoints';

export default class AuthApi {
  async findByName () {
    return await axios.get(endpoints.findByName);
  }

  async findAll (url) {
    return await axios.get(!url ? endpoints.findAll : url);
  }
}
