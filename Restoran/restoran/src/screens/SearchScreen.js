import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../../component/SearchBar";
import useResults from "../../hooks/useResults";
import ResultsList from "../../component/ResultList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState(null);
  console.log(results); //ekrana bastırır

  const filterResultsByPrice = (price) => {
    //price bilgisine göre filtreleme işlemini yaparız
    return results.filter((result) => {
      //her objeye result deriz
      return result.price === price; //tl olanları ekrana basmak için hepsini çekip geri döndürüyoruz.
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <></>
          ) : (
            <>
              {" "}
              <ResultsList
                title="Ucuz Restoranlar"
                results={filterResultsByPrice("₺")} //price bilgisi ₺ ile alıyor
              />
              <ResultsList
                title="Uygun Restoranlar"
                results={filterResultsByPrice("₺₺")}
              />
              <ResultsList
                title="Pahalı Restoranlar"
                results={filterResultsByPrice("₺₺₺")}
              />
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
