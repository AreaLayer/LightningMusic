import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";

const { TabPane } = Tabs;

const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
              <TabPane tab="FEATURED" key="1">
                <h1 className="featuredTitle"> Music, decentralized </h1>
                <div className="albums">
                  {library.map((e) => (
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
                  ))}
                </div>
              </TabPane>
              <TabPane tab="GENRES & MOODS" key="2">
                <h1 className="featuredTitle">Pop Music</h1>
                <div className="albums">
                  {library.slice(7, 13).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
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
                  ))}
                </div>
                <h1 className="featuredTitle">Top Hits</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
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
                  ))}
                </div>
                <h1 className="featuredTitle">Country</h1>
                <div className="albums">
                  {library.slice(0, 6).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
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
                  ))}
                </div>
                <h1 className="featuredTitle">Classics</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
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
                  ))}
                </div>
              </TabPane>
              <TabPane tab="NEW RELEASES" key="3">
                <h1 className="featuredTitle">Hot Off The Press</h1>
                <div className="albums">
                  {library.map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
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
                  ))}
                </div>
              </TabPane>
            </Tabs>
    </>
  );
};

export default Home;
