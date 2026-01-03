import { View, Text, StyleSheet } from "react-native";
import LoginScreen from "./layout/auth/login";

const App = ({children} : {children: React.ReactNode} ) => {
  return (
    <View style={styles.container}>
        <LoginScreen />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 16,
    // width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
