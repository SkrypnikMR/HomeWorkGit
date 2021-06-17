import styled from 'styled-components';

export const StConverter = styled.div`
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: fantasy;
`;
