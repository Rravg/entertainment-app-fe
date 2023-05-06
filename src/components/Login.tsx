import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FormEvent, useState, useRef } from "react";
import useEventListener from "../Hooks/useEventListener";
import UserService from "../services/UserService";

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

    @media (min-width: 768px) {
        padding: 32px;
        max-width: 327px;

        margin-top: 178px;
    }

    @media (min-width: 1440px) {
        padding: 32px;
        max-width: 327px;

        margin-top: 187px;
    }
`;

const Title = styled.h1`
    color: var(--pure-white);
    margin-bottom: 40px;
`;

const Input = styled.input`
    border: none;
    outline: none;

    background-color: var(--semi-dark-blue);
    caret-color: var(--red);
    color: var(--pure-white);

    width: 100%;
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

    @media (min-width: 768px) {
        top: calc(88px);
    }

    @media (min-width: 1440px) {
        top: calc(78px);
    }
`;

const ErrorMessage = styled.h2`
    color: var(--red);
    position: absolute;

    right: 17px;
    bottom: 18px;
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
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const onEmailClick = (event: Event) => {
        if (showEmailError) {
            setShowEmailError(false);
        }
    };

    const onPasswordClick = (event: Event) => {
        if (showPasswordError) {
            setShowPasswordError(false);
        }
    };

    useEventListener("click", onEmailClick, inputEmailRef);
    useEventListener("click", onPasswordClick, inputPasswordRef);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        if (target.email.value === "") {
            setShowEmailError(true);
            return;
        }

        if (target.password.value === "") {
            setShowPasswordError(true);
            return;
        }

        const user: User = {
            email: target.email.value,
            password: target.password.value,
        };

        try {
            let response = await UserService.login(user);
        } catch (error) {}
    };

    return (
        <form onSubmit={handleSubmit} action="/login" method="post">
            <div style={{ marginBottom: "24px", position: "relative" }}>
                <Input
                    ref={inputEmailRef}
                    type="text"
                    name="email"
                    placeholder="Email address"
                    className="body-m"
                />
                {showEmailError && <ErrorMessage className="body-s">Can't be empty</ErrorMessage>}
            </div>

            <div style={{ marginBottom: "40px", position: "relative" }}>
                <Input
                    ref={inputPasswordRef}
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="body-m"
                />
                {showPasswordError && (
                    <ErrorMessage className="body-s">Can't be empty</ErrorMessage>
                )}
            </div>

            <div style={{ marginBottom: "24px" }}>
                <Button className="body-m" type="submit">
                    Login to your account
                </Button>
            </div>
        </form>
    );
}
