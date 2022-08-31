import React from 'react';
import styled from 'styled-components';

const WelcomeSection = () => {

    const Container = styled.div`
        background-color: #4a154b;
        border-bottom-left-radius: 80%;
        border-bottom-right-radius: 80%;

        @media (max-width: 700px) {
            padding: 15px 0 50px 0;
            margin-bottom: 10px;
            border-bottom-left-radius: 50%;
            border-bottom-right-radius:50%

        }


    `
    const Content = styled.div`
        max-width: 1200px;
        padding: 80px 20px;
        margin: 0 auto;
        color:#fff;
        text-align: center;
        @media (max-width: 700px) {
            padding: 15px 0 50px 0;
            margin-bottom: 10px;
        }

    `


    const Title = styled.h2`
        font-size: 3.125rem;
        @media (max-width: 700px) {
            font-size: 2.125rem;
        }
    `

    const ButtonContainer = styled.div`
        margin: 10px;
        display: inline-grid;
        width: max-content;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        @media (max-width: 700px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width:90% ;
            margin: 0 auto;
        }
      
    `

    const WhiteButton = styled.button`
        padding: 19px 45px;
        border:none;
        color:  #541554;
        font-weight: 700;
        border-radius:2px ;

        :hover{
            padding: 18px 45px;

        }

    `
    const ColorButton = styled.button`
        padding: 19px 45px;
        background-color:  #541554;
        color:#fff;
        border: none;
        border-radius: 2px;
        border: 1px solid #fff;
        font-weight: 700;
        cursor: pointer;

        :hover{
            padding: 17px 43px;
            border: 2px solid #fff;

        }

    `



    return (
        <Container>
            <Content>

                <Title>Welcome to your digital HQ.</Title>

                <ButtonContainer>
                    <WhiteButton>TRY FOR FREE</WhiteButton>
                    <ColorButton>TALK TO SALES</ColorButton>
                </ButtonContainer>

            </Content>
        </Container>
    );
};

export default WelcomeSection;