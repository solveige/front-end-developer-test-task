import styled from 'styled-components'
import { DARK_GRAY, BLACK, WHITE, FAUX_GREEN } from '../../theme/colors'
import { ITextProps } from '../../common/RadioButton'

export const FlexBoxCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;

export const AddToCartButton = styled.button`
  width: 137px;
  height: 48px;
  background: ${FAUX_GREEN};
  border-radius: 8px;
  color: ${WHITE};
  border: none;
  cursor: pointer;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const PriceOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const PriceToSubmitParagraph = styled.p`
  font-weight: normal;
  font-size: 24px;
  text-align: right;
`;

export const SubmitButtonParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const PriceTitle = styled.p`
  font-weight: normal;
  font-size: 18px;
  color: ${BLACK};
`;

export const PriceParagraph = styled.p<ITextProps>`
  font-weight: normal;
  font-size: 16px;
  color: ${props => props.highlighted ? BLACK : DARK_GRAY};
`;
