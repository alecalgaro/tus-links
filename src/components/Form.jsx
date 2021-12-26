import React from 'react'
import styled from 'styled-components'

export const Form = () => {
    return (
        <form>
            <Label hola/>
            <input type="text" />
        </form>
    )
}

const Label = styled.label`
    font-size: 1rem;
`