import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { useMoralis } from "react-moralis";
import { ClockCircleOutlined, HeartFilled } from "@ant-design/icons";
import { message } from 'antd';

// const bears = [
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/Qmf8xEYZdMtQXYv56VxxmzbtUtEVjmaFaXGCgcBqGXDAA6/music/JTwinkle.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/6/69/B.o.B_-_Strange_Clouds_-_LP_Cover.jpg",
//     album: "Strange Clouds",
//     song: "Airplanes",
//     duration: "0:05",
//   },
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
//     album: "My Everything",
//     song: "Side To Side",
//     duration: "0:16",
//   },
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
//     album: "My Everything",
//     song: "Pizza and A Coke",
//     duration: "5:01",
//   },
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
//     album: "My Everything",
//     song: "Iceberg Lettuce",
//     duration: "0:24",
//   },
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
//     album: "My Everything",
//     song: "Spitting Chicklets",
//     duration: "1:03",
//   },
//   {
//     src: "https://ipfs.moralis.io:2053/ipfs/QmUUhsAiUFq1B5JtzQH733CLBbUCnRekYXETMfeYG7PaZ3/music/JTiger.mp3",
//     cover:
//       "https://upload.wikimedia.org/wikipedia/en/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png",
//     album: "My Everything",
//     song: "Boomerang",
//     duration: "2:16",
//   },
// ];

const Album = ({ setNftAlbum }) => {
  const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);
  const { isAuthenticated, Moralis, account } = useMoralis();

  const handleAddNotification = () => {
    message.success("Album added to favorites")
  };

  const handleNoContract = () => {
    message.error("Album does not have associated contract")
  };

  return (
    <>
      <div className="albumContent" style={{ "--background": albumDetails.image}} >
        <div className="topBan">
          <img
            src={albumDetails.image}
            alt="albumcover"
            className="albumCover"
          ></img>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails.title}</div>
            <div className="artist">
              {album && albumDetails.contract && JSON.parse(album[0].metadata).artist}
            </div>
            <div>
              {album && albumDetails.contract && JSON.parse(album[0].metadata).year} •{" "}
              {album && albumDetails.contract && album.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={() => albumDetails.contract ? setNftAlbum(album) : handleNoContract() }>
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
              )
            }
          >
            OpenSea
            <img src={Opensea} className="openLogo" alt="Opensea link"/>
          </div>
          <HeartFilled 
             className="addFav"
             style={{ color: "#831AF9" }}
             onClick={async () => {
              await Moralis.Cloud.run("updateFavorites", {
                addrs: account,
                newFav: albumDetails.title,
              });
              handleAddNotification();
            }} />
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {album &&
          album.map((nft, i) => {
            nft = JSON.parse(nft.metadata);
            return (
              <>
                <div className="tableContent">
                  <div className="numberHeader">{i + 1}</div>
                  <div
                    className="titleHeader"
                    style={{ color: "rgb(205, 203, 203)" }}
                  >
                    {nft.name}
                  </div>
                  <div className="numberHeader">{nft.duration}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Album;
