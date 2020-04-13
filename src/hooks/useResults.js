import { useEffect, useState } from "react";
import yelp from "./../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  //Bad code
  //Call Search API when component is first rendered
  //searchApi("pasta");

  //Good Code
  useEffect(() => {
    searchApi("pasta");
  }, []); //Called only once when the users opens the application

  return [searchApi, results, errorMessage];
};
