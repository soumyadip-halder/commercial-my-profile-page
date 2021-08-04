import { Container, useMediaQuery } from "@material-ui/core";
import React from "react";
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import LayoutSmall from "./LayoutSmall";
import CommercialDashboard from "./CommercialDashboard";
import Promotions from "./Promotions";
import RetailPrice from "./RetailPrice";
import RangeAmend from "./RangeAmend";
import ProductPortal from "./ProductPortal";
import SupplierPortal from "./SupplierPortal";
import KpiAnalytics from "./KpiAnalytics";
import CommercialDashboardSmall from "./CommercialDashboardSmall";
import PromotionsSmall from "./PromotionsSmall";
import RetailPriceSmall from "./RetailPriceSmall";
import RangeAmendSmall from "./RangeAmendSmall";
import ProductPortalSmall from "./ProductPortalSmall";
import SupplierPortalSmall from "./SupplierPortalSmall";
import KpiAnalyticsSmall from "./KpiAnalyticsSmall";
import store from "../redux/store";
import { Provider } from "react-redux";

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
  const active = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <BrowserRouter>
            {!active ? (
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
                  <Route
                    exact
                    path="/Commercial/retail"
                    component={RetailPrice}
                  />
                  <Route
                    exact
                    path="/Commercial/range"
                    component={RangeAmend}
                  />
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
              </Layout>
            ) : (
              <LayoutSmall>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/Commercial/dashboard" />
                  </Route>
                  <Route
                    exact
                    path="/Commercial/dashboard"
                    component={CommercialDashboardSmall}
                  ></Route>
                  <Route
                    exact
                    path="/Commercial/promotions"
                    component={PromotionsSmall}
                  ></Route>
                  <Route
                    exact
                    path="/Commercial/retail"
                    component={RetailPriceSmall}
                  />
                  <Route
                    exact
                    path="/Commercial/range"
                    component={RangeAmendSmall}
                  />
                  <Route
                    exact
                    path="/Commercial/product"
                    component={ProductPortalSmall}
                  />
                  <Route
                    exact
                    path="/Commercial/supplier"
                    component={SupplierPortalSmall}
                  />
                  <Route
                    exact
                    path="/Commercial/analytics"
                    component={KpiAnalyticsSmall}
                  />
                  <Route>
                    <div className={classes.notfound}>
                      Page still under development
                    </div>
                  </Route>
                </Switch>
              </LayoutSmall>
            )}
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
