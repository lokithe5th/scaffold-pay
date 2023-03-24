import { utils } from "ethers";
import { erc20ABI, useContractWrite, useNetwork } from "wagmi";
import type { Abi } from "abitype";
import { getParsedEthersError } from "~~/components/scaffold-eth";
import { useTransactor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork, notification } from "~~/utils/scaffold-eth";

/**
 * @dev wrapper for wagmi's useContractWrite hook(with config prepared by usePrepareContractWrite hook) which loads in deployed contract abi and address automatically
 * @param contractName - deployed contract name
 * @param functionName - name of the function to be called
 * @param args - arguments for the function
 * @param value - value in ETH that will be sent with transaction
 */
export const useScaffoldExternalContractWrite = (contractAddress: string, functionName: string, args?: any[], value?: string) => {
  const configuredChain = getTargetNetwork();
  const { chain } = useNetwork();
  const writeTx = useTransactor();

  const wagmiContractWrite = useContractWrite({
    mode: "recklesslyUnprepared",
    chainId: configuredChain.id,
    address: contractAddress,
    abi: erc20ABI as Abi,
    args,
    functionName,
    overrides: {
      value: value ? utils.parseEther(value) : undefined,
    },
  });

  const sendContractWriteTx = async () => {
    if (!contractAddress) {
      notification.error("Target Contract is not deployed, did you forgot to run `yarn deploy`?");
      return;
    }
    if (!chain?.id) {
      notification.error("Please connect your wallet");
      return;
    }
    if (chain?.id !== configuredChain.id) {
      notification.error("You on the wrong network");
      return;
    }

    if (wagmiContractWrite.writeAsync) {
      try {
        const result = await writeTx(wagmiContractWrite.writeAsync());
        console.log("Result: ", result? result["hash"] : "nohash");
        return result;
      } catch (e: any) {
        const message = getParsedEthersError(e);
        notification.error(message);
      }
    } else {
      notification.error("Contract writer error. Try again.");
      return;
    }
  };

  return {
    ...wagmiContractWrite,
    // Overwrite wagmi's write async
    writeAsync: sendContractWriteTx,
  };
};
