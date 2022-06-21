export default async function delay(time = 2000) {
    return new Promise(r => setTimeout(r, time));
};
