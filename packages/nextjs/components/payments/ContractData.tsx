import { useEffect, useRef, useState } from "react";
import { BigNumber } from "ethers";
import Marquee from "react-fast-marquee";
import { useScaffoldExternalContractRead } from "~~/hooks/scaffold-eth/useScaffoldExternalContractRead";
import { useAnimationConfig, useScaffoldContractRead, useScaffoldEventSubscriber } from "~~/hooks/scaffold-eth";

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
  console.log("targetAddress: ", targetAddress);
  console.log("User address: " , userTarget);
  const {data: name } = useScaffoldExternalContractRead<string>(targetAddress, functionName);
  const {data: userBalance} = useScaffoldExternalContractRead<string>(targetAddress, functionUserBalance, [userTarget])

  console.log("The read contract is: ", {data: name});
  console.log("The user balance is: ", { data: userBalance});

  const { data: totalCounter } = useScaffoldContractRead<BigNumber>("YourContract", "totalCounter");
  //const { data : tokenName } = useScaffoldContractRead("ERC20", "name");
  //console.log(tokenName)

  const { data: currentGreeting, isLoading: isGreetingLoading } = useScaffoldContractRead<string>(
    "YourContract",
    "greeting",
  );

  useScaffoldEventSubscriber("YourContract", "GreetingChange", (greetingSetter, newGreeting, premium, value) => {
    console.log(greetingSetter, newGreeting, premium, value);
  });

  const { showAnimation } = useAnimationConfig(totalCounter);

  const showTransition = transitionEnabled && !!currentGreeting && !isGreetingLoading;

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
        <div className="gap-5 bg-base-200 bg-opacity-80 rounded-xl shadow-lg">
          <div className="bg-w bg-[length:100%_100%] text-lg text-center">
          <p className="text-xl">PAYMENT DETAILS</p>
          <p>Token: {name}</p>
          <p>Your Balance: { userBalance? userBalance.toString() : 0}</p>
          <p>Destination Address: {recipientAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
