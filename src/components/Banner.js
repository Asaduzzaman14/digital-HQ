import React from 'react';
import { BannerContainer, Buttons, FullBanner, BannerDesc, BannerVideo, SingupButton } from '../styles/Banner.style';

const Banner = () => {
    return (
        <BannerContainer>
            <FullBanner>
                <BannerDesc>
                    <h1>Great teamwork starts with a <span>digital HQ</span></h1>
                    <p>With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>

                    <Buttons>
                        <button>SIGN UP WITH ADDRESS</button>
                        <button>SIGH UP WITH GOOGLE</button>
                    </Buttons>
                    <p>Slack is free to try for as long as you like</p>
                </BannerDesc>

                <BannerVideo>


                    <video width="600" height="400" autoPlay muted>
                        <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/mp4" />
                        <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                </BannerVideo>
            </FullBanner>
        </BannerContainer>
    );
};

export default Banner;