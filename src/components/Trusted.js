import React from 'react';
import { CardContainerText, Content, LogoContainer, TrustedCompany } from '../styles/Trusted.style';


const Trusted = () => {
    const Logos = [
        {
            "img": "https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png"
        },
        {
            "img": "https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png"
        },
        {
            "img": "https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png"
        },
        {
            "img": "https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png"
        },
        {
            "img": "https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png"
        },
        {
            "img": "https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png"
        },
        {
            "img": "https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png"
        },
        {
            "img": "https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png"
        },

    ]

    const datas = [
        {
            "_id": "1",
            "video": "https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm",
            "title": "Bring your team together",
            "desc": "At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        },
        {
            "_id": "2",
            "video": "https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm",
            "title": "Choose how you want to work",
            "desc": " In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live."
        },
        {
            "_id": "3",
            "video": "https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm",
            "title": "Move faster with your tools in one place",
            "desc": "With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        },
    ]


    return (
        <TrustedCompany>
            <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
            <LogoContainer>
                {Logos.map(logo => {
                    return <div>
                        <img src={logo.img} alt="" />

                    </div>
                })

                }
            </LogoContainer>


            <div>{datas.map(data => {
                return <Content key={data._id} >


                    <video autoPlay muted>
                        <source src={data.video} type="video/mp4" />
                    </video>
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </div>

                    Learn more about flexible communication

                </Content>
            })



            }
            </div>



        </TrustedCompany>

    );
};

export default Trusted;