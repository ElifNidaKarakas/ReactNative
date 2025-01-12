import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await yelp.get('/search', {  //await ile isteğimizi atarız response değişkenine atarız bunu 
      params: {
        limit: 50,
        term: searchTerm,
        location: 'İstanbul',
      },
    });
    setResults(response.data.businesses); //response nesnesi olusturduk ona değer atamış olduk
  };

  useEffect(() => {
    searchApi('Toast'); //tostalara göre arama yaparız
  }, []);

  return [searchApi, results];
};
