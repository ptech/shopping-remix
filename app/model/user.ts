import {db} from "~/db.server";

export type TProfile = {
    name: string;
    email: string;
    phoneNumber?: string;
};

export const getProfile = async (): Promise<TProfile> => {
    try {
        const user = db.data.user;

        return {
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
        };
    } catch (error) {
        throw error;
    }
}

export const updateProfile = async (data: TProfile) => {
    try {
        const user = db.data.user;

        db.data.user = {
            ...user,
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
        }

        db.write();
    } catch (error) {
        throw error;
    }
}
