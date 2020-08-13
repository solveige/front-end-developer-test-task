import React, { useState, useCallback } from 'react'
import { FlexBoxCenter, AddToCartButton, PriceToSubmitParagraph, SubmitButtonParagraph, FlexBox, PriceOptionWrapper, PriceTitle, PriceParagraph } from './styled'
import { IPrice } from '../../types'
import { noop } from '../../tools'
import { SUBMIT_BUTTON_TEXT, FORM_COLUMN_TITLE_RIGHT, FORM_COLUMN_TITLE_LEFT, UAH, GRAM } from '../../translations/index'
import SvgCartComponent from '../../icons/cart'
import RadioButton from '../../common/RadioButton'

interface ITeaFormProps {
  onSubmit: (entity: IPrice) => void
  prices: IPrice[]
  initialSelected?: number
  onChange?: (entity: IPrice) => void
  submitText?: string
  formTitleRight?: string
  formTitleLeft?: string
  currency?: string
  unit?: string
}

function PricesForm({
  onSubmit,
  prices,
  initialSelected = 0,
  onChange = noop,
  submitText = SUBMIT_BUTTON_TEXT,
  formTitleRight = FORM_COLUMN_TITLE_RIGHT,
  formTitleLeft = FORM_COLUMN_TITLE_LEFT,
  currency = UAH,
  unit = GRAM
}: ITeaFormProps) {
  const [selected, setSelected] = useState<IPrice>(prices[initialSelected])

  const handleChange = useCallback((entity: IPrice) => {
    setSelected(entity)
    onChange(entity)
  }, [])

  return (
    <div>
      <FlexBox>
        <PriceTitle>{formTitleLeft}</PriceTitle>
        <PriceTitle>{formTitleRight}</PriceTitle>
      </FlexBox>

      {
        prices.map((obj, index) => (
          <PriceOptionWrapper key={obj.id}>
            <RadioButton
              onChange={() => handleChange(obj)}
              value={index}
              checked={obj.id === selected.id}
              label={`${obj.type} ${unit}`}
              highlighted={obj.id === selected.id}
            />
            <PriceParagraph highlighted={obj.id === selected.id}>{obj.price} {currency}</PriceParagraph>
          </PriceOptionWrapper>
        ))
      }

      <FlexBoxCenter>
        <PriceToSubmitParagraph>
          {selected.price} {currency}
        </PriceToSubmitParagraph>

        <AddToCartButton onClick={() => onSubmit(selected)}>
          <SubmitButtonParagraph>
            <SvgCartComponent />
            {submitText}
          </SubmitButtonParagraph>
        </AddToCartButton>
      </FlexBoxCenter>
    </div>
  )
}

export default PricesForm 