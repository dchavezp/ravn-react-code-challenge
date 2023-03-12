import { DashboardPage, SettingsPage } from "@/pages";
import { RiFunctionLine, RiSettings4Line } from "react-icons/ri";
interface Route {
  path: string;
  name: string;
  icon: React.ReactElement;
  element: React.ReactElement;
}
export const routes: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    icon: <RiFunctionLine size={18} />,
    element: <DashboardPage />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <RiSettings4Line size={18} />,
    element: <SettingsPage />,
  },
];
