import styled from "styled-components";
import icon from "../assets/icon-search.svg";
import { ChangeEvent, useEffect } from "react";

const Container = styled.div`
    display: flex;
    column-gap: 16px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        column-gap: 24px;
        margin-bottom: 34px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 34px;
    }
`;

const Icon = styled.img``;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: var(--dark-blue);
    width: 100%;

    font-size: 16px;
    line-height: 20px;
    caret-color: var(--red);
    color: var(--pure-white);

    &::placeholder {
        font-family: "Outfit";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: var(--pure-white);
        opacity: 0.5;
    }

    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 30px;

        &::placeholder {
            font-size: 24px;
            line-height: 30px;
        }
    }

    @media (min-width: 1440px) {
    }
`;

interface Props {
    onSearch: (keyword: string) => void;

    keyword: string;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
    currentPage: Pages;
}

export default function SearchBar({
    onSearch,
    keyword,
    setKeyword,
    currentPage,
}: Props): JSX.Element {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };
    let placeholder;
    // Triggers onSearch request to the back-end on change of keyword
    useEffect(() => {
        onSearch(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    // Sets placeholder depending on the current page
    if (currentPage.page === "Home") {
        placeholder = "Search for movies or TV series";
    } else if (currentPage.page === "Movies") {
        placeholder = "Search for movies";
    } else if (currentPage.page === "Series") {
        placeholder = "Search for TV series";
    } else if (currentPage.page === "Bookmarked") {
        placeholder = "Search for bookmarked shows";
    }
    return (
        <Container>
            <Icon src={icon} alt="" />
            <Input
                type="text"
                className="heading-m"
                placeholder={placeholder}
                onChange={handleInputChange}
            />
            )
        </Container>
    );
}
