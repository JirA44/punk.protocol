/chainId.js
import { ChainId } from "@typechain/ethers-v5";
import { solidity } from "solidity-coverage";
import { Chain } from "@nomiclabs/hardhat/ethers-v5";

// The chain ID test
export const testChainId = async () => {
    const chainId = await ChainId.query(); // Query chain ID
    return chainId;
}
---
// FILE: tests/contracts/ethers/chainId.js
import { ChainId } from "@typechain/ethers-v5";
import { solidity } from "solidity-coverage";
import { Chain } from "@nomiclabs/hardhat/ethers-v5";

// The chain ID test
export const testChainId = async () => {
    const chainId = await ChainId.query(); // Query chain ID
    return chainId;
}
---
// FILE: tests/contracts/ethers/chain.js
import { ChainId } from "@typechain/ethers-v5";
import { solidity } from "solidity-coverage";
import { Chain } from "@nomiclabs/hardhat/ethers-v5";

// The chain test
export const testChain = async () => {
    const chain = await Chain.query(); // Query chain
    return chain;
}
---
// FILE: tests/contracts/ethers/chain.js
import { ChainId } from "@typechain/ethers-v5";