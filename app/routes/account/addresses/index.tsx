import {json} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";

import {getAddresses} from "~/model/addresses";

import type { LoaderFunction} from "@remix-run/node";
import type {TAddress} from "~/types/model.type";

import {H1, AddressItem, AddressList, StyledAddress} from './Addresses.styles';

type LoaderData = {
    addresses: TAddress[];
};

export const loader: LoaderFunction = async () => {
    const addresses = await getAddresses();

    return json<LoaderData>({ addresses });
};

const Addresses = () => {
    const { addresses } = useLoaderData<LoaderData>();

    return (
        <>
            <H1>Addresses</H1>
            <AddressList>
                {addresses.length === 0 && (
                    <li>
                        The address list is empty...
                    </li>
                )}
                { addresses.map((item) => (
                    <AddressItem key={item.id}>
                        <StyledAddress address={item} />
                        <Link to={item.id}>Edit Address</Link>
                    </AddressItem>
                )) }
            </AddressList>
            <Link to="new">Add new address</Link>
        </>
    )
};

export default Addresses;
