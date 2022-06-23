import React, {memo} from 'react'
import {getPublicAddressService} from '@/services/WalletConnect'

function WalletConnect() {
  var WalletAddress = ''
  const handelRegisterWallet = async () => {
    try {
      const publicAddress = await getPublicAddressService()
      if(!publicAddress){
        return
      }
    } catch (error) {
      console.log('Please check your wallet and try again!')
    }
  }

  const handelConnectWallet = (e) => {
    e.preventDefault()
    handelRegisterWallet()
  }
  const renderWalletConnect = () => {
    if (WalletAddress) {
      return (
        <>
          <div className='menu-img online'>
            <img src='assets/img/user/profile.jpg' alt='Profile' height='60' />
          </div>
          <div className='menu-text d-sm-block d-none'>username@account.com</div>
        </>
      )
    } else {
      return (
        <button onClick={handelConnectWallet} type='button' className='btn btn-theme'>
          Connect Wallet
        </button>
      )
    }
  }
  return renderWalletConnect()
}
export default memo(WalletConnect)
