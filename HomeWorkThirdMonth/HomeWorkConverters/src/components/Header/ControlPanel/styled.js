import styled from 'styled-components';

export const StControl = styled.div`
background-color: #171730;
width:70%;
color: white;
min-height: 13vh;
display: flex;
justify-content: center;
align-items: center;
    h1{
        font-size: 20px;
        margin: 10px;
    }
`;
export const StModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: '80vh',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',

        background: 'rgba(0,0,0,0.6)',
    },
};
export const StNotes = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 10px;
    color: white;
`;
export const StUl = styled.ul`
    text-decoration: none;
`;
export const StLi = styled.li`
    display: flex;
    font-size: 25px;
    justify-content: space-evenly;
    width: 100%;
        span{
            margin: 10px;
            color:yellow;
        }
        p{
            color:blue;
        }
`;
