import { RiFunctionLine, RiSettings4Line } from "react-icons/ri";
interface Route {
  path: string;
  name: string;
  icon: React.ReactElement;
}
export const routes: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    icon: <RiFunctionLine size={18} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <RiSettings4Line size={18} />,
  },
];
