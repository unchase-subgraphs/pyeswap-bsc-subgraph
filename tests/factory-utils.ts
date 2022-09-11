import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeeToSetterUpdate,
  FeeToUpdate,
  PairCreated
} from "../generated/Factory/Factory"

export function createFeeToSetterUpdateEvent(
  feeToSetter: Address
): FeeToSetterUpdate {
  let feeToSetterUpdateEvent = changetype<FeeToSetterUpdate>(newMockEvent())

  feeToSetterUpdateEvent.parameters = new Array()

  feeToSetterUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "feeToSetter",
      ethereum.Value.fromAddress(feeToSetter)
    )
  )

  return feeToSetterUpdateEvent
}

export function createFeeToUpdateEvent(feeTo: Address): FeeToUpdate {
  let feeToUpdateEvent = changetype<FeeToUpdate>(newMockEvent())

  feeToUpdateEvent.parameters = new Array()

  feeToUpdateEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )

  return feeToUpdateEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}
