import React from 'react'
import EmailData from '../BlogComponent/EmailData'
import Feature from '../BlogComponent/Feature'
import MarketZen from '../BlogComponent/MarketZen'
import Search from '../BlogComponent/Search'

const Blog = () => {
  return (
    <div>
      <Search/>
      <EmailData/>
      <Feature/>
      <MarketZen/>
    </div>
  )
}

export default Blog