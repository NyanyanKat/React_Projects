import FetchData from "./CustomHooks";
//import { useState } from "react";

export default function UseHooks() {
  //const [loading, setLoading] = useState(true);
  //const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const { loading, data, setData } = FetchData(url);
  //const [fetched, setSorted] = useState([]);

  // useEffect(() => {
  //   setSorted(data);
  // }, []);

  function changeToAlpha() {
    let sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sorted);
    // console.log(sorted);
  }

  function changeToReverse() {
    let sorted = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setData(sorted);
  }

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <button onClick={changeToAlpha}>Alphabet Order</button>
          <button onClick={changeToReverse}>Reverse Order</button>
          {data.map((item) => (
            <p key={item.id}>
              {item.id}-{item.name}
            </p>
          ))}
        </>
      )}
    </div>
  );
}
