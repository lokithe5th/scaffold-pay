import type { Abi } from "abitype";
import { useContractRead } from "wagmi";
import { getTargetNetwork } from "~~/utils/scaffold-eth";
import { erc20ABI } from "wagmi";

/**
 * @dev wrapper for wagmi's useContractRead hook which loads in deployed contract contract abi, address automatically
 * @param contractName - deployed contract name
 * @param functionName - name of the function to be called
 * @param args - args to be passed to the function call
 * @param readConfig - extra wagmi configuration
 */
export const useScaffoldExternalContractRead = <TReturn = any>(
  contractAddress: string,
  //contractName: string,
  functionName: string,
  args?: any[],
  readConfig?: Parameters<typeof useContractRead>[0],
) => {

  const receivedArgs:any[] = args? args : [];
  const configuredChain = getTargetNetwork();

  return useContractRead({
    chainId: configuredChain.id,
    functionName: functionName,
    address: contractAddress,
    abi: erc20ABI as Abi,
    watch: true,
    args: receivedArgs,
    ...readConfig,
  }) as Omit<ReturnType<typeof useContractRead>, "data"> & {
    data: TReturn;
  };
};
