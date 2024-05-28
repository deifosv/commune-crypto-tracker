import React, { useContext } from 'react'

import BtcPrice from '../BtcPrice/index'
import headerImg from '../../imgs/cryptos.svg'

import { ThemeContext } from '../../contexts'

import './style.scss'

const Header = () => {
  const { theme, isSwitched } = useContext(ThemeContext)

  return (
    <div
      className={
        isSwitched ? 'homebanner banner-dark' : 'homebanner banner-light'
      }
    >
      <img src={headerImg} alt="prices pic" />
      <div className="homebanner__wrapper" id="home">
        <BtcPrice />
        <h1 style={{ color: theme.homeBanner, fontSize: '60px' }}>
          Commune AI CryptoTracker
        </h1>
        <h2
          className="homebanner__subtitle"
          style={{ color: theme.homeBanner }}
        >
          Cryptocurrencies data and news
        </h2>
      </div>
    </div>
  )
}

export default Header
