import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = await sdk.getEditionDrop("0xd7aF353FEe1A332f34382539Fb1ae81677CfCBa7");

(async () => {
  try {
    // define the claim conditions here, this is an array of objects because
    // we could have different claim periods at different dates
    const claimConditions = [{
      // When people are gonna be able to start claiming the NFTs (now)
      startTime: new Date(),
      // The maximum number of NFTs that can be claimed.
      maxQuantity: 100,
      // price of NFT is free
      price: 0,
      // The amount of NFTs people can claim in one transaction.
      quantityLimitPerTransaction: 1,
      // We set the wait between transactions to MaxUint256, so people can only claim once.
      // seems like there should be a better way to do this as this technincally isn't infinite
      waitInSeconds: MaxUint256,
    }]
    // 
    await editionDrop.claimConditions.set("0", claimConditions); 
    console.log("✅ Successfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();