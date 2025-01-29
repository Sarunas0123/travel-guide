import type { Route } from "./+types/home";
import Post from "./post"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flight planner" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <><Post/></>;
}
