
import Pools from '../pages/Pools/Pools'
import Exchanger from '../pages/Exchanger/Exchanger'

export enum RouteNames {
    MAIN_ROUTE = "/",
    POOLS_ROUTE = "/pools",
    EXCHANGER_ROUTE = '/exchanger'
  }

  export const publicRoutes = [
    {
      path: RouteNames.POOLS_ROUTE,
      element: Pools,
    },
    {
      path: RouteNames.MAIN_ROUTE,
      element: Exchanger,
    },
    {
      path: RouteNames.EXCHANGER_ROUTE,
      element: Exchanger,
    },
  ];