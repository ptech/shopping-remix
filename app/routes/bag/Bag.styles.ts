import styled from "@emotion/styled";
import Select from "~/components/select/Select";
import Button from "~/components/button/Button";

export const Main = styled.main`
    padding: 0 3rem
`;

export const Ul = styled.ul`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 2rem;
`;

export const Li = styled.li`
  display: flex;
`

export const Img = styled.img`
    width: 12rem;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  padding-left: 3rem;
`

export const StyledButton = styled(Button)`
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;
