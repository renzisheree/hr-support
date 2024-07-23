import styled from 'styled-components'

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    align-items: center;

    .logo {
        display: block;
        margin: 0 auto 1.38rem;
    }

    .form {
        max-width: 400px;
        border-top: 5px solid var(--primary-500);
    }

    input {
        padding: 1.5rem 0.75rem
    }

    h4 {
        text-align: center;
        margin-bottom: 1.38rem;
    }

    p {
        margin-top: 1rem;
        align-items: center;
        line-height: 1.5;
        text-align: center;
    }

    .btn {

        margin-top: 1rem;

    }


`
export default Wrapper
