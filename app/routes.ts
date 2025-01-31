import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("hotels", "routes/hotels.tsx"),
    route("atractions", "routes/atractions.tsx"),
    route("cars", "routes/cars.tsx"),
] satisfies RouteConfig;
