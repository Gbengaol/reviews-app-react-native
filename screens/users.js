import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { globalStyles } from "../styles/globalStyles";
import useAllUsers from "../custom-hooks/useAllUsers";
import { FlatList } from "react-native-gesture-handler";
import UserCard from "../shared/user-card";

export default function Users() {
  const { status, data } = useAllUsers();

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }
  if (status === "error") {
    return <Text>Error...</Text>;
  }

  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          ...globalStyles.titleText,
          textAlign: "center",
          marginBottom: 7.5,
          flex: 1,
        }}
      >
        A List of all users
      </Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <UserCard item={item} />;
          }}
        />
      </View>
    </View>
  );
}
