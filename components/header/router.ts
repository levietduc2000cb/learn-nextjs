export interface Router {
  path: string;
  label: string;
}

export const ROUTER_LIST: Router[] = [
  { path: "/home", label: "Home" },
  { path: "/works", label: "Works" },
  { path: "/blog", label: "Blog" },
];
