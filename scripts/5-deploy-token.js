import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    // this contract deploys my goverence tokens
    const tokenAddress = await sdk.deployer.deployToken({
      
      name: "Electronic Capital Governance Token",
    
      symbol: "ECGT",
      
      // since we are not selling our token, we set it to AddressZero again.
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();