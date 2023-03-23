import styled from "styled-components";

// Import images
import data from "../data.json";

import beyond_earth_small from "../assets/thumbnails/beyond-earth/trending/small.jpg";
import beyond_earth_large from "../assets/thumbnails/beyond-earth/trending/large.jpg";

import bottom_gear_small from "../assets/thumbnails/bottom-gear/trending/small.jpg";
import bottom_gear_large from "../assets/thumbnails/bottom-gear/trending/large.jpg";

import undiscovered_cities_small from "../assets/thumbnails/undiscovered-cities/trending/small.jpg";
import undiscovered_cities_large from "../assets/thumbnails/undiscovered-cities/trending/large.jpg";

import img_1998_small from "../assets/thumbnails/1998/trending/small.jpg";
import img_1998_large from "../assets/thumbnails/1998/trending/large.jpg";

import dark_side_of_the_moon_small from "../assets/thumbnails/dark-side-of-the-moon/trending/small.jpg";
import dark_side_of_the_moon_large from "../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg";

// Icon
import icon_bookmark_empty from "../assets/icon-bookmark-empty.svg";

import icon_category_movie from "../assets/icon-category-movie.svg";
import icon_category_tv from "../assets/icon-category-tv.svg";

import play_icon from "../assets/icon-play.svg";

// Hooks
import useMediaQuery from "../Hooks/useMediaQuery";

const Container = styled.div``;

const Section = styled.h1`
    color: var(--pure-white);
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;

    margin-bottom: 16px;

    @media (min-width: 376px) {
        margin-bottom: 25px;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }

    @media (min-width: 769px) {
        margin-bottom: 25px;
    }
`;

const Carousel = styled.div`
    overflow-x: auto;
    white-space: nowrap;

    & > div {
        margin-right: 16px;
    }

    @media (min-width: 376px) {
    }

    @media (min-width: 769px) {
    }
`;

const ImageContainer = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;

    &:last-of-type {
        margin-right: 0px;
    }

    &:hover {
        & > img {
            opacity: 0.5;
        }

        & .play-button {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    border-radius: 8px;
    transition: opacity 0.3s ease-in-out;
    width: 240px;
    height: 140px;

    @media (min-width: 376px) {
        width: 470px;
        height: 230px;
    }

    @media (min-width: 769px) {
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

    &:hover {
        background-color: var(--pure-white);
        opacity: 1;

        & > svg {
            stroke: var(--dark-blue);
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

    @media (min-width: 376px) {
        padding: 24px;
    }

    @media (min-width: 769px) {
    }
`;

const Title = styled.h2`
    font-size: 15px;
    line-height: 19px;
    color: var(--pure-white);

    @media (min-width: 376px) {
        font-size: 24px;
        line-height: 30px;
    }

    @media (min-width: 769px) {
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

    @media (min-width: 376px) {
        font-size: 15px;
        line-height: 19px;
    }

    @media (min-width: 769px) {
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

export default function Trending(): JSX.Element {
    const tabletSize = useMediaQuery("(min-width: 376px)");

    return (
        <Container>
            <Section className="heading-l">Trending</Section>
            <Carousel>
                <ImageContainer>
                    <Image src={tabletSize ? beyond_earth_large : beyond_earth_small} alt="" />
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
                            <Data className="body-m">2019</Data>
                            <Dot />
                            <img src={icon_category_movie} alt="" />
                            <Data className="body-m">Movie</Data>
                            <Dot />
                            <Data className="body-m">PG</Data>
                        </DataContainer>
                        <Title className="heading-s">Beyond Earth</Title>
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

                <ImageContainer>
                    <Image src={bottom_gear_small} alt="" />
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
                            <Data className="body-m">2021</Data>
                            <Dot />
                            <img src={icon_category_movie} alt="" />
                            <Data className="body-m">Movie</Data>
                            <Dot />
                            <Data className="body-m">PG</Data>
                        </DataContainer>
                        <Title className="heading-s">Bottom Gear</Title>
                    </Description>
                </ImageContainer>

                <ImageContainer>
                    <Image src={undiscovered_cities_small} alt="" />
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
                            <Data className="body-m">2019</Data>
                            <Dot />
                            <img src={icon_category_tv} alt="" />
                            <Data className="body-m">TV Series</Data>
                            <Dot />
                            <Data className="body-m">18+</Data>
                        </DataContainer>
                        <Title className="heading-s">Undiscovered Cities</Title>
                    </Description>
                </ImageContainer>

                <ImageContainer>
                    <Image src={img_1998_small} alt="" />
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
                            <Data className="body-m">2021</Data>
                            <Dot />
                            <img src={icon_category_movie} alt="" />
                            <Data className="body-m">Movie</Data>
                            <Dot />
                            <Data className="body-m">18+</Data>
                        </DataContainer>
                        <Title className="heading-s">1998</Title>
                    </Description>
                </ImageContainer>

                <ImageContainer>
                    <Image src={dark_side_of_the_moon_small} alt="" />
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
                            <Data className="body-m">2018</Data>
                            <Dot />
                            <img src={icon_category_tv} alt="" />
                            <Data className="body-m">TV Series</Data>
                            <Dot />
                            <Data className="body-m">PG</Data>
                        </DataContainer>
                        <Title className="heading-s">Dark Side of the Moon</Title>
                    </Description>
                </ImageContainer>
            </Carousel>
        </Container>
    );
}
