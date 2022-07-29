import React, { useEffect, useState } from "react";

export default function FetchData(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log("In customhook, ", data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    // const res = fetch(url);
    // const data = res.
  }, [url]);

  return { loading, data, setData };
}
