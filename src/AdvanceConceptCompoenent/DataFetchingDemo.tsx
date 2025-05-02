import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { ENDPOINT_DUMMY_DATA } from "../../text";

interface Post {
  id: number;
  title: string;
}

const DataFetchingDemo: FC = () => {
  const [postData, setPostData] = useState<Post[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchListOfPosts = async () => {
    try {
      setLoading(true);

      const response = await fetch(ENDPOINT_DUMMY_DATA);

      console.log("response ", response);
      //   here define data is of Post Type
      const data: Post[] = await response.json();

      console.log("data ", data);

      if (data.length > 0) {
        setPostData(data);
      } else {
        setPostData([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfPosts();
  }, []);

  const renderItem = ({ item }: { item: Post }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: "red", textAlign: "center" }]}>
        Data Fetch Demo Using Fetch API which is built-in API call method in JS
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loading}
        />
      ) : (
        <FlatList
          data={postData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#c6df0a",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DataFetchingDemo;
