import {addressFormAction} from "~/components/address-form/AddressForm";

import {H1, StyledAddressForm} from './Addresses.styles';

export const action = addressFormAction;

const NewAddress = () => {
    return (
        <>
            <H1>New Address</H1>
            <StyledAddressForm />
        </>
    )
};

export default NewAddress;
