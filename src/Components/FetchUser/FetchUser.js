import React, { useState, useEffect } from "react";
import "./FetchUser.css";

export default function FetchUser() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";
  //const url2 = "dddd";

  useEffect(() => {
    const fetchApi = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => console.error("Error Fetching Data: ", error))
        .finally(() => {
          setIsLoading(false);
        });
      // const res = await fetch(url);
      // const data = await res.json();
      // setTimeout(() => {
      //   setData(data);
      //   setIsLoading(false);
      // }, 1000);
    };
    fetchApi();
    // fetch(url)
    //   .then(response => {
    //     console.log(response.json());
    //   }
  }, [url]);

  const results = [];

  // Object.keys(data).forEach((key) => {
  //   results.push(
  //     <h2 key={key}>
  //       {key}: {data[key]}
  //     </h2>
  //   );
  // });

  // data = [{}, {},...]
  // Object.keys, Object.entries, Object.values
  // Object.entries() => [[key,value], ...]
  // Object.keys => [key1, key2...], obj[key]
  // iterate with map => [?, ?, ?]

  //console.log(Object.keys(data));

  //console.log(data);
  //data.map((keys) => console.log(keys));

  // Object.keys(data).map((key, index) => {
  //   return results2.push(<h2 key={index}>{key}</h2>);
  // });

  data.map((keys) => {
    for (const [key, val] of Object.entries(keys)) {
      if (typeof val !== "object") {
        results.push(
          <p key={key}>
            {key}: {val}
          </p>
        );
      } else {
        results.push(<ul key={key}>{key}:</ul>);
        for (const [keyz, valz] of Object.entries(val)) {
          //console.log(valz);
          if (typeof valz !== "object") {
            results.push(
              <li key={keyz}>
                {keyz}: {valz}
              </li>
            );
          } else {
            results.push(<ul key={keyz}>{keyz}:</ul>);
            for (const [keyzz, valzz] of Object.entries(valz)) {
              results.push(
                <li key={keyzz}>
                  {keyzz}: {valzz}
                </li>
              );

              //console.log(valzz);
            }
          }
        }
      }
      //console.log(val);
      // results2.push(<h2 key={key}>{key}:</h2>);
    }
    results.push(<br />);
  });

  return (
    <>
      {isLoading ? (
        <p>Loading.......</p>
      ) : (
        <div>
          <h3>User List</h3>
          <br />
          {results}
        </div>
      )}
    </>
  );
}
