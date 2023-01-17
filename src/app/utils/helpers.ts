import { APPS } from "./constants";

export const getApp = () => {
    // console.log(window.location.hostname);
    const subDomain = getSubdomain(window.location.hostname);

    const main = APPS.find((app) => app.main);

    if (!main) throw new Error("Must have main tag");

    if (subDomain === "") return main;

    const app = APPS.find(app => subDomain === app.subDomain);

    if (!app) return main.app;
    return app.app;

    // console.log(subDomain)
};
const getSubdomain = (location: string) => {
    const locationParts = location.split(".");

    let sliceTill = -2;

    // for localhost
    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    if (isLocalHost) sliceTill = -1

        return locationParts.slice(0, sliceTill).join("")
};