import styled from 'styled-components';

export const StFormDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 85vh;
    display: flex;
    width: 35%;
    margin: 50px auto;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 20px;
    color: white;
        p{
          font-size: 65px;
          padding: 0;
          margin: 20px 0 20px 0;
        }
        button{margin-bottom: 10px}
        @media (max-width: 767px){
            width: 100%;
            border-radius: 0px;
        }
`;
