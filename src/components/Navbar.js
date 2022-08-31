import React, { useState } from 'react';
import { LeftContainer, Logo, NavbarConatiner, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from '../styles/Navbar.style';

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLinkExtended to="/"> LOGO</NavbarLinkExtended>
                        <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                        <NavbarLinkExtended to="/solutions"> Solutions</NavbarLinkExtended>
                        <NavbarLinkExtended to="/enterprise"> Enterprise</NavbarLinkExtended>
                        <NavbarLinkExtended to="/resources"> Resources</NavbarLinkExtended>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>

                <RightContainer>
                    {/* <Logo>Logo</Logo> */}
                </RightContainer>

            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/solutions"> Solutions</NavbarLinkExtended>
                    <NavbarLinkExtended to="/enterprise"> Enterprise</NavbarLinkExtended>
                    <NavbarLinkExtended to="/resources"> Resources</NavbarLinkExtended>
                </NavbarExtendedContainer>

            )}
        </NavbarContainer>
    );
};

export default Navbar;