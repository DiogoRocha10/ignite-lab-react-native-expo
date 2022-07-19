import { NativeBaseProvider, StatusBar } from "native-base";
import { SignIn } from "./src/screens/SignIn.tsx";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </NativeBaseProvider>
  );
}
