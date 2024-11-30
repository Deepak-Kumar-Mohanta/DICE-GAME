import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    background: #000000;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.6s background ease-in;

    &:hover{
        background-color: #ffffff;
        border: 1px solid black;
        color: #000000;
        transition: 0.5s background ease-in;
    }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

  &:hover{
        background-color: #000000;
        border: 1px solid transparent;
        color: white;
    }
`;