import styled from "@emotion/styled";
import {lightGrey} from "~/theme/colors";
import Address from "~/components/address/Address";
import AddressForm from "~/components/address-form/AddressForm";

export const H1 = styled.h1`
    margin-bottom: 0;
`;

export const Section = styled.section`
    margin-top: 5rem;
`;

export const AddressList = styled.ul`
    margin-bottom: 3rem;
`;

export const AddressItem = styled.li`
    padding: 1.5rem 0 2rem;
    border-bottom: 0.1rem solid ${lightGrey};

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;

export const StyledAddress = styled(Address)`
    margin-bottom: 2rem;
`;

export const StyledAddressForm = styled(AddressForm)`
    margin-top: 5rem;
    width: 100%;
    max-width: 40rem;
`;
