import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

export const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0()

    if (isLoading) {
        return (
            <Wrapper>
                <div className="loading"></div>
            </Wrapper>
        )
    }
    if (error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }

    return <>{children}</>
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    @keyframes spinner {
    to {
    transform: rotate(360deg);
    }
}

.loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: var(--clr-primary-5);
    animation: spinner 0.6s linear infinite;
}
`
