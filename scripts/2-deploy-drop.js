import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    //these are the details of the NFT
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "Electronic Capital Membership NFT",
      description: "A decentralized Venture Capital Firm",
      // The image that will hold the NFT
      image: readFileSync("scripts/assets/lightingbolt.png"),
      // This is where I store the address of the person who will be receiving the proceeds from the sales of nfts.
      // I will not be charging for the drop so set to Address zero
      primary_sale_recipient: AddressZero,
    });

    // this initialization returns the address of our contract
    // we use this to initialize the contract on the thirdweb sdk
    const editionDrop = await sdk.getEditionDrop(editionDropAddress);

    // with this, we can get the metadata of our contract
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();