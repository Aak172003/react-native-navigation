import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { FC, useState } from "react";

const initial_data = Array.from({ length: 5 }, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const PullToRefreshDemo: FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(initial_data);

  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const newItems = Array.from({ length: 20 }, (_, index) => ({
          id: (data.length + index).toString(),
          title: `Item ${data.length + index + 1}`,
        }));
        setData([...data, ...newItems]);
        setLoading(false);
      }, 4000);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(initial_data);
      setRefreshing(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Large List with pull to refresh and infinte scrolling
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={loadMoreData}
        // bydefault it is set 2
        onEndReachedThreshold={0.1}
        style={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              style={styles.loader}
              size={"large"}
              color={"#000"}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    marginVertical: 20,
    paddingVertical: 20,
  },
});

export default PullToRefreshDemo;
