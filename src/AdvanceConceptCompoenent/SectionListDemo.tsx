import { View, Text, SectionList, StyleSheet } from "react-native";
import React, { FC } from "react";
import { sectionListData } from "../constants/sectionListData";

const SectionListDemo: FC = () => {
  const handleRenderItem = ({ item }: { item: string }) => (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item}</Text>
    </View>
  );

  const handleRenderSectionHeader = ({
    section,
  }: {
    section: { title: string; data: string[] };
  }) => (
    <View
      style={{
        padding: 10,
        marginLeft: 10,
        marginTop: 15,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
        {section.title}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={sectionListData}
        renderItem={handleRenderItem}
        renderSectionHeader={handleRenderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListDemo;
