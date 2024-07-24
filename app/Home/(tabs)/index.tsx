import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { HouseListingData } from "../../../components/DummyData";
import { HouseData, HouseSliderData } from "../../../components/DummyData";
import { Link } from "expo-router";

const Index = () => {
  const data = HouseData || [];
  const sliderData = HouseSliderData || [];

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Entypo name="menu" size={24} color="black" />
          <Text>Hello Ayomide</Text>
          <MaterialCommunityIcons name="tune" size={24} color="black" />
        </View>
        <View>
          <View
            style={{
              padding: 13,
              borderRadius: 10,
              width: "95%",
              margin: "auto",
              marginTop: 10,
              marginVertical: 10,
              backgroundColor: "#F4F4F4",
              flexDirection: "row",
            }}
          >
            <FontAwesome name="search" size={20} color="black" />
            <TextInput
              placeholder="Find your dream house"
              placeholderTextColor={"#737373"}
              style={{
                width: "100%",
                paddingHorizontal: 10,
              }}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            Featured Apartment
          </Text>
        </View>

        <View>
          {data.map((item, i) => (
            <View
              key={i}
              style={{ flexDirection: "column", marginVertical: 20 }}
            >
              <Image source={item.image} style={styles.HouseImg} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {item.label}
                </Text>
                <Text style={{ fontSize: 17 }}>{item.price}</Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "400", fontSize: 15, paddingLeft: 10 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            Featured Slider
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.sliderContainer}
          >
            {sliderData.map((slider, s) => (
              <View key={s} style={styles.sliderItem}>
                <Image source={slider.Sliderimage} style={styles.SliderImg} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 17 }}>
              Sales Listing
            </Text>
            <Text style={{ color: "#0D0D0D" }}>See all</Text>
          </View>

          <View></View>
          {HouseListingData.map((list, l) => (
            <View key={l} style={{flexDirection: 'row', backgroundColor: '#F8F8F8', margin: "auto",  paddingVertical: 10, paddingHorizontal: 10,}}>
              <View>
                <Image source={list.Listimage} />
              </View>
              <View style={{paddingLeft: 10}}>
                  <Text style={{fontWeight: '700', fontSize: 17,}}>{list.HouseFeatures}</Text>
                  <Text style={{fontSize: 15,  marginTop: 2}}>{list.HouseLocation}</Text>
                  <Text style={{fontWeight: '500', fontSize: 16,  marginTop: 2}}>{list.HouseState}</Text>
                  <Text style={{fontSize: 15}}>{list.stars}</Text>
                  <Text style={{fontSize: 15,  marginTop: 2}}>{list.Price}</Text>
                  <TouchableOpacity style={{backgroundColor: "#0F315E",width: "70%", height: '30%', justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: 10}}>
                  <Link href='' style={{color: "white"}}>
                      {list.btn}
                  </Link>
                  </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View>
          <View>
            <Text style={{padding: 20, fontWeight: '400', fontSize: 20}}>Meet Our Partners</Text>
            <Image source={require('../../../assets/images/PartnerShipImg.png')} style={{resizeMode: 'contain', margin: "auto"}}/>
          </View>
        </View>
        <View>
            {/* <ImageBackground source={}/> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HouseImg: {
    borderRadius: 10,
    width: "95%",
    margin: "auto",
  },
  SliderImg: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  sliderItem: {
    marginRight: 10,
  },
});
