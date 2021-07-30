import { Container } from "@material-ui/core";
import React from "react";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import CommercialDashboard from "./CommercialDashboard";
import Promotions from "./Promotions";
import RetailPrice from "./RetailPrice";
import RangeAmend from "./RangeAmend";
import ProductPortal from "./ProductPortal";
import SupplierPortal from "./SupplierPortal";
import KpiAnalytics from "./KpiAnalytics";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004e37",
      light: "#99b8af",
      dark: "#004631",
      contrastText: "#f2f5f4",
    },
    secondary: {
      main: "#fcbc00",
      light: "#fde499",
      dark: "#e2a800",
      contrastText: "#fefbf2",
    },
  },
});

const useStyles = makeStyles({
  notfound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Redirect to="/Commercial/dashboard" />
              </Route>
              <Route
                exact
                path="/Commercial/dashboard"
                component={CommercialDashboard}
              ></Route>
              <Route
                exact
                path="/Commercial/promotions"
                component={Promotions}
              ></Route>
              <Route exact path="/Commercial/retail" component={RetailPrice} />
              <Route exact path="/Commercial/range" component={RangeAmend} />
              <Route
                exact
                path="/Commercial/product"
                component={ProductPortal}
              />
              <Route
                exact
                path="/Commercial/supplier"
                component={SupplierPortal}
              />
              <Route
                exact
                path="/Commercial/analytics"
                component={KpiAnalytics}
              />
              <Route>
                <div className={classes.notfound}>
                  Page still under development
                </div>
              </Route>
            </Switch>
            {/* <Sidepanel>
              <div>Hello</div>
            </Sidepanel> */}
          </Layout>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
