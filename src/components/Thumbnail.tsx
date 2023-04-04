import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
`;

const Image = styled.img`
    border-radius: 8px;
`;

interface Props {
    item: Item;
}

export default function Thumbnail({ item }: Props): JSX.Element {
    return (
        <Container>
            <Image src={item.thumbnail.regular.small} />
        </Container>
    );
}
