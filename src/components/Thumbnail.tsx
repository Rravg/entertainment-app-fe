import styled from "styled-components";

import icon_category_movie from "../assets/icon-category-movie.svg";
import icon_category_tv from "../assets/icon-category-tv.svg";

import useMediaQuery from "../Hooks/useMediaQuery";
import BookmarkIcon from "./BookmarkIcon";

const Container = styled.div`
    margin: 0 auto;

    cursor: pointer;
    position: relative;

    @media (min-width: 1440px) {
        &:hover {
            & > img {
                opacity: 0.5;
            }

            & .play-button {
                opacity: 1;
            }
        }
    }
`;

const Image = styled.img`
    border-radius: 8px;
    width: 100%;
`;

const IconContainer = styled.div`
    cursor: pointer;

    z-index: 2;
    position: absolute;
    background-color: rgba(16, 20, 30, 0.5);
    mix-blend-mode: normal;

    top: 8px;
    right: 8px;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        top: 16px;
        right: 16px;
    }

    @media (min-width: 1440px) {
        &:hover {
            background-color: var(--pure-white);
            opacity: 1;

            & > svg {
                stroke: var(--dark-blue);
            }
        }
    }
`;

const Play = styled.div`
    opacity: 0;
    position: absolute;
    top: calc(50% - 24px - 26px);
    left: calc(50% - 59px);
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.5);
    mix-blend-mode: normal;
    border-radius: 28.5px;
    padding: 9px;
    padding-right: 24px;

    column-gap: 20px;
    transition: opacity 0.3s ease-in-out;
`;

const Description = styled.div`
    width: 100%;
    bottom: 0;
    padding-top: 8px;

    @media (min-width: 768px) {
    }

    @media (min-width: 1440px) {
    }
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;

    margin-bottom: 4px;
`;

const Data = styled.h3`
    font-size: 11px;
    line-height: 14px;

    color: var(--pure-white);
    opacity: 0.75;

    @media (min-width: 768px) {
        font-size: 13px;
        line-height: 16px;
    }

    @media (min-width: 1440px) {
    }
`;

const Title = styled.h2`
    font-size: 14px;
    line-height: 18px;
    color: var(--pure-white);

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 23px;
    }

    @media (min-width: 1440px) {
    }
`;

const Dot = styled.div`
    height: 3px;
    width: 3px;
    background-color: var(--pure-white);
    border-radius: 50%;
    opacity: 0.5;
    mix-blend-mode: normal;
`;

interface Props {
    item: Item;
}

export default function Thumbnail({ item }: Props): JSX.Element {
    let thumbnailImage;

    const tabletSize = useMediaQuery("(min-width: 768px)");
    const desktopSize = useMediaQuery("(min-width: 1440px)");

    if (desktopSize) {
        thumbnailImage = <Image src={item.thumbnail.regular.large} />;
    } else if (tabletSize) {
        thumbnailImage = <Image src={item.thumbnail.regular.medium} />;
    } else {
        thumbnailImage = <Image src={item.thumbnail.regular.small} />;
    }

    return (
        <Container>
            {thumbnailImage}
            <IconContainer>
                <BookmarkIcon isBookmarked={item.isBookmarked} />
            </IconContainer>
            <Play className="play-button">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                        fill="#FFF"
                    />
                </svg>
                <h1 className="heading-xs" style={{ color: "white" }}>
                    Play
                </h1>
            </Play>
            <Description>
                <DataContainer>
                    <Data className="body-m">{item.year}</Data>
                    <Dot />
                    <img
                        src={item.category === "Movie" ? icon_category_movie : icon_category_tv}
                        alt=""
                    />
                    <Data className="body-m">{item.category}</Data>
                    <Dot />
                    <Data className="body-m">{item.rating}</Data>
                </DataContainer>
                <Title className="heading-s">{item.title}</Title>
            </Description>
        </Container>
    );
}
