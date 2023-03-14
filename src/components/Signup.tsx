import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.div`
    background-color: var(--semi-dark-blue);
    border-radius: 10px;
    padding: 24px;
    padding-bottom: 26px;

    margin: auto;

    height: fit-content;
    width: 90%;

    max-width: 327px;

    margin-top: 132px;
`;

const Title = styled.h1`
    color: var(--pure-white);
    margin-bottom: 40px;
`;

const Input = styled.input`
    background-color: var(--semi-dark-blue);
    caret-color: var(--red);
    color: var(--pure-white);

    width: 100%;
    border: none;
    outline: none;
    padding-top: 0px;
    padding-left: 16px;
    padding-bottom: 18px;

    border-bottom: 1px solid var(--greyish-blue);

    &:focus {
        border-bottom: 1px solid var(--pure-white);
    }

    &::placeholder {
        color: var(--pure-white);
        mix-blend-mode: normal;
        opacity: 0.5;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: var(--red);
    color: var(--pure-white);

    &:hover {
        background-color: var(--pure-white);
        color: var(--semi-dark-blue);
    }

    border-radius: 6px;
    cursor: pointer;
    border: none;
    padding: 14px;
`;

const Redirect = styled.p`
    display: flex;
    justify-content: center;

    color: var(--pure-white);
`;

const RedirectLink = styled(Link)`
    text-decoration: none;
    color: var(--red);
    margin-left: 7px;
`;

const Logo = styled.img`
    position: absolute;
    top: calc(48px);
    left: calc(50% - 16px);
`;

export default function Signup(): JSX.Element {
    return (
        <Container>
            <Logo src={logo} alt="" />
            <Title className="heading-l">Sign Up</Title>
            <SignUpForm />
            <Redirect className="body-m">
                Already have an account? <RedirectLink to="/login">Login</RedirectLink>
            </Redirect>
        </Container>
    );
}

function SignUpForm(): JSX.Element {
    return (
        <form action="/signup" method="post">
            <div style={{ marginBottom: "24px" }}>
                <Input
                    type="text"
                    name="email"
                    placeholder="Email address"
                    required
                    className="body-m"
                />
            </div>

            <div style={{ marginBottom: "24px" }}>
                <Input
                    type="text"
                    name="password"
                    placeholder="Password"
                    required
                    className="body-m"
                />
            </div>

            <div style={{ marginBottom: "40px" }}>
                <Input
                    type="text"
                    name="repeat-password"
                    placeholder="Repeat Password"
                    required
                    className="body-m"
                />
            </div>

            <div style={{ marginBottom: "24px" }}>
                <Button className="body-m" type="submit">
                    Create an account
                </Button>
            </div>
        </form>
    );
}
