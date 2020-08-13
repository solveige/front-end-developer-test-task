import React from 'react'
import ShadowBox from './components/ShadowBox'
import PricesForm from './components/PricesForm'
import { priceModel } from './test/mockData'
import { noop } from './tools'

const TestApp = () => {
  return (
    <ShadowBox
      width="335px"
      height="277px"
      padding="24px 24px 40px 24px"
      margin="20px"
    >
      <PricesForm 
        onSubmit={noop} 
        prices={priceModel}
      />
    </ShadowBox>
  )
}

export default TestApp
