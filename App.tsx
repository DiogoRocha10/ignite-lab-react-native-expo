import { NativeBaseProvider, StatusBar } from "native-base";
import { Register } from "./src/screens/Register";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <SignIn /> */}
      <Register />
    </NativeBaseProvider>
  );
}
