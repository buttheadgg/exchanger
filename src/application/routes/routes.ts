import Exchanger from "../pages/exchanger/Exchanger";
import Pools from "../pages/pools/Pools";



export enum RouteNames {
    POOLS_ROUTE = "/pools",
    EXCHANGER_ROUTE = '/exchanger',
  }

  export const publicRoutes = [
    {
      path: RouteNames.POOLS_ROUTE,
      element: Pools,
    },
    {
      path: RouteNames.EXCHANGER_ROUTE,
      element: Exchanger,
    },
  ];