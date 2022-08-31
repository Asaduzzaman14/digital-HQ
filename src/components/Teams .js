import React from 'react';
import styled from 'styled-components';

const Teams = () => {
    const Summerys = [
        {
            "parent": "85%",
            "desc": "of users say Slack has improved communication*"
        },
        {
            "parent": "86%",
            "desc": "feel their ability to work remotely has improved*"
        },
        {
            "parent": "89%",
            "desc": "feel more connected to their teams*"
        },

    ]


    const TeamContainer = styled.div`
    max-width: 1200px;
    padding:20px;
    margin:0 auto;
    text-align: center;

`
    const ButtonContainer = styled.div`
        display:grid;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        /* justify-items: stretch; */
        @media (max-width: 700px) {
            grid-template-columns: repeat(1 ,1fr);
            grid-gap:20px;
        }
`
    const Button = styled.button`
         padding: 15px 50px;
         font-size: 12px;
        font-weight: 500;
        background-color:  #541554;
        color: #fff;
        border:none;
        border-radius: 5px;
        width: 350px;
        :hover{
            background-color: #300c30;
        }
       
   
`
    const SalesButton = styled.button`
        border:1px solid  #541554;
        padding: 15px 50px;
        font-weight: bolder;
        color: #541554;
        border-radius: 5px;
        width: 300px;
        :hover{
            border:2px solid #541554;
            padding: 14px 50px;
        }
    
    `
    const SummeryContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-self: center;

        h1{
            color:  #541554;
            font-size:35px ;
        }
        p{
            font-weight: 600;
        }

        @media (max-width: 700px) {
            grid-template-columns: repeat(1 ,1fr);
            /* grid-gap:10px; */
            width: 150px;
            margin: 0 auto;
        }
    `
    const Introduction = styled.div`
    border: 1px ;
    `



    return (
        <TeamContainer>
            <h2>Teams large and small rely on Slack</h2>
            <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>

            <ButtonContainer>
                <Button>MEET SLACK ENTERPRISE</Button>
                <SalesButton >TALK TO SLACKES</SalesButton>
            </ButtonContainer>

            <SummeryContainer>{Summerys.map(summery => {
                return <div>
                    <h1>{summery.parent}</h1>
                    <p> {summery.desc}</p>
                </div>
            })
            }</SummeryContainer>

            <div>
                <Introduction>
                    <video width="600" height="400" autoPlay muted>
                        <source src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4" type="video/mp4" />
                    </video>

                    <div>
                        <p>‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</p>

                        <h3>Mark Smith</h3>
                        <h5>Senior Technical Product Manager, T-Mobile</h5>
                        <a href="_#">See more customer stories</a>
                    </div>
                </Introduction>

                <p>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
            </div>



        </TeamContainer >
    );
};

export default Teams;