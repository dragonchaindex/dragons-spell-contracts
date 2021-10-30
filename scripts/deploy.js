// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // eslint-disable-next-line no-undef
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  /*
  const supplyOneMillion = "1000000000000000000000000";
  const supplyFiveHundred = "500000000000000000000";

  const BUSD = await hre.ethers.getContractFactory("BUSD");
  const USDT = await hre.ethers.getContractFactory("USDT");

  const busd = await BUSD.deploy(supplyFiveHundred);
  await busd.deployed();

  const usdt = await USDT.deploy(supplyOneMillion);
  await usdt.deployed();

  console.log("busd deployed to:", busd.address);
  console.log("wbnb deployed to:", usdt.address);


  console.log("wbnb deployed to:", wbnb.address);
  console.log("busd deployed to:", busd.address);
  console.log("wbnb deployed to:", usdt.address);

  const balanceWbnb = await wbnb.balanceOf(deployer.address);
  const balanceBusd = await busd.balanceOf(deployer.address);
  const balanceUsdt = await usdt.balanceOf(deployer.address);

  console.log("wbnb balance of deployer:", balanceWbnb.toString());
  console.log("busd balance of deployer:", balanceBusd.toString());
  console.log("usdt balance of deployer:", balanceUsdt.toString());
  */
  const wbnb = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
  const feeSetter = "0xBAfBdF6e4B1C414A906d9f14765B3d51Ad2C9919";

  const FACTORY = await hre.ethers.getContractFactory("DRACFactory");

  const factory = await FACTORY.deploy(feeSetter);

  await factory.deployed();
  console.log("factory deployed to:", factory.address.toString());

  const ROUTER_01 = await hre.ethers.getContractFactory("DragonRouter01");
  const router01 = await ROUTER_01.deploy(factory.address, wbnb);
  await router01.deployed();
  console.log("router_01 deployed to:", router01.address.toString());

  /*
  const ROUTER_MAIN = await hre.ethers.getContractFactory("DragonRouter");
  const routerMain = await ROUTER_MAIN.deploy(
    "0xdC3852D086734f89b124983Ef11152dFb38065F5",
    "0xAC7C508859B2dd442e260CC5Ae647A6D5D7dB806"
  );
  await routerMain.deployed();
  console.log("router_main deployed to:", routerMain.address.toString());
  */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
