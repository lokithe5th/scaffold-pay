import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import FallingDollarBills from "~~/components/FallingDollarBills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">🤑🤑 scaffold-pay 🤑🤑</span>
          </h1>
          <p className="text-center text-lg">
            A simple way to accept any ERC20 token as payment from your customers.
          </p>
          <p className="text-center text-lg">
            Need to accept tokens not supported by Payment Processors? 😟 
          </p>
          <p className="text-center text-lg">
            No problem! 
          </p>
          <p>Simply redirect your users with <code>/payments/tokenAddress/toAddress/fromAddress/amount</code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
              An npm package (still a work in progress) <code>scaffold-pay</code> can be integrated into your checkout page. It will listen for an event that matches your transaction data, and return true once it has executed successfully.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
              Redirect your users here and Scaffold-Pay fills in the Payment Details. </p>
              <p>Experiment with{" "}
                <Link href="/payments/token/toAddress/fromAddress/100000" passHref className="link">
                  Payments
                </Link>{" "}
                to get an idea for what your users will see.
              </p>
            </div>
          </div>
        </div>
        <FallingDollarBills />
      </div>
    </>
  );
};

export default Home;
