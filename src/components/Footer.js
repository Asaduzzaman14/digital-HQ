import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    const Title = styled.h3`
    font-size: 3.125rem;
    @media (max-width: 700px) {
        font-size: 2.125rem;
    }
`
    const FooterContainer = styled.div``
    const ListContent = styled.div``
    const Logo = styled.div``
    const Hedding = styled.h3``
    const List = styled.li``


    return (
        <FooterContainer>

            <ListContent>
                <Logo>
                    <img src="https://slack.com/intl/en-in/" alt="" />
                </Logo>

            </ListContent>


        </FooterContainer>
    );
};

export default Footer;