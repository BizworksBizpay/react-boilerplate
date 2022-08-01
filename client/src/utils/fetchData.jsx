import axios from 'axios';
import wrapPromise from './wrapPromise';

//const sleep = n => new Promise(resolve => setTimeout(resolve,n));
//await sleep(5000);
const fetchData = (url) =>{
  const promise = axios.get(url).then(({data}) => data);
  return wrapPromise(promise);
}

export default fetchData;