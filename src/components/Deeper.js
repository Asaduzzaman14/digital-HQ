import React from 'react';
import styled from 'styled-components';

const Deeper = () => {

    const datas = [
        {
            "name": "",
            "img": "https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-01.png",
            "title": "Slack as your digital HQ",
            "link": "SEE ALL"
        },
        {
            "name": "Resource",
            "img": "https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg",
            "title": "Slack as your digital HQ",
            "link": "READ MORE"
        },
        {
            "name": "Webinar",
            "img": "https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg",
            "title": "Slack as your digital HQ",
            "link": "WATCH NOW"
        },
        {
            "name": "E-book",
            "img": "https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg",
            "title": "Slack as your digital HQ",
            "link": "Get E-Book"
        },
    ]


    const Container = styled.div`
        max-width: 1200px;
        padding:20px;
        margin: 0 auto;
        background-color: #f4ede4;
    `
    const Title = styled.h2`
        text-align: center;
    `

    const Cards = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap:15px;
        justify-items: center;

        @media (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);


        }

`


    const Card = styled.div`
        background-color: #fff;
        padding:10px;
        border-radius: 5px;
        width: 220px;
        height: 320px;
        &:nth-child(1){
            background-color:#4a154b ;
            color: #fff;
            display: grid;  
            

        }

        img{
            border-radius: 3px;
            width: 100%;
        }

    `



    const Link = styled.a``


    return (
        <Container>
            <Title>Take a deeper dive into a new way to work</Title>

            <Cards>{datas.map(data => {
                return <Card>
                    <img src={data.img} alt="" />
                    <p>{data.name}</p>
                    <h3>{data.title}</h3>
                    <Link>{data.link}</Link>
                </Card>
            })


            }
            </Cards>

        </Container>
    );
};

export default Deeper;