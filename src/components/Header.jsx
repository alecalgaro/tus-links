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
    margin: 2rem 0;
`

const ImgLogo = styled.img`
    width: 12rem;
    height: 7rem;

    @media (min-width: 768px) {
        width: 15rem;
        height: 8rem;
    }
`
