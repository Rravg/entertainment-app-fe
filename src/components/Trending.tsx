import styled from "styled-components";
import { useRef } from "react";

// Hooks
import { useDraggable } from "react-use-draggable-scroll";

// Components
import TrendingThumbnail from "./TrendingThumbnail";

// Import images
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

const Container = styled.div`
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 40px;
    }

    @media (min-width: 1440px) {
    }
`;

const Section = styled.h1`
    color: var(--pure-white);
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;

    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-bottom: 25px;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 25px;
    }
`;

const Carousel = styled.div`
    overflow-x: auto;
    white-space: nowrap;

    & > div {
        margin-right: 16px;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1440px) {
    }
`;

export default function Trending(): JSX.Element {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
        activeMouseButton: "Left",
    }); // Now we pass the reference to the useDraggable hook:

    return (
        <Container>
            <Section className="heading-l">Trending</Section>
            <Carousel {...events} ref={ref}>
                <TrendingThumbnail
                    imageLarge={beyond_earth_large}
                    imageSmall={beyond_earth_small}
                    title="Beyond Earth"
                    year="2019"
                    category="Movie"
                    rating="PG"
                />

                <TrendingThumbnail
                    imageLarge={bottom_gear_large}
                    imageSmall={bottom_gear_small}
                    title="Bottom Gear"
                    year="2021"
                    category="Movie"
                    rating="PG"
                />

                <TrendingThumbnail
                    imageLarge={undiscovered_cities_large}
                    imageSmall={undiscovered_cities_small}
                    title="Undiscovered Cities"
                    year="2019"
                    category="TV Series"
                    rating="18+"
                />

                <TrendingThumbnail
                    imageLarge={img_1998_large}
                    imageSmall={img_1998_small}
                    title="1998"
                    year="2021"
                    category="Movie"
                    rating="18+"
                />

                <TrendingThumbnail
                    imageLarge={dark_side_of_the_moon_large}
                    imageSmall={dark_side_of_the_moon_small}
                    title="Dark Side of the Moon"
                    year="2018"
                    category="TV Series"
                    rating="PG"
                />
            </Carousel>
        </Container>
    );
}
