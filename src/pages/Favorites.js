import React from "react";
import { Link } from "react-router-dom";
import { library } from "../helpers/albumList";
import "./Home.css";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";


const Favorites = () => {
    const { isAuthenticated, Moralis, account } = useMoralis();
    const [favorites, setFavorites] = useState();

    useEffect(() => {
        async function fetchMyList() {
           await Moralis.start({
              serverUrl: "https://gkx1aszh57hy.usemoralis.com:2053/server",
              appId: "nhXoWGlnxP7U1RUeVuANk0AJEH0dzvYqsa1TR07n",
            });
    
          try {
            const theList = await Moralis.Cloud.run("getFavorites", { addrs: account });
            console.log(theList);
            const filterdA = library.filter(function (e) {
              return theList.indexOf(e.title) > -1;
            });
    
            setFavorites(filterdA);
            console.log(favorites);
            
          } catch (error) {
            console.error(error)
          }
        }
    
        fetchMyList();
      }, [account]);

    return(
        <><h1 className="featuredTitle"> Your Music </h1><div className="albums">
                {favorites && account ? (
                <>
                  <div className="albums">
                    {
                      favorites.map((e) => {
                        return (
                          <Link to="/album" state={e} className="albumSelection" >
                      <div className="albumCover">
                        <img
                          src={e.image}
                          alt="bull"
                          style={{"--i": 0.5, "--j": 0 }}
                        ></img>
                        <img
                          src={e.image}
                          alt="bull"
                          style={{"--i": 0, "--j": 2 }}
                        ></img>
                        <img
                          src={e.image}
                          alt="bull"
                          style={{"--i": -0.5, "--j": 4 }}
                        ></img>
                      </div>
                      <p>{e.title}</p>
                    </Link>
                      );
                      })}
                  </div>
                </>
              ) : (
                <div className="albums" style={{ color: "white" }}>
                  You need to Authenticate and add favorites to view your own list
                </div>
              )}
        </div>
        </>
    )
}

export default Favorites;