<div align="center">
Scaffold-Pay
A simple, open-source, and customizable payment solution for your token

</div>
Tired of Payment Processors taking a cut of your sales? Want to accept a custom token as payment for a product but can't find a free payment flow to embed in your store? Scaffold-Pay is here to help!

🚀 How It Works
You redirect customers to the Scaffold-Pay site, passing in the parameters: scaffold-pay.vercel.app/tokenAddress/to/from/amount. Scaffold-Pay makes it effortless for the user to pay.

For example, directing a user to:  
`scaffold-pay.vercel.app/0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd/yourAddress/userAddress/100`  
This would open the page to pay 100 DAI (testnet) tokens to yourAddress, from userAddress. The user connects their wallet, reviews the transaction, and clicks send. As simple as that.

A companion npm package is under development to allow easy embedding into your shop's payment flow.

Why add intermediaries when the chain is doing all the work already?

<div align="center">
This is a proud BuidlGuidl contribution.

</div>
⚠️ Important
Please note that Scaffold-Pay is not yet deployed to handle mainnet Ethereum transactions, although this is expected to happen soon. Forking and using the code is encouraged if you need a custom solution ASAP.

🤝 Contributing to Scaffold-Eth 2
We welcome contributions to Scaffold-Eth 2! Please see CONTRIBUTING.MD for more information and guidelines for contributing to Scaffold-Eth 2.

