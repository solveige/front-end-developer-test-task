import React from 'react'
import { action } from '@storybook/addon-actions'
import TestApp from './'
import ShadowBox from './components/ShadowBox'
import PricesForm from './components/PricesForm'
import { priceModel, priceModelWithLongNumber } from './test/mockData'

export default {
  title: 'Common/TestApp',
}

const actions = {
  onSubmit: action('onSubmit'),
  onChange: action('onChange'),
}

export const Regular: React.FC = () => (
  <TestApp />
)

export const PriceForm = () => (
  <ShadowBox
    width="335px"
    height="277px"
    padding="24px 24px 40px 24px"
    margin="20px"
  >
    <PricesForm
      prices={priceModel}
      {...actions}
    />
  </ShadowBox>
)

export const PriceFormWithCustomTexts = () => (
  <ShadowBox
    width="335px"
    height="277px"
    padding="24px 24px 40px 24px"
    margin="20px"
  >
    <PricesForm
      prices={priceModel}
      currency="$"
      unit="g"
      formTitleLeft="Weight"
      formTitleRight="Price"
      submitText="Add to Cart"
      {...actions}
    />
  </ShadowBox>
)

export const PriceFormLongText = () => (
  <ShadowBox
    width="335px"
    height="277px"
    padding="24px 24px 40px 24px"
    margin="20px"
  >
    <PricesForm
      prices={priceModelWithLongNumber}
      {...actions}
    />
  </ShadowBox>
)
