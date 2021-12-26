import React from 'react'
import styled from 'styled-components'

export const Header = () => {
    return (
        <HeaderContainer>
            <ImgLogo src="../assets/logo-tus-links.png" alt="logo" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`

const ImgLogo = styled.img`
    width: 10rem;
    height: 6rem;
`
