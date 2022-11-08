import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import axios from "axios";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";

function App() {
  const [theme, setTheme] = useState("light");
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState("");
  const [isError, setIsError] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fetchData = () => {
    axios
      .get(`https://api.github.com/users/${userInput}`)
      .then((res) => {
        setUser(res.data);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} themeToggler={themeToggler} />
      <Search
        setUserInput={setUserInput}
        fetchData={fetchData}
        isError={isError}
      />
      {user && !isError ? <Profile user={user} /> : null}
    </ThemeProvider>
  );
}

export default App;
