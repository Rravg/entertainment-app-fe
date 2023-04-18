import styled from "styled-components";

import useMediaQuery from "../Hooks/useMediaQuery";

import icon_category_movie from "../assets/icon-category-movie.svg";
import icon_category_tv from "../assets/icon-category-tv.svg";

const ImageContainer = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;

    &:last-of-type {
        margin-right: 0px;
    }

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
    transition: opacity 0.3s ease-in-out;
    width: 240px;
    height: 140px;

    @media (min-width: 768px) {
        width: 470px;
        height: 230px;
    }

    @media (min-width: 1440px) {
    }
`;

const IconContainer = styled.div`
    cursor: pointer;

    z-index: 2;
    position: absolute;
    background-color: var(--dark-blue);
    mix-blend-mode: normal;
    opacity: 0.5;

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
        right: 24px;
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

const Icon = styled.svg`
    stroke: var(--pure-white);
`;

const Description = styled.div`
    z-index: 2;
    width: 100%;
    position: absolute;
    bottom: 0;

    padding: 16px;

    @media (min-width: 768px) {
        padding: 24px;
    }

    @media (min-width: 1440px) {
    }
`;

const Title = styled.h2`
    font-size: 15px;
    line-height: 19px;
    color: var(--pure-white);

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 30px;
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
    font-size: 12px;
    line-height: 15px;

    color: var(--pure-white);
    opacity: 0.75;

    @media (min-width: 768px) {
        font-size: 15px;
        line-height: 19px;
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

const Play = styled.div`
    opacity: 0;
    position: absolute;
    top: calc(50% - 24px);
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

interface Props {
    imageLarge: string | undefined;
    imageSmall: string | undefined;
    title: string;
    year: string;
    category: "Movie" | "TV Series";
    rating: string;
}

export default function TrendingThumbnail({
    imageLarge,
    imageSmall,
    title,
    year,
    category,
    rating,
}: Props): JSX.Element {
    const tabletSize = useMediaQuery("(min-width: 768px)");
    return (
        <ImageContainer>
            <Image src={tabletSize ? imageLarge : imageSmall} alt="" />
            <IconContainer>
                <Icon width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        strokeWidth={1.5}
                        fill="none"
                    />
                </Icon>
            </IconContainer>
            <Description>
                <DataContainer>
                    <Data className="body-m">{year}</Data>
                    <Dot />
                    <img
                        src={category === "Movie" ? icon_category_movie : icon_category_tv}
                        alt=""
                    />
                    <Data className="body-m">{category}</Data>
                    <Dot />
                    <Data className="body-m">{rating}</Data>
                </DataContainer>
                <Title className="heading-s">{title}</Title>
            </Description>
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
        </ImageContainer>
    );
}
