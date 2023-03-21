import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ContractData } from "~~/components/payments/ContractData";
import { ContractInteraction } from "~~/components/payments/ContractInteraction";

const Payments: NextPage = () => {
  const router = useRouter();
  const { payment, vendor, amount } = router.query;
  const tokenAddress:any = payment? payment.toString() : "";
  //const tokenAddress:string = payment? payment[0] : ""
  //const tokenAddress:string = payment?.toString();
  console.log("In payments: ",tokenAddress, vendor, amount);

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
        <ContractInteraction />
        <ContractData address={tokenAddress}/>
      </div>
    </>
  );
};

export default Payments;
