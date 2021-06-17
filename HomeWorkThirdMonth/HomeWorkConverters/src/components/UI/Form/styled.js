import styled from 'styled-components';

export const StFormDiv = styled.div`
    background-color: #171730;
    height: 80vh;
    display: flex;
    width: 35%;
    margin: 100px 0 0 0 ;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    ${({ fontFamily = 'fantasy' }) => fontFamily && `font-family: ${fontFamily}`};
    border-radius: 20px;
    color: white;
        h5{
          font-size: 35px;
          padding: 0;
          margin: 20px 0 20px 0;
        }
        button{margin-bottom: 10px}
        @media (max-width: 767px){
            width: 100%;
            border-radius: 0px;
        }
`;
