import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth } from "./services/auth";
import Dashboard from "./pages/Dashboard";

export function Routes() {
  const [authState, setAuthState] = useState("loading");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user: " + user.email);
        setAuthState("authenticated");
      } else {
        setAuthState("not authenticated");
      }
    });
  }, []);

  useEffect(() => {
    console.log(authState !== "loading");
  }, [authState]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {authState === "authenticated" && [
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        ]}
        {authState === "not authenticated" && (
          <Route path="/dashboard*">
            <Redirect to="/login" />
          </Route>
        )}
        {authState !== "loading" && (
          <Route path="*">
            <label>not found</label>
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}
