import React from 'react'
import styled from 'styled-components'
import { DARK_GRAY, FAUX_GREEN, BLACK } from '../theme/colors'

export interface ITextProps {
  highlighted?: boolean
}

export const StyledLabel = styled.label<ITextProps>`
  font-weight: normal;
  font-size: 16px;
  height: 24px;
  color: ${props => props.highlighted ? BLACK : DARK_GRAY};

  display: flex;
  align-items: center;
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  user-select: none;
`;

export const CustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${DARK_GRAY};

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    border-radius: 50%;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${FAUX_GREEN};
  }
`;

export const NativeRadio = styled.input.attrs(props => ({
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${CustomRadio} {
    border: 1px solid ${FAUX_GREEN};
    
    &:after {
      display: block;
    }
  }
`;

type IRadioButtonProps = React.HTMLProps<HTMLInputElement> & ITextProps
const RadioButton = ({ onChange, checked, label, value, highlighted }: IRadioButtonProps) => {
  return (
    <StyledLabel highlighted={highlighted}>
      {label}
      <NativeRadio
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <CustomRadio />
    </StyledLabel>
  )
}

export default RadioButton
