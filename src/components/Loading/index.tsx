import { Center, Spinner } from "native-base";

function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="gray.700" />
    </Center>
  );
}
export { Loading };