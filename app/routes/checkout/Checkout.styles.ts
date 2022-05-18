import styled from "@emotion/styled";
import {lightestGrey, white} from "~/theme/colors";

export const Main = styled.main`
    padding: 3rem;
    display: flex;
    background-color: ${lightestGrey};
`;

export const Content = styled.div`
    flex: 1;
    background-color: ${white};
    margin-right: 2rem;
`;

export const Summary = styled.div`
    width: 35%;
    padding: 0 2rem 2rem;
    background-color: ${white};

    h2 {
        margin-bottom: 3rem;
        text-align: center;
    }

    p {
        font-size: 1.5rem;
    }

    li {
        margin-top: 2rem;

        p {
            font-size: 1rem;
            margin-top: 0;
        }


    }
`;
