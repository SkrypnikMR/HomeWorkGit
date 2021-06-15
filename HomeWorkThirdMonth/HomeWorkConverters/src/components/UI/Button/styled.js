import styled from 'styled-components';

const bgColorDefault = '#5573C1'; // ToDo all colors move to color matrix
const colorDefault = 'white';
const focusColorDefault = 'black';
const disabledColor = '#666666';
const bgColorDisabled = '#cccccc';
const disabledBorder = '1px solid #999999';

export const StButton = styled.button`
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  font-family: 'Play', sans-serif;
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ focusColorDefault = colorDefault }) => focusColorDefault};
  background-color: ${({ bgColor = bgColorDefault }) => bgColor};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius}; 
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  font-size: ${({ fontSize = '16px' }) => fontSize};
  &:hover {
    color: ${({ focusColor = focusColorDefault }) => focusColor}; 
    border: ${({ border = 'none' }) => border};
    }
  &:focus {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    }
  &:disabled{ 
    border: ${({ border = disabledBorder }) => border};
    background-color: ${({ bgColor = bgColorDisabled }) => bgColor};
    color: ${({ focusColor = disabledColor }) => focusColor};
    }
`;
