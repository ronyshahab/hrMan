import { StyleSheet, View } from "react-native";
import HomeLayout from "./layout/home/home";

const App = ({children} : {children: React.ReactNode} ) => {
  return (
    <View style={styles.container}>
        {/* <LoginScreen /> */}
        <HomeLayout />
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
