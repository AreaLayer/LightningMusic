import { useMoralis } from "react-moralis";
import { Spin } from "antd";

const Auth = () => {

    const {isAuthenticated, Moralis, logout, isWeb3Enabled, account } = useMoralis();

    const handleCustomLogin = async () => {
        try {
          await Moralis.authenticate({
          provider: "web3Auth",
          clientId: "BP_dGonobACd_as1e50cIsiSIvzqA3E1sIM_xVJU9JNvC5wms8Y8P82T0L5XaLjxD4KEGn7B6y-5TCO-n6hZdL4",
          chainId: 0x13881,
          appLogo: "./logo192.png",
          signingMessage: "Welcome!",
        })
          window.localStorage.setItem("connectorId", "web3Auth");
        } catch (error) {
            console.log(error);
            await Moralis.deactivateWeb3();
        }
    };

    const handleLogout = async () => {
        await logout();
        window.localStorage.removeItem("connectorId");
    }

    // const logger = () => {
    //     console.log(isAuthenticated, isWeb3Enabled, account)
    // }

    return(
        <div>
            <div className="auth" onClick={account ? handleLogout : handleCustomLogin}>
                <Spin spinning={isAuthenticated && !account} >{account ? "Logout" : "Authenticate"}</Spin>
            </div>
        </div>
    )
}

export default Auth;