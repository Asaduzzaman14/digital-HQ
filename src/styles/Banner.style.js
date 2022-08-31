import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: #541554;

`

export const FullBanner = styled.div`
    max-width:1200px;
    padding:20px 20px 50px 20px ;
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    font-family:sans-serif;
    font-weight: 500;
    margin: 0 auto;


    @media (min-width: 700px) {
        grid-template-columns: repeat(2 ,1fr);

    }

`
export const BannerDesc = styled.div`
    color:#fff;
    margin: 0 auto;
    /* text-align: justify; */
    h1{
       font-size: 30px;
       font-size: 3rem;
    }
    p{
    }

    span{
        color: #ecb22e ;
    }

    @media (min-width: 700px) {
    
    }

`
export const BannerVideo = styled.div`


`


export const Buttons = styled.div`
    /* width: 300px; */
    color:#541554;
    border-radius: 5px;
    display: grid;
    grid-gap: 20px;
    border:none;
    outline: 0;
    font-weight:bold;
    text-align: center;

    input{
        padding: 15px 30px;
    

    }

    button{
        background-color: #fff;
        padding: 15px 30px;

        
    }
    

`


export const RightContainer = styled.div``