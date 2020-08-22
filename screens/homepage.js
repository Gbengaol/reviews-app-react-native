import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../shared/reviewForm";
import { useTheme } from "react-native-paper";

export default function Homepage({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { colors, dark } = useTheme();
  const [reviews, setReviews] = useState([
    {
      title: "It's such an amazing feeling",
      rating: 5,
      body: "lorem ipsum teaches typing",
      key: "1",
    },
    {
      title: "No better feeling has been felt",
      rating: 3,
      body: "lorem ipsum teaches typing",
      key: "2",
    },
    {
      title: "I love learning new stuffs",
      rating: 1,
      body: "lorem ipsum teaches typing",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    review.key = Date.now().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      {/* <StatusBar barStyle={dark ? "light-content" : "dark-content"} /> */}
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...styles.modalToggle,
                ...styles.modalClose,
              }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
        color={colors.text}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", { item })}
            >
              <Card>
                <Text
                  style={{
                    ...globalStyles.titleText,
                    color: colors.background,
                  }}
                >
                  {item.title}
                </Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
