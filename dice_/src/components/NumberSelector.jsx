import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({ error, seteError, selectedNumber, setSelectedNumber }) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelecterHandler = (val) => {
        setSelectedNumber(val)
        seteError("")
    }



    return (
        <NumberSelectorComponents>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrNumber.map((val, index) => (
                    <Box
                        isSelected={val == selectedNumber}
                        key={index}
                        onClick={() => numberSelecterHandler(val)}>{val}
                    </Box>
                ))}

            </div>
            <p>Select Number</p>
        </NumberSelectorComponents>
    );
};

export default NumberSelector;

const NumberSelectorComponents = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.error{
    color: red;
}
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`
