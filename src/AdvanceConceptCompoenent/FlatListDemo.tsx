import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { FC } from "react";

const Flat_data = Array.from({ length: 50 }, (_, index) => ({
  id: index.toString(),
  name: `Item ${index + 1}`,
}));

const FlatListDemo: FC = () => {
  const handleRenderItem = ({
    item,
  }: {
    item: { id: string; name: string };
  }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FlatListDemo</Text>

      {/* This flatlist takes data and renderItem and here renderItem is a function that takes an individual object with item property and returns a view , like howthat particular item will render  */}
      <FlatList
        data={Flat_data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRenderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 8,
    backgroundColor: "blue",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    padding: 10,
    backgroundColor: "red",
  },
  headerText: {
    fontSize: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: "green",
  },
  footerText: {
    fontSize: 20,
  },
});
export default FlatListDemo;
