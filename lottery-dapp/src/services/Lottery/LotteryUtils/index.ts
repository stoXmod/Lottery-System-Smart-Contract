/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../typechain-types/common.ts";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "endLottery()": FunctionFragment;
    "entryFee()": FunctionFragment;
    "getContractBalance()": FunctionFragment;
    "getParticipantByIndex(uint256)": FunctionFragment;
    "lotteryActive()": FunctionFragment;
    "lotteryEnd()": FunctionFragment;
    "owner()": FunctionFragment;
    "participants(uint256)": FunctionFragment;
    "participate()": FunctionFragment;
    "prizeAmount()": FunctionFragment;
    "startNewLottery(uint256,uint256,uint256)": FunctionFragment;
    "winner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "endLottery"
      | "entryFee"
      | "getContractBalance"
      | "getParticipantByIndex"
      | "lotteryActive"
      | "lotteryEnd"
      | "owner"
      | "participants"
      | "participate"
      | "prizeAmount"
      | "startNewLottery"
      | "winner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "endLottery",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "entryFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipantByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryEnd",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participants",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "participate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prizeAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startNewLottery",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "winner", values?: undefined): string;

  decodeFunctionResult(functionFragment: "endLottery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipantByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lotteryEnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prizeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startNewLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;

  events: {
    "LotteryEnded(address,uint256)": EventFragment;
    "ParticipantEntered(address)": EventFragment;
    "PrizeTransferred(bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LotteryEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParticipantEntered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrizeTransferred"): EventFragment;
}

export interface LotteryEndedEventObject {
  winner: string;
  prizeAmount: BigNumber;
}
export type LotteryEndedEvent = TypedEvent<
  [string, BigNumber],
  LotteryEndedEventObject
>;

export type LotteryEndedEventFilter = TypedEventFilter<LotteryEndedEvent>;

export interface ParticipantEnteredEventObject {
  participant: string;
}
export type ParticipantEnteredEvent = TypedEvent<
  [string],
  ParticipantEnteredEventObject
>;

export type ParticipantEnteredEventFilter =
  TypedEventFilter<ParticipantEnteredEvent>;

export interface PrizeTransferredEventObject {
  success: boolean;
  amount: BigNumber;
}
export type PrizeTransferredEvent = TypedEvent<
  [boolean, BigNumber],
  PrizeTransferredEventObject
>;

export type PrizeTransferredEventFilter =
  TypedEventFilter<PrizeTransferredEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    endLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getContractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getParticipantByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lotteryActive(overrides?: CallOverrides): Promise<[boolean]>;

    lotteryEnd(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    participate(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    prizeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    startNewLottery(
      _entryFee: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    winner(overrides?: CallOverrides): Promise<[string]>;
  };

  endLottery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryFee(overrides?: CallOverrides): Promise<BigNumber>;

  getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getParticipantByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  lotteryActive(overrides?: CallOverrides): Promise<boolean>;

  lotteryEnd(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  participants(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  participate(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  prizeAmount(overrides?: CallOverrides): Promise<BigNumber>;

  startNewLottery(
    _entryFee: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    _prizeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  winner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    endLottery(overrides?: CallOverrides): Promise<void>;

    entryFee(overrides?: CallOverrides): Promise<BigNumber>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipantByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    lotteryActive(overrides?: CallOverrides): Promise<boolean>;

    lotteryEnd(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    participate(overrides?: CallOverrides): Promise<void>;

    prizeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    startNewLottery(
      _entryFee: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    winner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LotteryEnded(address,uint256)"(
      winner?: null,
      prizeAmount?: null
    ): LotteryEndedEventFilter;
    LotteryEnded(winner?: null, prizeAmount?: null): LotteryEndedEventFilter;

    "ParticipantEntered(address)"(
      participant?: null
    ): ParticipantEnteredEventFilter;
    ParticipantEntered(participant?: null): ParticipantEnteredEventFilter;

    "PrizeTransferred(bool,uint256)"(
      success?: null,
      amount?: null
    ): PrizeTransferredEventFilter;
    PrizeTransferred(
      success?: null,
      amount?: null
    ): PrizeTransferredEventFilter;
  };

  estimateGas: {
    endLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryFee(overrides?: CallOverrides): Promise<BigNumber>;

    getContractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getParticipantByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryActive(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryEnd(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    participate(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    prizeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    startNewLottery(
      _entryFee: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    winner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    endLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContractBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParticipantByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    participate(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    prizeAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startNewLottery(
      _entryFee: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _prizeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    winner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
