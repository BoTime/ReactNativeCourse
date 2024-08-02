import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  ListRenderItem,
} from "react-native";
import { Colors } from "@/constants/Colors";

// Implement the menu of Little Lemon Restaurant with SectionList

interface Item {
  name: string;
  price: string;
  id?: string;
}

interface Section {
  title: string;
  data: Item[];
}

const menuItemsToDisplay: Array<Section> = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const ItemView = ({ item }: { item: Item }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{item.name}</Text>
    <Text style={styles.itemText}>{item.price}</Text>
  </View>
);

const Header = () => (
  <Text style={styles.headerText} numberOfLines={3}>
    View Menu
  </Text>
);

const Footer = () => (
  <View>
    <Text style={styles.footer}>All rights reserved by Little Lemon, 2024</Text>
  </View>
);

const SectionHeader = ({ title }: {title: string}) => (
  <View>
    <Text style={styles.sectionHeader}>{title} </Text>
  </View>
);

const Separator = () => <View style={styles.separator}></View>;

const MenuItems = () => {
  // Give renderItem the correct type of its item
  // Reference: https://stackoverflow.com/questions/52701665/typescript-react-native-flatlist-how-to-give-renderitem-the-correct-type-of-it
  // Option 1: Through Object destructing
  // const renderItem = ({ item }: { item: Item }) => <ItemView item={item} />;
  // Option 2: Through ListRenderItem
  // renderItem: ListRenderItem<Item> = ({item}) -> { ... }
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ItemView item={item} />
  );
  const renderSectionHeader = ({ section }: { section: Section }) => (
    <SectionHeader title={section.title} />
  );
  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      ></SectionList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  footer: {
    backgroundColor: Colors.light.footerBackground,
    marginBottom: 10,
    fontSize: 18,
    fontStyle: "italic",
    color: Colors.light.footerFont,
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
    backgroundColor: Colors.light.welcomeScreenBackground,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  sectionHeader: {
    backgroundColor: "#F4CE14",
    color: "black",
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
  },
});

export default MenuItems;
