/* eslint-disable array-callback-return */
import styled from "styled-components";
// import data from "../data.json";
import Thumbnail from "./Thumbnail";
import TitlesService from "../services/TitlesService";
import { useEffectOnce } from "usehooks-ts";
import { useAuth } from "./AuthProvider";

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
    data: Item[];
    setData: React.Dispatch<React.SetStateAction<Item[]>>;
    keyword: string;
}

export default function Body({ currentPage, data, setData, keyword }: Props): JSX.Element {
    let section;
    let items;
    let dataLength;
    let auth = useAuth();

    // Sets section title depending on the current page
    if (currentPage.page === "Home") {
        dataLength = data.length;
        section = <Section className="heading-l">Recommended for you</Section>;
    } else if (currentPage.page === "Movies") {
        dataLength = data.filter((element) => element.category === "Movie").length;
        section = <Section className="heading-l">Movies</Section>;
    } else if (currentPage.page === "Series") {
        dataLength = data.filter((element) => element.category === "TV Series").length;
        section = <Section className="heading-l">TV Series</Section>;
    } else if (currentPage.page === "Bookmarked") {
        dataLength = data.filter((element) => element.isBookmarked).length;
    }

    // Get titles from database on first render
    const getTitles = async () => {
        try {
            let response = await TitlesService.getAll(auth.user);
            setData(response.data);
        } catch (error) {
            // Handle error // Probably redirect to error page
        }
    };

    useEffectOnce(() => {
        getTitles();
    });

    // Fetches all the titles/items from the database and Renders them by calling Thumbnail
    items = data.map((item: Item, i: number) => {
        if (!item.isTrending && currentPage.page === "Home") {
            return <Thumbnail item={item} setData={setData} key={i} />;
        } else if (!item.isTrending && currentPage.page === "Movies" && item.category === "Movie") {
            return <Thumbnail item={item} setData={setData} key={i} />;
        } else if (
            !item.isTrending &&
            currentPage.page === "Series" &&
            item.category === "TV Series"
        ) {
            return <Thumbnail item={item} setData={setData} key={i} />;
        }
    });

    // Differentiates Bookmarked page from the others
    if (keyword === "") {
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
                        {data!.map((item: Item, i: number) => {
                            if (item.isBookmarked && item.category === "Movie") {
                                return <Thumbnail item={item} setData={setData} key={i} />;
                            }
                        })}
                    </Grid>

                    <Section className="heading-l">Bookmarked TV Series</Section>
                    <Grid>
                        {data!.map((item: Item, i: number) => {
                            if (item.isBookmarked && item.category === "TV Series") {
                                return <Thumbnail item={item} setData={setData} key={i} />;
                            }
                        })}
                    </Grid>
                </Container>
            );
        }
    } else {
        return (
            <Container>
                <Section className="heading-l">
                    <span>
                        Found {dataLength} results for '{keyword}'
                    </span>
                </Section>
                <Grid>
                    {data!.map((item: Item, i: number) => {
                        if (currentPage.page === "Home") {
                            return <Thumbnail item={item} setData={setData} key={i} />;
                        } else if (currentPage.page === "Movies" && item.category === "Movie") {
                            return <Thumbnail item={item} setData={setData} key={i} />;
                        } else if (currentPage.page === "Series" && item.category === "TV Series") {
                            return <Thumbnail item={item} setData={setData} key={i} />;
                        } else if (currentPage.page === "Bookmarked" && item.isBookmarked) {
                            return <Thumbnail item={item} setData={setData} key={i} />;
                        }
                    })}
                </Grid>
            </Container>
        );
    }
}
