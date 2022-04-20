import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import Favorites from "./pages/Favorites";
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMoralis } from "react-moralis";
import Auth from './components/Auth';

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  const { isAuthenticating, Moralis, isAuthenticated, isWeb3Enabled, account, isWeb3EnableLoading, enableWeb3 } = useMoralis();

  useEffect(() => {
    console.log(isAuthenticated);
    const connectorId = window.localStorage.getItem("connectorId");
    console.log(connectorId);
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({
        provider: "web3Auth",
        clientId: "BP_dGonobACd_as1e50cIsiSIvzqA3E1sIM_xVJU9JNvC5wms8Y8P82T0L5XaLjxD4KEGn7B6y-5TCO-n6hZdL4",
        chainId: 0x13881,
        // appLogo: "./logo192.png"
      });
  }, [isAuthenticated, isWeb3Enabled]);



  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <img src="logo192.png" alt="Logo" className="logo"></img>
            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
            <p style={{ color: "#831AF9" }}> Home </p>
            </Link>
            <Link to="/favorites">
              <p style={{ color: "#831AF9" }}> Your Music </p>
            </Link>
            <div className="recentPlayed">
              <p className="recentTitle"></p>
              {/* <div className="auth" onClick={handleLogin}>
                <Spin spinning={isAuthenticating} >{isAuthenticated ? "Authenticated" : "Authenticate"}</Spin>
              </div>
              <button onClick={logger}>Log</button> */}
              <Auth/>
            </div>
          </Sider>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum &&
          <Player
            url={nftAlbum}
          />
          }
        </Footer>
      </Layout>
    </>
  );
}


export default App;
