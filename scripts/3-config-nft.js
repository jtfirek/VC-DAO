import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0xd7aF353FEe1A332f34382539Fb1ae81677CfCBa7");
// metadata assicated with the NFT
(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "electronic capital membership card",
        description: "This NFT verifies your status as a partner in Electronic Capital!",
        image: readFileSync("scripts/assets/lightingbolt.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();