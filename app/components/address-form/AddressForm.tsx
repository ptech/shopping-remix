import React from "react";
import {Form, useActionData} from "@remix-run/react";
import type {ActionFunction} from "@remix-run/node";
import { json, redirect} from "@remix-run/node";

import Input from "~/components/input/Input";
import Button from "~/components/button/Button";
import {PHONE_REGEX} from "~/utils/regexes";
import type { TNewAddress} from "~/model/addresses";
import {addAddress, updateAddress} from "~/model/addresses";
import type {TAddress} from "~/types/model.type";

import {CancelLink} from './AddressForm.styles';

type PropTypes = {
    className?: string;
    address?: TAddress;
}

export type ActionData = {
    errors?: {
        name?: string;
        country?: string;
        addressLine?: string;
        postalCode?: string;
        phoneNumber?: string;
    };
};

export const addressFormAction: ActionFunction = async ({ request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors = {
        name: !data?.name ? 'Name is required' : undefined,
        country: !data?.country ? 'Country is required' : undefined,
        addressLine: !data?.addressLine ? 'Address line is required' : undefined,
        postalCode: !data?.postalCode ? 'Postal code is required' : undefined,
        phoneNumber: data?.phoneNumber && !PHONE_REGEX.test(data.phoneNumber as string) ? 'Phone number is invalid' : undefined,
    }

    const hasErrors = Object.values(errors).some((message) => message);

    if (hasErrors) {
        return json<ActionData>({ errors });
    }

    const payload: TNewAddress = {
        name: data.name as string,
        country: data.country as string,
        addressLine: data.addressLine as string,
        postalCode: data.postalCode as string,
        phoneNumber: data?.phoneNumber as string,
    }

    switch(data._action) {
        case 'create':
            await addAddress(payload);
            break;
        case 'update':
            await updateAddress(data.id as string, payload);
    }

    return redirect('/account/addresses');
}

const AddressForm: React.FC<PropTypes> = ({ className, address }) => {
    const { errors } = useActionData<ActionData>() || {};

    return (
        <Form className={className} method="post">
            {address && <input type="hidden" name="id" value={address.id} />}
            <Input
                type="text"
                id="name"
                name="name"
                label="Name"
                defaultValue={address?.name}
                error={errors?.name}
            />
            <Input
                type="text"
                id="country"
                name="country"
                label="Country"
                defaultValue={address?.country}
                error={errors?.country}
            />
            <Input
                type="text"
                id="addressLine"
                name="addressLine"
                label="Address Line"
                defaultValue={address?.addressLine}
                error={errors?.addressLine}
            />
            <Input
                type="text"
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                defaultValue={address?.postalCode}
                error={errors?.postalCode}
            />
            <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                defaultValue={address?.phoneNumber}
                error={errors?.phoneNumber}
            />
            <CancelLink to="/account/addresses">Cancel</CancelLink>
            <Button type="submit" name="_action" value={address ? 'update' : 'create'} primary small>Save Address</Button>
        </Form>
    )
};

export default AddressForm;
