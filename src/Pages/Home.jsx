import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { CiSearch } from "react-icons/ci";
import Details from "./Details";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [query, setQuery] = useState("");
  const [typing, setTyping] = useState(false);
  const [names, setNames] = useState([]);
  const [similarAnimes, setSimilarAnimes] = useState([]);
  const nav = useNavigate();
  let data = useLocation().state;
  const [clas, setClas] = useState("home");
  const [chan, setChan] = useState(false);
  const location = useLocation();
  useEffect(() => {
    try {
      if (query) {
        console.log(query);
        const res = fetch(`http://localhost:5000/search?query=${query}`)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setNames(data.slice(0, 6));
          });
      }
    } catch (err) {
      console.log(err);
    }
  }, [query]);
  const handle = (e) => {
    setQuery(e.target.value);
    setTyping(true);
  };
  const selectedName = (name) => {
    setQuery(name.Name);
    setTyping(false);
    if (window.location.href === "http://localhost:5173") {
      setClas(" home nobg chan");
      console.log("came to chan");
    } else {
      setClas("home nobg");
      console.log("added");
    }
    nav(`/search/${name.Name}`, { state: name });
  };
  console.log(names);
  useEffect(() => {}, [clas, window.location]);
  return (
    <div
      className={
        window.location.href === "http://localhost:5173/" ? "home" : "home"
      }
    >
      <div className="input">
        <div className={!typing ? "inputwrapper" : "inputwrapper remove"}>
          <CiSearch className="sicon" />
          <input
            type="text"
            placeholder="Get Recoms ..."
            value={query}
            onChange={(e) => handle(e)}
          />
        </div>
      </div>
      {typing && (
        <div className="names">
          {/* {query.length < 3 && query.length !== 0 && (
            <div className="nameswrapper">
              <p>Name should be more than three letters</p>
              <div className="dash"></div>
            </div>
          )} */}
          {names.length === 0 && query.length > 0 && (
            <div className="nameswrapper">
              <p>No results found</p>
            </div>
          )}
          {query.length > 2 && (
            <div className="nameswrapper">
              {names.map((na) => (
                <div className="animeName" onClick={(e) => selectedName(na)}>
                  <p>{na.Name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
