import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts'
import { Crypto } from '../../types'
import Image from '../Image/index'
import AddCryptoButton from '../AddCryptoButton/index'

import './style.scss'

const CryptoItem = ({
  id,
  image,
  symbol,
  name,
  price,
  percentageChange,
  marketCap,
  supply,
  addCrypto,
}: Crypto) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <tr className="crypto-info__list" style={{ color: theme.text }}>
        <td>
          <Image image={image} name={name} small />
        </td>
        <td>{symbol}</td>
        <td>
          <NavLink to={`/crypto/${id}`} className="crypto-info__link">
            {name}
          </NavLink>
        </td>
        <td>{price}</td>
        <td
          style={percentageChange > 0 ? { color: 'green' } : { color: 'red' }}
        >
          {percentageChange}%
        </td>
        <td className="hide-mobile">{marketCap}</td>
        <td className="hide-mobile">{supply}</td>
        <td className="crypto-info__button">
          <AddCryptoButton addCrypto={addCrypto} id={id} />
        </td>
      </tr>
    </div>
  )
}

export default CryptoItem
