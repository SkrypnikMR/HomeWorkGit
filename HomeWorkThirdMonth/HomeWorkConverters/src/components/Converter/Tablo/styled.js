import styled from 'styled-components';

export const StTablo = styled.div`
    ${({ transition = 'all 5000ms ease-in-out' }) => transition && `transition: ${transition}`};
    height: 50px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: fantasy;
    font-size: 30px;
`;
export const StP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const StSpan = styled.span`
    ${({ color = 'blue' }) => color && `color: ${color}`};
    padding: 5px;
`;
