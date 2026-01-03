import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

        <View style={styles.subContainer}>
            <Text style={styles.h1Text}>Welcome back</Text>
            <Text style={styles.subText}>Login using your mobile number</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
                <Pressable style={styles.button} onPress={() => {router.push('/layout/home/home')}}>
                    <Text>Login</Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8
    // marginTop: 16,
    // backgroundColor:'blue'
  },
  subContainer: {
    marginVertical: "30%",
    // flex:1,
    // backgroundColor: "red",
    justifyContent:'flex-start'
  },
  inputContainer: {
    // backgroundColor: "green",
    marginVertical: "20%",
    padding: 10
  },
  h1Text:{
    fontFamily: "Arial",
    fontSize: 24,
    color: "grey",
    fontWeight: "bold",
  },
  subText:{
    fontFamily: "Arial",
    fontSize: 16,
    color: "grey",
  },
  input:{
    borderWidth:1,
    borderColor: "grey",
    borderRadius: 4,
    padding: 8,
    margin:5
  },
  button:{
    backgroundColor: "cyan",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "green",
  },
});

export default LoginScreen;
