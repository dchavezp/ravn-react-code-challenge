import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components";
import ApolloProvider from "./context/apollo.context";
import { NotFoundPage } from "./pages/NotFound";
import { routes } from "./routes/routes";
const App: React.FC = () => {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                ></Route>
              );
            })}
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
