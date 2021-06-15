import styled from 'styled-components';

const bgInpColorDefault = '#F6F7FA';
const bgFocusColorDefault = '#716f6f'; // ToDo all colors move to color matrix
const focusColorDefault = 'white';
const colorDefault = 'black';

export const StLabel = styled.label`
   ${({ margin = '0 0px 10px 0' }) => margin && `margin: ${margin}`};
   ${({ display = 'flex' }) => display && `display: ${display}`}
   padding: 0;
   text-align: center;
   ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
   ${({ display = 'block' }) => display && `display: ${display}`};
   ${({ fontWeight = 'bold' }) => fontWeight && `font-weight: ${fontWeight}`};
`;

export const StInput = styled.input`
    width: 100%;
    height: ${({ inputHeight = '100%' }) => inputHeight};
    padding: ${({ padding = '5px' }) => padding};
    ${({ margin }) => margin && `margin: ${margin}`};
    ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
    box-sizing: border-box;
     font-family: 'Play', sans-serif;
    ${({ brRadius }) => brRadius && `border-radius: ${brRadius}`};
    background-color: ${({ bgColor = bgInpColorDefault }) => (bgColor)};
    ${({ outlineInput = 'none' }) => outlineInput && `outline: ${outlineInput}`};
    ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
    color: ${({ color = colorDefault }) => color};
    font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    ${({ textAlignInput }) => textAlignInput && `text-align: ${textAlignInput}`}
    
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
    &:focus {
      background:${({ bgFocusColor = bgFocusColorDefault }) => bgFocusColor};
      color: ${({ focusColor = focusColorDefault }) => focusColor};
      &::placeholder {
        
        color: ${({ color = focusColorDefault }) => color};
      }
    }
    
    &::placeholder {
      color: ${({ color = colorDefault }) => color};
      font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    }
`;

export const StErrorSpan = styled.span`
    color: ${({ color = 'red' }) => color}; // ToDo Move color to color matrix
`;

export const StInputContainer = styled.div`
    ${({ width = '100%' }) => width && `width: ${width}`};
    ${({ height = '50px' }) => height && `height: ${height}`};
`;
