import styled from "styled-components";
import icon from "../assets/icon-search.svg";

const Container = styled.div`
    display: flex;
    column-gap: 16px;

    @media (min-width: 376px) {
        column-gap: 24px;
    }

    @media (min-width: 769px) {
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

    @media (min-width: 376px) {
        font-size: 24px;
        line-height: 30px;

        &::placeholder {
            font-size: 24px;
            line-height: 30px;
        }
    }

    @media (min-width: 769px) {
    }
`;

export default function SearchBar(): JSX.Element {
    return (
        <Container>
            <Icon src={icon} alt="" />
            <Input type="text" className="heading-m" placeholder="Search for movies or TV series" />
        </Container>
    );
}
