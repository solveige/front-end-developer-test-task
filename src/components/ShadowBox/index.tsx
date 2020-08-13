import React from 'react'
import styled from 'styled-components'
import { WHITE } from '../../theme/colors'

interface IWrapperDivProps {
  width?: string
  height?: string
  padding?: string
  margin?: string
  maxWidth?: string
}

const WrapperDiv = styled.div<IWrapperDivProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  max-width: ${props => props.maxWidth || '80vw'};
  background: ${WHITE};
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
`;

const ShadowBox: React.FC<IWrapperDivProps> = ({ children, ...props } ) => (
  <WrapperDiv {...props} >
    {children}
  </WrapperDiv>
)

export default ShadowBox