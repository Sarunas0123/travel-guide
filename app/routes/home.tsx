import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flight planner" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>Home page</>;
}
