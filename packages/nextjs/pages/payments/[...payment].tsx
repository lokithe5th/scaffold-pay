import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ContractData } from "~~/components/payments/ContractData";
import { ContractInteraction } from "~~/components/payments/ContractInteraction";

const Payments: NextPage = () => {
  const router = useRouter();
  // The variables are provided in order token/to/from/amount
  const { payment } = router.query;
  const tokenAddress:any = payment? payment[0].toString() : "";
  const vendor:any = payment? payment[1].toString() : "";
  const userAddress:any = payment? payment[2].toString() : "";
  const amount:any = payment? payment[3].toString() : "";

  return (
    <>
      <Head>
        <title>Payments</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        <ContractData tokenAddress={tokenAddress} userAddress={userAddress} recipient={vendor}/>
        <ContractInteraction tokenAddress={tokenAddress} userAddress={userAddress} recipient={vendor} amount={amount}/>
      </div>
    </>
  );
};

export default Payments;
