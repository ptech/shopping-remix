import React from "react";
import type {TAddress} from "~/types/model.type";

type PropTypes = {
    className?: string;
    address: TAddress;
};

const Address: React.FC<PropTypes> = ({ className, address }) => (
    <div className={className}>
        <p>{address?.name}</p>
        <p>{address?.addressLine}</p>
        <p>{address?.country}, {address?.postalCode}</p>
        <p>{address?.phoneNumber}</p>
    </div>
);

export default Address;
