import styled from 'styled-components';

export const StHeader = styled.div`
background-color: #171730;
min-height: 13vh;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
${({ fontFamily = 'fantasy' }) => fontFamily && `font-family: ${fontFamily}`};
top: 0px;
    h1{
        font-size: 35px;
        margin: 10px;
    }
`;
