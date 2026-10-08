import BangDBWebSDK from "@bangdb/web-sdk/react";
import "./App.css";

function App() {
  return (
    <BangDBWebSDK
      config={{
        userService: "https://testuser.bangdb.com:18080",
      }}
    />
  );
}

export default App;
