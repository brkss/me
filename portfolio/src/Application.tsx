import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { routes } from "./utils/config/route";
import { Box } from "@chakra-ui/react";

export const Application: React.FC = () => {
  return (
    <Box minH={"100vh"} bg="#f9f9f9">
      <Box m={"auto"} pt={7} w={{ md: "50%", base: "100%" }}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => (
                  <route.component
                    {...props}
                    {...route.props}
                    name={route.name}
                  />
                )}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Box>
    </Box>
  );
};
