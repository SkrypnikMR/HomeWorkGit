import styled from 'styled-components';

export const StSelect = styled.select`
  ${({ width = '80%' }) => width && `width: ${width}`};
  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  option{
      background-color: gray;
      &:hover{
          background-color: gray;
      }
  }
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  :hover{
    background-color: gray;
    color:white;
    border: none;
  }
`;
export const StOption = styled.option`
  :hover{
      background-color: blue;
  }
`;
