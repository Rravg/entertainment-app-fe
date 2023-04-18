/* eslint-disable array-callback-return */
import styled from "styled-components";
import data from "../data.json";
import Thumbnail from "./Thumbnail";

const Container = styled.div`
    /* background-color: salmon; */
`;

const Section = styled.h1`
    color: var(--pure-white);
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;

    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 32px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    column-gap: 15px;
    row-gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 29px;
        row-gap: 24px;
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 40px;
        row-gap: 32px;
    }
`;

interface Props {
    currentPage: Pages;
}

export default function Body({ currentPage }: Props): JSX.Element {
    let section;
    let items;

    if (currentPage.page === "Home") {
        section = <Section className="heading-l">Recommended for you</Section>;
    } else if (currentPage.page === "Movies") {
        section = <Section className="heading-l">Movies</Section>;
    } else if (currentPage.page === "Series") {
        section = <Section className="heading-l">TV Series</Section>;
    }

    items = data.map((item, i) => {
        if (!item.isTrending && currentPage.page === "Home") {
            return <Thumbnail item={item} />;
        } else if (!item.isTrending && currentPage.page === "Movies" && item.category === "Movie") {
            return <Thumbnail item={item} />;
        } else if (
            !item.isTrending &&
            currentPage.page === "Series" &&
            item.category === "TV Series"
        ) {
            return <Thumbnail item={item} />;
        }
    });

    if (currentPage.page !== "Bookmarked") {
        return (
            <Container>
                {section}
                <Grid>{items}</Grid>
            </Container>
        );
    } else {
        return (
            <Container>
                <Section className="heading-l">Bookmarked Movies</Section>
                <Grid style={{ marginBottom: "40px" }}>
                    {data.map((item, i) => {
                        if (item.isBookmarked && item.category === "Movie") {
                            return <Thumbnail item={item} />;
                        }
                    })}
                </Grid>

                <Section className="heading-l">Bookmarked TV Series</Section>
                <Grid>
                    {data.map((item, i) => {
                        if (item.isBookmarked && item.category === "TV Series") {
                            return <Thumbnail item={item} />;
                        }
                    })}
                </Grid>
            </Container>
        );
    }
}
