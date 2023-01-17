import { AppRoutes } from "../appRoutes";
import { HelixRoutes } from '../helixroutes'

export const APPS =[
    {
        subDomain: "www",
        app: AppRoutes,
        main: true,
    },
    {
        subDomain: "helix",
        app: HelixRoutes,
        main: false,
    },
    {
        app: AppRoutes,
        main: false,
    },
]

