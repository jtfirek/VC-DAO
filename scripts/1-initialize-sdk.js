import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";


// import and configure the individual user environment variables
import dotenv from "dotenv";
dotenv.config();

// Check that all the environement varibles are in the dotenv
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
  console.log("🛑 Private key not found.");
}

if (!process.env.QUICKNODE_API_URL || process.env.QUICKNODE_API_URL === "") {
  console.log("🛑 QuickNode API URL not found.");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
  console.log("🛑 Wallet Address not found.");
}

//Use our quicknode API url from our .env file to get RPC URL
const provider = new ethers.providers.JsonRpcProvider(process.env.QUICKNODE_API_URL);
// wallet private key
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const sdk = new ThirdwebSDK(wallet);

(async () => {
  try {
    const address = await sdk.getSigner().getAddress();
    console.log("SDK initialized by address:", address)
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})();

// export the initialized thirdweb so that we can use it in our other scripts
export default sdk;