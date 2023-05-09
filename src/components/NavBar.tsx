import styled from "styled-components";

import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { useState } from "react";

const Navigation = styled.nav`
    height: 56px;
    background-color: var(--semi-dark-blue);
    padding: 0px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        border-radius: 10px;
        padding: 0px 24px;
        height: 72px;
    }

    @media (min-width: 1440px) {
        height: 100%;
        padding: 32px 28px;

        flex-direction: column;
        justify-content: start;

        row-gap: 75px;
    }
`;

const Logo = styled.img`
    width: 25px;
    height: 20px;

    @media (min-width: 768px) {
        width: 32px;
        height: 26px;
    }

    @media (min-width: 1440px) {
    }
`;

const IconContainer = styled.div`
    display: flex;
    column-gap: 24px;

    @media (min-width: 768px) {
        column-gap: 32px;
    }

    @media (min-width: 1440px) {
        flex-direction: column;
        row-gap: 40px;
    }
`;

const Icon = styled.svg<{ selected: boolean }>`
    cursor: pointer;
    fill: ${(props) => (props.selected ? "var(--pure-white)" : "var(--greyish-blue)")};

    @media (min-width: 1440px) {
        &:hover {
            fill: var(--red) !important;
        }
    }
`;

const AvatarContainer = styled.div`
    cursor: pointer;
    /* position: relative; */

    @media (min-width: 1440px) {
        margin-top: auto;
    }
`;

const Avatar = styled.img`
    width: 24px;
    height: 24px;

    border: 1px solid var(--pure-white);
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 1440px) {
        width: 40px;
        height: 40px;
    }
`;

const FloatMenu = styled.div`
    position: absolute;
    z-index: 1;

    right: 10px;
    padding: 4px;
    font-size: 12px;

    border-radius: 3px;
    border: 1px solid var(--pure-white);
    background-color: var(--semi-dark-blue);

    top: 12%;
    display: block;

    @media (min-width: 768px) {
    }

    @media (min-width: 1440px) {
        &:hover {
            border: 1px solid var(--red);
        }
    }
`;

const MenuItem = styled.a`
    text-decoration: none;
    color: white;
`;

interface Props {
    currentPage: Pages;
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

export default function NavBar({ currentPage, setCurrentPage }: Props): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);

    const setHome = () => {
        setCurrentPage({ page: "Home" });
    };

    const setMovies = () => {
        setCurrentPage({ page: "Movies" });
    };

    const setSeries = () => {
        setCurrentPage({ page: "Series" });
    };

    const setBookmarked = () => {
        setCurrentPage({ page: "Bookmarked" });
    };

    return (
        <Navigation>
            <div>
                <Logo src={logo} alt="" />
            </div>
            <IconContainer>
                <Icon
                    selected={currentPage.page === "Home" ? true : false}
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={setHome}
                >
                    <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
                </Icon>

                <Icon
                    selected={currentPage.page === "Movies" ? true : false}
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={setMovies}
                >
                    <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                </Icon>

                <Icon
                    selected={currentPage.page === "Series" ? true : false}
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={setSeries}
                >
                    <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
                </Icon>

                <Icon
                    selected={currentPage.page === "Bookmarked" ? true : false}
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={setBookmarked}
                >
                    <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
                </Icon>
            </IconContainer>
            <AvatarContainer onClick={() => setShowMenu(!showMenu)}>
                <Avatar src={avatar} alt="" />
                {showMenu && (
                    <FloatMenu>
                        <MenuItem className="body-s" href="/">
                            Logout
                        </MenuItem>
                    </FloatMenu>
                )}
            </AvatarContainer>
        </Navigation>
    );
}
