/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../typechain-types/common.ts";
import type { Lottery, LotteryInterface } from "../../../../../typechain-types/Lottery.ts";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entryFeeWei",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lotteryEnd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prizeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prizeAmount",
        type: "uint256",
      },
    ],
    name: "LotteryEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "participant",
        type: "address",
      },
    ],
    name: "ParticipantEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PrizeTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "endLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getParticipantByIndex",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "participants",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "participate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "prizeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_entryFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prizeAmount",
        type: "uint256",
      },
    ],
    name: "startNewLottery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "winner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a1a380380610a1a83398101604081905261002f9161006a565b600080546001600160a01b0319163317905560028390556100508242610098565b60035560055550506004805460ff191660011790556100bf565b60008060006060848603121561007f57600080fd5b8351925060208401519150604084015190509250925092565b808201808211156100b957634e487b7160e01b600052601160045260246000fd5b92915050565b61094c806100ce6000396000f3fe6080604052600436106100a55760003560e01c8063785fa62711610061578063785fa627146101775780638da5cb5b1461018d578063cef5ab65146101ad578063d11711a2146101d7578063d70fa7de146101df578063dfbf53ae146101f557005b8063072ea61c146100ae5780631593a8c7146100d75780632737f79d146100ec57806335c1d3491461010c57806361b58b46146101445780636f9fb98a1461016457005b366100ac57005b005b3480156100ba57600080fd5b506100c460025481565b6040519081526020015b60405180910390f35b3480156100e357600080fd5b506100ac61021a565b3480156100f857600080fd5b506100ac610107366004610846565b6104ae565b34801561011857600080fd5b5061012c610127366004610872565b61059f565b6040516001600160a01b0390911681526020016100ce565b34801561015057600080fd5b5061012c61015f366004610872565b6105c9565b34801561017057600080fd5b50476100c4565b34801561018357600080fd5b506100c460055481565b34801561019957600080fd5b5060005461012c906001600160a01b031681565b3480156101b957600080fd5b506004546101c79060ff1681565b60405190151581526020016100ce565b6100ac6105f9565b3480156101eb57600080fd5b506100c460035481565b34801561020157600080fd5b5060045461012c9061010090046001600160a01b031681565b6000546001600160a01b031633146102845760405162461bcd60e51b815260206004820152602260248201527f4f6e6c7920746865206f776e65722063616e20656e6420746865206c6f747465604482015261727960f01b60648201526084015b60405180910390fd5b60045460ff166102a65760405162461bcd60e51b815260040161027b9061088b565b6003544210156102f05760405162461bcd60e51b81526020600482015260156024820152744c6f7474657279207374696c6c206f6e676f696e6760581b604482015260640161027b565b6005544710156103505760405162461bcd60e51b815260206004820152602560248201527f496e73756666696369656e742062616c616e636520746f2070617920746865206044820152647072697a6560d81b606482015260840161027b565b600061035a6106ea565b600480546001600160a81b0319166101006001600160a01b03848116820260ff191692909217928390556005546040805192909404909216815260208101919091529192507fa49efdde740c1e6a0e4eeb9e7b2c5f9305ca78fc5f61c672be3688209feade1b910160405180910390a160045460055460405160009261010090046001600160a01b031691908381818185875af1925050503d806000811461041e576040519150601f19603f3d011682016040523d82523d6000602084013e610423565b606091505b505090508061046b5760405162461bcd60e51b81526020600482015260146024820152734661696c656420746f2073656e64207072697a6560601b604482015260640161027b565b60055460408051831515815260208101929092527f2b532de3a953e89eb6814299e32b799a5724025899bd0487a1b4fad4de3f0e64910160405180910390a15050565b6000546001600160a01b031633146105175760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920746865206f776e65722063616e2073746172742061206e6577206c6044820152656f747465727960d01b606482015260840161027b565b60045460ff161561056a5760405162461bcd60e51b815260206004820152601d60248201527f50726576696f7573206c6f7474657279207374696c6c20616374697665000000604482015260640161027b565b600283905561057982426108b7565b600355600581905561058d6001600061080c565b50506004805460ff1916600117905550565b600181815481106105af57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000600182815481106105de576105de6108de565b6000918252602090912001546001600160a01b031692915050565b60045460ff1661061b5760405162461bcd60e51b815260040161027b9061088b565b60025434146106625760405162461bcd60e51b8152602060048201526013602482015272496e636f727265637420656e7472792066656560681b604482015260640161027b565b60035442106106a75760405162461bcd60e51b8152602060048201526011602482015270131bdd1d195c9e481a185cc8195b991959607a1b604482015260640161027b565b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b03191633179055565b600080546001600160a01b031633146107455760405162461bcd60e51b815260206004820181905260248201527f4f6e6c7920746865206f776e65722063616e207069636b20612077696e6e6572604482015260640161027b565b60045460ff166107675760405162461bcd60e51b815260040161027b9061088b565b6003544210156107b15760405162461bcd60e51b81526020600482015260156024820152744c6f7474657279207374696c6c206f6e676f696e6760581b604482015260640161027b565b60015460408051426020820152449181019190915260608101829052600091906080016040516020818303038152906040528051906020012060001c6107f791906108f4565b9050600181815481106105de576105de6108de565b508054600082559060005260206000209081019061082a919061082d565b50565b5b80821115610842576000815560010161082e565b5090565b60008060006060848603121561085b57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561088457600080fd5b5035919050565b6020808252601290820152714c6f7474657279206e6f742061637469766560701b604082015260600190565b808201808211156108d857634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052603260045260246000fd5b60008261091157634e487b7160e01b600052601260045260246000fd5b50069056fea2646970667358221220ecc7fea62719265d32700a8b94b5793e9599a0aa4bd183502b4b4716ef1d77a264736f6c63430008170033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryFeeWei: PromiseOrValue<BigNumberish>,
    _lotteryEnd: PromiseOrValue<BigNumberish>,
    _prizeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(
      _entryFeeWei,
      _lotteryEnd,
      _prizeAmount,
      overrides || {}
    ) as Promise<Lottery>;
  }
  override getDeployTransaction(
    _entryFeeWei: PromiseOrValue<BigNumberish>,
    _lotteryEnd: PromiseOrValue<BigNumberish>,
    _prizeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryFeeWei,
      _lotteryEnd,
      _prizeAmount,
      overrides || {}
    );
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
