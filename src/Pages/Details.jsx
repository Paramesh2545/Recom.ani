import React, { useEffect, useState } from "react";
import "../styles/Details.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
const Details = () => {
  let data = useLocation().state;
  const nav = useNavigate();
  console.log(data);
  var a = data.Genres;
  var genres = a.split(",");
  var rname = data.Name;
  // const images=data.
  const [present, setPresent] = useState(6);
  const [recomendations, setRecomendatinos] = useState(null);

  // const images={[]}

  const gotoAnime = (name) => {
    nav(`/search/${name.Name}`, { state: name });
    window.location.reload(false);
  };

  useEffect(() => {
    const fetchRecom = () => {
      try {
        fetch(`http://localhost:5000/getrecom?query=${rname}`)
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setRecomendatinos(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecom();
    // const change = setInterval(() => {
    //   if (present === 6) {
    //     setPresent(7);
    //   } else {
    //     setPresent(6);
    //   }
    // }, 3000);
    // return () => clearInterval(change);
  }, [rname]);
  return (
    <div className="rec">
      <Home />
      <div className="details">
        <div className="main2">
          <div className="image">
            <img src={data.src}></img>
          </div>
          <div className="descript">
            <h1>{data.Name}</h1>
            <h4>{data.sypnopsis}</h4>
            <h4>Rating : {data.Score}</h4>
            <h4 className="h4">
              Genre:
              {genres.map((item) => (
                <div className="name">
                  <p>{item}</p>
                </div>
              ))}
            </h4>
          </div>
        </div>
      </div>
      <div className="textx">
        <h1>Recomended Animes</h1>
      </div>
      <div className="recomendations">
        {recomendations &&
          recomendations.map((recom) => (
            <div className="cardwrapper" key={recom.index}>
              <img src={recom.src} alt={recom.Name} className="recomImg" />
              <div className="text">
                <h2>{recom.Name}</h2>
                <p>{recom.sypnopsis}</p>
              </div>
              <button className="card-button" onClick={(e) => gotoAnime(recom)}>
                More info
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Details;
