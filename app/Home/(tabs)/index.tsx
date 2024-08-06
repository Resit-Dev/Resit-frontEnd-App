import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  TouchableHighlightBase,
  TouchableHighlight,
  Pressable
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  HouseListingData,
  HouseData,
  HouseSliderData,
} from "../../../components/DummyData";
import { Link, router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

const Index = () => {
  const data = HouseData || [];
  const sliderData = HouseSliderData || [];
  
  const HandleDetails = () => {
    router.push('../ProductDeatils/page');
  }
  const renderHouseItem = ({ item }) => (
    <Pressable  style={styles.houseContainer} onPress={HandleDetails}>
      <Image source={item.image} style={styles.houseImg} />
      <View style={styles.houseDetails}>
        <Text style={styles.houseLabel}>{item.label}</Text>
        <Text style={styles.housePrice}>{item.price}</Text>
      </View>
      <Text style={styles.houseLocation}>{item.location}</Text>
    </Pressable>
  );

  const renderSliderItem = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={item.Sliderimage} style={styles.sliderImg} />
    </View>
  );

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={item.Listimage} style={styles.listImage} />
      <View style={styles.listDetails}>
        <Text style={styles.listFeatures}>{item.HouseFeatures}</Text>
        <Text style={styles.listLocation}>{item.HouseLocation}</Text>
        <Text style={styles.listState}>{item.HouseState}</Text>
        <Entypo name={item.star} size={20} color="black" />
        <Text style={styles.listPrice}>{item.Price}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Link href="" style={styles.buyButtonText}>
            {item.btn}
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <StatusBar />
      <View style={styles.content}>
        <View style={styles.header}>
          <Entypo name="menu" size={24} color="black" />
          <Text style={styles.headerText}>Hello Ayomide</Text>
          <MaterialCommunityIcons name="tune" size={24} color="black" />
        </View>

        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="black"/>
          <TextInput
            placeholder="Find your dream house"
            placeholderTextColor="#737373"
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Featured Apartment</Text>
        <FlatList
          data={data}
          renderItem={renderHouseItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />} 
        />

        <Text style={styles.sectionTitle}>Featured Slider</Text>
       <Link href='../landDetails/landDetails'>
        <FlatList
          data={sliderData}
          renderItem={renderSliderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.sliderContainer}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
          />
        </Link>

        <View style={styles.listingHeader}>
          <Text style={styles.listingTitle}>Sales Listing</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          data={HouseListingData}
          renderItem={renderListItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />} 
          contentContainerStyle={{ paddingBottom: 20 }} 
        />

        <Text style={styles.sectionTitle}>Meet Our Partners</Text>
        <Image
          source={require("../../../assets/images/PartnerShipImg.png")}
          style={styles.partnerImg}
        />
        <View style={styles.subscriptionContainer}>
          <ImageBackground
            source={require("../../../assets/images/nl.jpg")}
            style={styles.subscriptionImage}
          />
          <View style={styles.subscriptionOverlay}>
            <Text style={styles.subscriptionTitle}>SUBSCRIPTION</Text>
            <Text style={styles.subscriptionSubtitle}>Get Notified Once</Text>
            <Text style={styles.subscriptionText}>
              Property is up for sales
            </Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                padding: 10,
                borderRadius: 3,
                width: '70%',
                justifyContent: 'space-between'
              }}
            >
              <TextInput
                placeholder="Enter Your Email Address"
                placeholderTextColor="#D9D9D9"
                style={styles.subscriptionInput}
                
              />
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                   <Text>Resources</Text>
                   <AntDesign name="caretright" size={20} color="black" />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                   <Text>Help</Text>
                   <AntDesign name="caretright" size={20} color="black" />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                   <Text>Company</Text>
                   <AntDesign name="caretright" size={20} color="black" />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                   <Text>Promotion and Discount</Text>
                   <AntDesign name="caretright" size={20} color="black" />
              </View>
              
        </View>
      
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  searchContainer: {
    flexDirection: "row",
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  houseContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  houseImg: {
    borderRadius: 10,
    width: "100%",
  },
  houseDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  houseLabel: {
    fontWeight: "bold",
    fontSize: 17,
  },
  housePrice: {
    fontSize: 17,
  },
  houseLocation: {
    fontWeight: "400",
    fontSize: 15,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  sliderItem: {
    marginRight: 10,
  },
  sliderImg: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  listingHeader: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  listingTitle: {
    fontWeight: "700",
    fontSize: 17,
  },
  seeAll: {
    color: "#0D0D0D",
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  listImage: {
    width: 170,
    height: 150,
    borderRadius: 10,
  },
  listDetails: {
    paddingLeft: 10,
    flex: 1,
  },
  listFeatures: {
    fontWeight: "700",
    fontSize: 17,
  },
  listLocation: {
    fontSize: 15,
    marginTop: 2,
  },
  listState: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 2,
  },
  listPrice: {
    fontSize: 15,
    marginTop: 2,
  },
  buyButton: {
    backgroundColor: "#0F315E",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
  },
  buyButtonText: {
    color: "white",
  },
  partnerImg: {
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20,
  },
  subscriptionContainer: {
    marginVertical: 20,
    alignItems: "center",
    marginHorizontal: 5
  },
  subscriptionImage: {
    width: "98%",
    height: 200,
    borderRadius: 10,
    margin: "auto",
  },
  subscriptionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "98%",
    margin: "auto",
  },
  subscriptionTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  subscriptionSubtitle: {
    color: "#FFFF00",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  subscriptionText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 20,
  },
  subscriptionInput: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "#FFFFFF",
    fontSize:  10,
  },
  subscribeButton: {
    backgroundColor: "#8F0404",
    paddingHorizontal: 10,
  },
  subscribeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
