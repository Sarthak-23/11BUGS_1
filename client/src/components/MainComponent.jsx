import { useContext } from "react";
import { ThemeChangeContext } from "../contexts/ThemeChangeContext";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Profile from "./Profile/Profile";

const MainComponent = () => {
  const [mode] = useContext(ThemeChangeContext);

  //   Theme
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/profile/:id" component={<Profile />} />
        <Route path="/auth" component={<Auth />} />
      </Routes>
    </ThemeProvider>
  );
};

export default MainComponent;
