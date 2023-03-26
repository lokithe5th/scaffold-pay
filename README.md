# Scaffold-Pay  

Are you tired of Payment Processors taking a cut of your sales?  

Want to accept a custom token as payment for a product, but can't find a free payment flow to embed in your store?  

Scaffold-Pay is simple and open-source. You redirect customers to the Scaffold-Pay site, passing in the paramaters, `scaffold-pay.vercel.app/tokenAddress/to/from/amount`, and it makes it effortless for the user to pay.

For example, directing a user to `scaffold-pay.vercel.app/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd/yourAddress/userAddress/100` would open the page to pay 100 DAI (testnet) tokens to `yourAddress`, from `userAddress`. The user connects their wallet and reviews the transaction, and clicks send. As simple as that.

The aim is to release a companion npm package that allows you to easily embed this in your shop's payment flow. The npm package is still a work-in-progress.  

Why add intermediaries when the chain is doing all the work already?

This is a proud BuidlGuidl contribution.

## Important  

Please note that scaffold-pay is not yet deployed to handle mainnet Ethereum transactions, although this is expected to happen soon. Forking and using the code is encouraged if you need a custom solution asap.
## Contributing to Scaffold-Eth 2

We welcome contributions to Scaffold-Eth 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/se-2/blob/master/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-Eth 2.

