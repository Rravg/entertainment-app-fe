import styled from "styled-components";

import SearchBar from "./SearchBar";

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 0px 16px;

    @media (min-width: 376px) {
    }

    @media (min-width: 769px) {
        padding-top: 24px;
    }
`;

export default function Main(): JSX.Element {
    return (
        <Container>
            <SearchBar />
        </Container>
    );
}
