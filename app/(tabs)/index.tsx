import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        Go to Sign Up
      </Link>

      <View className="flex flex-row gap-2 mt-12">
        <Link href="/subscriptions/spotify">Spotify Sub</Link>
        <Link
          href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" },
          }}
        >
          Claude Max
        </Link>
      </View>
    </SafeAreaView>
  );
}
