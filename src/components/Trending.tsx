/* eslint-disable array-callback-return */
import styled from "styled-components";
import { useRef, useState } from "react";

// Hooks
import { useDraggable } from "react-use-draggable-scroll";

// Components
import TrendingThumbnail from "./TrendingThumbnail";

// Import images
import TitlesService from "../services/TitlesService";
import { useEffectOnce } from "usehooks-ts";

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
        & > div {
            margin-right: 40px;
        }
    }

    @media (min-width: 1440px) {
    }
`;

export default function Trending(): JSX.Element {
    const [data, setData] = useState<Title[]>([]);

    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
        activeMouseButton: "Left",
    });

    // Get titles from database on first render
    const getTitles = async () => {
        try {
            let response = await TitlesService.getTrending();
            setData(response.data);
        } catch (error) {
            // Handle error // Probably redirect to error page
        }
    };

    useEffectOnce(() => {
        getTitles();
    });

    return (
        <Container>
            <Section className="heading-l">Trending</Section>
            <Carousel {...events} ref={ref}>
                {data.map((item, i) => {
                    if (item.isTrending) {
                        return (
                            <TrendingThumbnail
                                imageLarge={item.trendingLarge}
                                imageSmall={item.trendingSmall}
                                title={item.name}
                                year={item.year.toFixed()}
                                category={item.category === "TV Series" ? "TV Series" : "Movie"}
                                rating={item.rating}
                                isBookmarked={false}
                                key={i}
                            />
                        );
                    }
                })}
            </Carousel>
        </Container>
    );
}
