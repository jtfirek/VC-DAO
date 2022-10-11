import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // if the user has not connected their wallet display the screen that allows them to connect their wallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to the Electronic Capital DAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }
  else { // we already have the address so display the welcome screen
    return (
      <div className="landing">
        <h1>👀 wallet connected, now what!</h1>
      </div>);
  }
}

export default App;