import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  StatusBar,
  Keyboard,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { globalStyles } from "../styles/globalStyles";
import { AuthContext } from "../App";
import Loader from "../shared/loader";

const reviewSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter your username")
    .min(4, "Username must have at least 4 characters")
    .max(20, "Username must have at most 20 characters"),
  password: yup
    .string()
    .required("Please enter password")
    .min(1, "Password must have at least 1 character")
    .max(50, "Password cannot have more than 50 characters"),
});

export default function SignInScreen({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, actions) => loginHandle(values, actions),
    validationSchema: reviewSchema,
  });

  const loginHandle = ({ username, password }, actions) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      await setUserToken("Gnega's token");
      actions.resetForm();
      // navigation.navigate("Users");
    }, 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#f01d71" barStyle="light-content" />
        <Animatable.View animation="fadeInDownBig" style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={[styles.text_footer, { color: "#f01d71" }]}>
            Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#f01d71" size={20} />
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#f01d71"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={formik.handleChange("username")}
              value={formik.values.username}
              onBlur={formik.handleBlur("username")}
            />
            {formik.values.username ? (
              <>
                {!formik.errors.username ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : (
                  <Animatable.View animation="bounceIn">
                    <MaterialIcons name="cancel" color="#f01d71" size={20} />
                  </Animatable.View>
                )}
              </>
            ) : null}
          </View>
          <Animatable.Text
            animation="fadeIn"
            duration={1500}
            style={{ ...globalStyles.errorText, marginTop: 0, marginBottom: 5 }}
          >
            {formik.touched.username && formik.errors.username}
          </Animatable.Text>

          <Text style={[styles.text_footer, { color: "#f01d71" }]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#f01d71" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#f01d71"
              secureTextEntry={hidePassword}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={formik.handleChange("password")}
              value={formik.values.password}
              onBlur={formik.handleBlur("password")}
            />
            <TouchableOpacity
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
              {/* Show password toggle icon conditionally */}
              {hidePassword ? (
                <Animatable.View animation="fadeIn" duration={1500}>
                  <Feather name="eye-off" color="#f01d71" size={20} />
                </Animatable.View>
              ) : (
                <Animatable.View animation="fadeIn" duration={1500}>
                  <Feather name="eye" color="#f01d71" size={20} />
                </Animatable.View>
              )}
            </TouchableOpacity>
          </View>
          <Animatable.Text
            animation="fadeIn"
            duration={1500}
            style={{ ...globalStyles.errorText, marginTop: 0, marginBottom: 5 }}
          >
            {formik.touched.password && formik.errors.password}
          </Animatable.Text>

          <TouchableOpacity onPress={formik.handleSubmit}>
            <View style={{ ...styles.button, marginTop: 40 }}>
              {loading ? (
                <View style={globalStyles.authButtonText}>
                  <Loader />
                </View>
              ) : (
                <Text style={globalStyles.authButtonText}>Sign In</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <View
              style={{
                ...styles.button,
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  ...globalStyles.authButtonText,
                  color: "#f01d71",
                }}
              >
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity>
            <Text
              style={{
                color: "#f01d71",
                marginTop: 15,
                fontWeight: "bold",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f01d71",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    alignItems: "center",
    height: 40,
  },
  textInput: {
    flex: 1,
    paddingLeft: 20,
    color: "#f01d71",
  },
  button: {
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#f01d71",
    borderWidth: 1,
    borderColor: "#f01d71",
  },
});
