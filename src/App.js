import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";
import { useAuthContext } from "@asgardeo/auth-react";

const AppContent = () => {
        const { state, signIn, signOut } = useAuthContext();
      
        return (
          <div className="App">
            {
              state.isAuthenticated
                ? (
                  <div>
                    <ul>
                      <li>{state.username}</li>
                    </ul>
      
                    <button onClick={() => signOut()}>Logout</button>
                  </div>
                )
                : <button onClick={() => signIn()}>Login</button>
            }
          </div>
        );
      }


const Index = () => (
    <AuthProvider
        config={ {
            signInRedirectURL: "http://localhost:3000",
            signOutRedirectURL: "http://localhost:3000",
            clientID: "h6kNe9cdohY7BjtHSTARSOc1tOAa",
            baseUrl: "https://api.asgardeo.io/t/testingor",
            scope: [ "openid","profile" ]
        } }
    >
        { <AppContent/> }
    </AuthProvider>
);


export default Index;    
// render((<Index />), document.getElementById("root"));