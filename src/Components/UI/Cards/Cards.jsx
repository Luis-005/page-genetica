import React from 'react'
import './Cards.css'
export const Cards = ({children, styles}) => {
  return (
    <div className={styles}>{children}</div>
  )
}
