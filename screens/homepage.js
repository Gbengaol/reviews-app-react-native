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
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../shared/reviewForm";

export default function Homepage({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "It's such an amazing feeling",
      rating: 5,
      body: "lorem ipsum teaches typing",
      key: "1",
    },
    {
      title: "No better feeling has ben felt",
      rating: 3,
      body: "lorem ipsum teaches typing",
      key: "2",
    },
    {
      title: "I love learing new stuffs",
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
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", { item })}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
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
