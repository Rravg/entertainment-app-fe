import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.div`
    background-color: var(--semi-dark-blue);
    border-radius: 10px;
    padding: 24px;
    padding-bottom: 34px;

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

export default function Login(): JSX.Element {
    return (
        <Container>
            <Logo src={logo} alt="" />
            <Title className="heading-l">Login</Title>
            <LoginForm />
            <Redirect className="body-m">
                Don't have an account? <RedirectLink to="/signup">Sign Up</RedirectLink>
            </Redirect>
        </Container>
    );
}

function LoginForm(): JSX.Element {
    return (
        <form action="/login" method="post">
            <div style={{ marginBottom: "24px" }}>
                <Input
                    type="text"
                    name="email"
                    placeholder="Email address"
                    required
                    className="body-m"
                />
            </div>

            <div style={{ marginBottom: "40px" }}>
                <Input
                    type="text"
                    name="password"
                    placeholder="Password"
                    required
                    className="body-m"
                />
            </div>

            <div style={{ marginBottom: "24px" }}>
                <Button className="body-m" type="submit">
                    Login to your account
                </Button>
            </div>
        </form>
    );
}
