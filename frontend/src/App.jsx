import React, { useEffect, useLayoutEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Pages from "./components/Pages";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
 
  useLayoutEffect(() => {
    const user = sessionStorage.getItem("user");
    if(user){
      setIsLoggedIn(true)
    } 
    setIsLoading(false)
  }, []);
  
  if(isLoading){
    return <h1> Loading...</h1>
  }

  return (
    <>
      {!isLoggedIn ? (
        <>
          <ChakraProvider>
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </ChakraProvider>
        </>
      ) : (
        <>
          <ChakraProvider>
            <Pages setIsLoggedIn={setIsLoggedIn} />
          </ChakraProvider>
        </>
      )}
    </>
  );
}

export default App;
