export const useIPFS = () => {
    const resolveLink = (url) => {
      if (!url || !url.includes("ipfs://")) return url;
      return url.replace("ipfs://", "https://ipfs.moralis.io:2053/ipfs/");
    };
  
    return { resolveLink };
  };