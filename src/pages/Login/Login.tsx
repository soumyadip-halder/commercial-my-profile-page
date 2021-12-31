import { AppBar, Grid, Toolbar } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { LogoMin } from "../../Logos";
import { loginUser } from "../../redux/Actions/Login";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useCallback } from "react";
import Config from "../../config/Config";
import { useStyles } from "./Styles";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

function Login(props: any) {
  const { loginUser, user, isLoading, errorMessage } = props;
  const classes = useStyles();
  let history = useHistory();
  const { GOOGLE_CLIENT_ID } = Config;
  const responseGoogle = useCallback(
    (response: any) => {
      console.log("starting response");
      if ("tokenId" in response) {
        if (response && response.tokenId) {
          localStorage.setItem("_Gresponse", JSON.stringify(response));
          const idToken =
            response && response.tokenObj && response.tokenObj.id_token;
          console.log(idToken);
          loginUser(idToken);
        }
      }
    },
    [loginUser]
  );
  // useEffect(() => {
  //   console.log("before enter")
  //   if(localStorage.getItem('_Gresponse') && localStorage.getItem('_GresponseV2')) {
  //    console.log("enter")
  //     history.push('/Commercial/dashboard')
  //   }
  //   else if (localStorage.getItem('_Gresponse')) {
  //     responseGoogle(localStorage.getItem('_Gresponse'))
  //   }
  // }, [responseGoogle, history])
  useEffect(() => {
    if (user) {
      history.push("/commercial-webapp/dashboard");
    }
  }, [user, history]);

  const responseGoogleerror = (error: any) => {
    console.log(error);
    history.push("/login");
  };
  // useEffect(() => {
  //   if (errorMessage) {
  //     let errorCode = ServiceResponse.getMessage("login", "serviceUnavailable");
  //     history.push("/login");
  //     console.log(errorMessage);
  //     console.log(errorCode);
  //     // alert("Invalid user");
  //     if (errorMessage === errorCode) {
  //       toast.current.show({
  //         severity: "error",
  //         summary: "Error",
  //         detail: "Login failed. Service is not available.",
  //         life: 6000,
  //         className: "login-toast",
  //       });
  //     } else {
  //       toast.current.show({
  //         severity: "error",
  //         summary: "Error",
  //         detail: "Login failed. Employee does not exist.",
  //         life: 6000,
  //         className: "login-toast",
  //       });
  //     }
  //   }
  // }, [errorMessage, history]);

  // useEffect(() => {
  //   if (error) {
  //     let Errorcode;
  //     if (localStorage && localStorage.getItem("errorCode")) {
  //       Errorcode = localStorage && localStorage.getItem("_GresponseV2");
  //     }
  //     if (Errorcode === "500") {
  //       toast.current.show({
  //         severity: "error",
  //         summary: "",
  //         detail: "Service Unavailable",
  //         life: 6000,
  //       });
  //     }
  //     if (
  //       Errorcode === "400" ||
  //       Errorcode === "404" ||
  //       Errorcode === "403" ||
  //       Errorcode === "401"
  //     ) {
  //       toast.current.show({
  //         severity: "error",
  //         summary: "",
  //         detail: "Login failed. Employee does not exist.",
  //         life: 6000,
  //       });
  //     }
  //   }
  // }, [error]);

  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <AppBar style={{ alignItems: "center", justifyContent: "center" }}>
          <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>
            <Grid container className={classes.gridContainer}>
              <Grid item className={classes.logo} xs={4} xl={4} md={4} lg={4}>
                <LogoMin />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.height} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <h1>Sign in with Google</h1>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogleerror}
            cookiePolicy={"single_host_origin"}
            style={{ flex: 1 }}
            autoLoad={false}
          />
        </div>
        <div
          className={classes.error}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          {errorMessage}
        </div>
        <LoadingComponent showLoader={isLoading} />
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.loginReducer.user,
    error: state.loginReducer.error,
    errorMessage: state.loginReducer.errorMessage,
    isLoading: state.loginReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (idToken: any) => dispatch(loginUser(idToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
