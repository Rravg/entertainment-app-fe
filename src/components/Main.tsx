import styled from "styled-components";
import Body from "./Body";

import SearchBar from "./SearchBar";
import Trending from "./Trending";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 0px 16px;

    @media (min-width: 768px) {
        padding: 0px;
    }

    @media (min-width: 1440px) {
        padding-top: 32px;
    }
`;

interface Props {
    currentPage: Pages;
}

export default function Main({ currentPage }: Props): JSX.Element {
    const [data, setData] = useState<Item[]>([]);

    return (
        <Container>
            <SearchBar />
            {currentPage.page === "Home" && <Trending data={data} setData={setData} />}
            <Body currentPage={currentPage} data={data} setData={setData} />
        </Container>
    );
}
