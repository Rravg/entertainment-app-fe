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
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default function Body(): JSX.Element {
    return (
        <Container>
            <Section className="heading-l">Recommended for you</Section>
            <Grid>
                {data.map((item, i) => {
                    if (!item.isTrending) {
                        return <Thumbnail item={item} />;
                    }
                })}
            </Grid>
        </Container>
    );
}
