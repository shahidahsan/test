const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

      // Call the function.
      let transaction = await nftContract.makeAnEpicNFT()
      // Wait for it to be mined.
      await transaction.wait()

      // Mint another NFT for fun.
      transaction = await nftContract.makeAnEpicNFT()
      // Wait for it to be mined.
      await transaction.wait()
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();