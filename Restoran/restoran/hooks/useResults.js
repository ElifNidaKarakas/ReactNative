import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        //await ile isteğimizi atarız response değişkenine atarız bunu
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResults(response.data.businesses); //response nesnesi olusturduk ona değer atamış olduk
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Bağlantı Hatası')
    }
  };

  useEffect(() => {
    searchApi("Toast"); //tostalara göre arama yaparız
  }, []);

  return [searchApi, results, errorMessage];
};
