import { ScrollView, StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';
import { LandData } from '@/components/DummyData';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';



const landDetails = () => {
  const data = LandData || [];

  const renderLandItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.Landimage} style={styles.image} />
      <Text style={styles.label}>{item.LandLabel}</Text>
      <Text style={styles.location}>{item.Landlocation}</Text>
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <Text>4.9</Text>
        <Entypo name={item.LandStars} size={15} color="#FC8A04" />
        <Entypo name={item.LandStars} size={15} color="#FC8A04" />
        <Entypo name={item.LandStars} size={15} color="#FC8A04" />
        <Entypo name={item.LandStars} size={15} color="#FC8A04" />
        <Entypo name={item.LandStars} size={15} color="#FC8A04" />
        <Text style={{fontSize: 13}}> | 200 Reviews</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Link href='../'>
      <AntDesign name="left" size={24} color="black" />
        </Link>
          <Text style={styles.headerText}>Land</Text>
          <MaterialCommunityIcons name="tune" size={24} color="black" />
       </View>
        <FlatList
          data={data}
          renderItem={renderLandItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default landDetails;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  image: {
    width: 180,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  location: {
    fontSize: 14,
    textAlign: 'left',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
