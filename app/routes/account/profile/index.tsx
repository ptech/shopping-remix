import {json, LoaderFunction} from "@remix-run/node";
import {getProfile, TProfile} from "~/model/user";
import {Link, useLoaderData} from "@remix-run/react";
import { H1, Section } from './Profile.styles';


export const loader: LoaderFunction = async () => {
    const user = await getProfile();

    return json<TProfile>(user);
};

const Profile = () => {
    const data = useLoaderData<TProfile>();

    return (
        <>
            <H1>My profile</H1>
            <Section>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone Number:</strong> {data.phoneNumber || '--'}</p>
                <Link to="edit">Edit profile</Link>
            </Section>
        </>
    );
};

export default Profile;
