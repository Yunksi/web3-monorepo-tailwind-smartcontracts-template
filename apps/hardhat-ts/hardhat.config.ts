import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY ?? ''],
    },
  },
};

export default config;
