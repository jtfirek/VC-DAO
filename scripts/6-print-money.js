import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x54cF1d7c8A8Fecb7D3D77DA60e9329dDF88CeC13");

(async () => {
  try {
    // setting the max supply of the token
    const amount = 1_000_000;
    // Interact with the deployed ERC-20 contract and mint the tokens!
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    // 
    console.log("✅ There now is", totalSupply.displayValue, "$ECGT in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();