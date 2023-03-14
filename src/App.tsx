import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components";
import ApolloProvider from "./context/apollo.context";
import { DashboardPage, SettingsPage } from "./pages";
import { NotFoundPage } from "./pages/NotFound";
const App: React.FC = () => {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
