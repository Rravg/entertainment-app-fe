import styled from "styled-components";
import Body from "./Body";

import SearchBar from "./SearchBar";
import Trending from "./Trending";
import { useState } from "react";
import TitlesService from "../services/TitlesService";
import { useAuth } from "./AuthProvider";

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
    const [keyword, setKeyword] = useState("");

    let auth = useAuth();

    const handleSearch = async (keyword: string) => {
        try {
            let response = await TitlesService.getSearch(auth.user, keyword);
            setData(response.data);
        } catch (error) {}
    };

    return (
        <Container>
            <SearchBar
                onSearch={handleSearch}
                keyword={keyword}
                setKeyword={setKeyword}
                currentPage={currentPage}
            />

            {currentPage.page === "Home" && keyword === "" && (
                <Trending data={data} setData={setData} />
            )}

            <Body currentPage={currentPage} data={data} setData={setData} keyword={keyword} />
        </Container>
    );
}
