import { useEffect, useRef, useState } from "react";
import { BigNumber } from "ethers";
import Marquee from "react-fast-marquee";
import { useScaffoldExternalContractRead } from "~~/hooks/scaffold-eth/useScaffoldExternalContractRead";
import { useAnimationConfig, useScaffoldContractRead, useScaffoldEventSubscriber } from "~~/hooks/scaffold-eth";
import { Address } from "../scaffold-eth";

const MARQUEE_PERIOD_IN_SEC = 5;

export const ContractData = (tokenAddress:any, userAddress:any) => {
  
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRightDirection, setIsRightDirection] = useState(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState(0);
  const tokenObject = tokenAddress;

  const containerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const functionName:string = "name";
  const functionSymbol:string = "symbol";
  const functionUserBalance:string = "balanceOf"
  console.log("in contractData: ", tokenObject);

  const targetAddress:string = tokenAddress["tokenAddress"];
  const userTarget:string = tokenAddress["userAddress"];
  const recipientAddress:string = tokenAddress["recipient"];

  const {data: name } = useScaffoldExternalContractRead<string>(targetAddress, functionName);
  const {data: userBalance} = useScaffoldExternalContractRead<string>(targetAddress, functionUserBalance, [userTarget])

  console.log("The read contract is: ", {data: name});
  console.log("The user balance is: ", { data: userBalance});

  useScaffoldEventSubscriber("YourContract", "GreetingChange", (greetingSetter, newGreeting, premium, value) => {
    console.log(greetingSetter, newGreeting, premium, value);
  });

  useEffect(() => {
    if (transitionEnabled && containerRef.current && greetingRef.current) {
      setMarqueeSpeed(
        Math.max(greetingRef.current.clientWidth, containerRef.current.clientWidth) / MARQUEE_PERIOD_IN_SEC,
      );
    }
  }, [transitionEnabled, containerRef, greetingRef]);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">
      <div
        className="flex flex-col max-w-md bg-base-200 bg-opacity-70 rounded-2xl shadow-lg px-5 py-4 w-full"
      >
        <div className="flex justify-center items-center rounded-lg bg-gray-100 p-5 ">
          <div className="bg-w bg-[length:100%_100%] text-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Details</h2>
          <p>Token: {name}</p>
          <p>Your Balance: { userBalance? parseInt(userBalance)/10**18 : 0}</p>
          <p>Destination Address:</p>
          <div className="mx-auto"><Address address={recipientAddress}></Address></div>
          </div>
        </div>
      </div>
    </div>
  );
};
