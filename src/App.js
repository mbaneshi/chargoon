import "./App.css";

import React, { useState, useEffect } from "react";

import Timer from "./Timer";

function App() {
  const [data, setData] = useState([]);
  const inputHandler = (e) => {
    let q = e.target.value;
    let filteredData = data.filter((item) => {
      return item.name.first.includes(q);
    });
    setData(filteredData);
  };

  // useEffect(() => {
  //   const inputHandler = (e) => {
  //     console.log("🚀 ~ file: App.js ~ line 11 ~ inputHandler ~ q", q);
  //     let = [];
  //     for (let i = 0; i++; i < data?.length) {
  //       if (data[i].name.first.some(q)) {
  //         console.log(
  //           "🚀 ~ file: App.js ~ line 15 ~ inputHandler ~ data",
  //           data
  //         );
  //         filteredData.push(data[i]);
  //       }
  //     }

  //   };
  // }, [data, inputHandler]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const res = await response.json();
        setData(res.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ disply: "flex" }}>
      <Timer />

      <input type="text" onChange={inputHandler} />
      {data.map((item) => {
        return (
          <div
            key={item.login.uuid}
            style={{
              border: "2px solid red ",
              borderRadius: "5px",
              width: "50%",
              disply: "flex",
              flexDirection: "row",
            }}
          >
            <h2>{item.name.first}</h2>
            <h3>{item.gender}</h3>
            <h3>{item.email}</h3>
            <img src={item.picture.medium} />
            <p>{item.cell}</p>
            <p>
              {item.dob.age} {"  "} {item.dob.date}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
