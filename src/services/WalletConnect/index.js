import Web3 from 'web3'
let web3;
export const getPublicAddressService = async () => {
  if (!window.ethereum) {
    window.log('Please install or enable MetaMask first.')
    return ''
  }

  if (!web3) {
    try {
      await window.ethereum.enable()
      web3 = new Web3(window.ethereum)
    } catch (error) {
      window.log('You need to allow MetaMask.', error)
      return ''
    }
  }
  const coinbase = await web3.eth.getCoinbase()
  if (!coinbase) {
    console.log('Please activate MetaMask.')
    return ''
  }
  const publicAddress = await coinbase.toLowerCase()
  // const bigBalance = await web3.eth.getBalance(publicAddress);
  // const balance = web3.utils.fromWei(bigBalance, "ether");
  return publicAddress
}
