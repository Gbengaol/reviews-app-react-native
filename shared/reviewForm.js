import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomButton from "./custom-button";

const reviewSchema = yup.object().shape({
  title: yup
    .string()
    .required("Please enter review title")
    .min(4, "Review title must have at least 4 characters")
    .max(20, "Review title must have at most 20 characters"),
  body: yup
    .string()
    .required("Please enter review description")
    .min(8, "Review Description must have at least 8 characters")
    .max(50, "Review Description must have at most 50 characters"),
  rating: yup
    .string()
    .required("Please enter review rating")
    .min(1, "Rating must have exactly one character")
    .max(1, "Rating must have exactly one character")
    .matches(/[1-5]/, "Rating must be a number between 1 and 5"),
});

export default function ReviewForm({ addReview }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      rating: "",
    },
    onSubmit: (values, actions) => {
      addReview(values);
      actions.resetForm();
    },
    validationSchema: reviewSchema,
  });
  return (
    <View style={globalStyles.smallPadding}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Review Title"
          onChangeText={formik.handleChange("title")}
          value={formik.values.title}
          onBlur={formik.handleBlur("title")}
        />
        <Text style={globalStyles.errorText}>
          {formik.touched.title && formik.errors.title}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Review Body"
          onChangeText={formik.handleChange("body")}
          value={formik.values.body}
          multiline
          minHeight={80}
          onBlur={formik.handleBlur("body")}
        />
        <Text style={globalStyles.errorText}>
          {formik.touched.body && formik.errors.body}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Rating (1-5)"
          keyboardType="numeric"
          onChangeText={formik.handleChange("rating")}
          value={formik.values.rating}
          onBlur={formik.handleBlur("rating")}
        />
        <Text style={globalStyles.errorText}>
          {formik.touched.rating && formik.errors.rating}
        </Text>
        <CustomButton title="Submit Review" onPress={formik.handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
});
