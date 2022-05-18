import { json, redirect} from "@remix-run/node";
import {useActionData, useLoaderData} from "@remix-run/react";
import {getProfile, updateProfile} from "~/model/user";

import {EMAIL_REGEX, PHONE_REGEX} from "~/utils/regexes";

import Input from "~/components/input/Input";
import Button from "~/components/button/Button";

import type { LoaderFunction,ActionFunction} from "@remix-run/node";
import type { TProfile} from "~/model/user";

import {H1, ProfileForm, CancelLink} from './Profile.styles';

type ActionData = {
    errors?: {
        name?: string;
        email?: string;
        phoneNumber?: string;
    }
};

export const loader: LoaderFunction = async () => {
    const user = await getProfile();

    return json<TProfile>(user);
};

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const {name, phoneNumber, email} = Object.fromEntries(formData);

    const errors = {
        name: !name ? 'The name is required!' : undefined,
        phoneNumber: phoneNumber && !PHONE_REGEX.test(phoneNumber.toString()) ? 'The phone number is invalid' : undefined,
        email: !email ? 'The email is required!' : undefined,
    };

    if (!errors?.email && !EMAIL_REGEX.test(email.toString())) {
        errors.email = 'The email is invalid!';
    }

    const hasErrors = Object.values(errors).some((message) => message);

    if (hasErrors) {
        return json<ActionData>({errors}, { status: 400 });
    }

    const payload: TProfile = {
        name: name.toString(),
        email: email.toString(),
        phoneNumber: phoneNumber.toString(),
    }

    await updateProfile(payload);

    return redirect('/account/profile');
};

const Edit = () => {
    const data = useLoaderData<TProfile>();
    const { errors = {} } = useActionData<ActionData>() || {};

    return (
        <>
            <H1>Edit profile</H1>
            <ProfileForm method="put">
                <Input
                    type="text"
                    name="name"
                    defaultValue={data.name}
                    label="Name"
                    error={errors?.name} />
                <Input
                    type="email"
                    name="email"
                    defaultValue={data.email}
                    label="Email"
                    error={errors?.email} />
                <Input
                    type="tel"
                    name="phoneNumber"
                    defaultValue={data.phoneNumber}
                    label="Phone Number"
                    error={errors?.phoneNumber} />
                <CancelLink to="/account/profile">Cancel</CancelLink>
                <Button type="submit" primary small>Save</Button>
            </ProfileForm>
        </>
    )
}

export default Edit;
