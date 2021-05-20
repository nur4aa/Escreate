import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = "Планда";
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <nav className="top">
        <h2>Планда</h2>
        <div>
          <Button color="inherit" href="/login">
            Войти
          </Button>
          <Button variant="contained" href="/register">
            Регистрация
          </Button>
        </div>
      </nav>
      <div className="landing-inner">
        <h1>Планда</h1>
        <p>Планируй, учитывай и выполняй!</p>
        <div className="buttons">
          <Button variant="outlined" color="inherit" href="/register">
            Войти
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
