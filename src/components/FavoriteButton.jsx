import React from 'react'
import { useMoralis } from "react-moralis";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { message, Alert } from 'antd';
import { useState } from 'react';

const FavoriteButton = ({title, favList}) => {
  const { isAuthenticated, Moralis, account } = useMoralis();
  const [favStatus, setFavStatus] = useState(favList.includes(title));

  const handleAddNotification = () => {
    account ? message.success("Album added to favorites") : message.error("You need to authenticate before adding favorites")
  };

  const handleDeleteNotification = () => {
    account ? message.success("Album removed from favorites") : message.error("You need to authenticate before adding favorites")
  };
  const handleErrorNotification = () =>{
    message.error("You need to be Authenticated");
  }

  if(favStatus && account) {
    return(
      <HeartFilled 
            className="addFav"
            style={{ color: "#831AF9" }}
            onClick={async () => {
              await Moralis.Cloud.run("deleteFavorites", {
                addrs: account,
                newFav: title,
              });
              handleDeleteNotification();
              setFavStatus(!favStatus);
            }} 
        />
    )
  } else if(!favStatus && account){
    return(
      <HeartOutlined 
            className="addFav"
            style={{ color: "#831AF9" }}
            onClick={async () => {
              await Moralis.Cloud.run("updateFavorites", {
                addrs: account,
                newFav: title,
              });
              handleAddNotification();
              setFavStatus(!favStatus);
            }} 
        />)
  } else {
    return(
      <HeartOutlined 
            className="addFav"
            style={{ color: "#831AF9" }}
            onClick={() => handleErrorNotification()} 
        />)
  }

  // return (
  //   <>
  //     {favStatus?
  //       (<HeartFilled 
  //           className="addFav"
  //           style={{ color: "#831AF9" }}
  //           onClick={async () => {
  //             await Moralis.Cloud.run("deleteFavorites", {
  //               addrs: account,
  //               newFav: title,
  //             });
  //             handleDeleteNotification();
  //             setFavStatus(!favStatus);
  //           }} 
  //       />) : (
  //         <HeartOutlined 
  //           className="addFav"
  //           style={{ color: "#831AF9" }}
  //           onClick={async () => {
  //             await Moralis.Cloud.run("updateFavorites", {
  //               addrs: account,
  //               newFav: title,
  //             });
  //             handleAddNotification();
  //             setFavStatus(!favStatus);
  //           }} 
  //       />)
  //     }
  //   </>
  // ) 

}

export default FavoriteButton;