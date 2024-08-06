import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";1

export default function page() {
  const [seemore, setSeemore] = useState(true);
  const handleSeeMore = () => {
    setSeemore(!seemore);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href="../">
          <AntDesign name="left" size={24} color="black" />
        </Link>
        <Text style={styles.headerText}>Product Page</Text>
        <MaterialCommunityIcons name="tune" size={24} color="black" />
      </View>

      <View style={styles.content}>
        <Image
          source={require("../../../assets/images/DetailsImg.png")}
          width={100}
          height={100}
          style={{ margin: "auto" }}
        />

        <View style={styles.detailsContainer}>
          <View>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Orange House</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>4.9</Text>
                <Entypo name="star" size={13} color="#FC8A04" />
                <Entypo name="star" size={13} color="#FC8A04" />
                <Entypo name="star" size={13} color="#FC8A04" />
                <Entypo name="star" size={13} color="#FC8A04" />
                <Entypo name="star" size={13} color="#FC8A04" />
                <Text style={styles.reviewText}> | 200 Reviews</Text>
              </View>
            </View>

            <Text style={styles.description}>4-Bed Room Duplex</Text>
          </View>
          <View>
            <Text style={styles.price}>$2000</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#39383820",
                flexDirection: "row",
                padding: 5,
                alignItems: "center",
                borderRadius: 10,
                gap: 5,
              }}
            >
              <FontAwesome name="map-marker" size={15} color="black" />
              <Text>Map</Text>
            </View>
            <View style={styles.mapButton}>
              <FontAwesome5 name="car" size={15} color="black" />
              <Text>150 min</Text>
            </View>
            <View style={styles.mapButton}>
              <FontAwesome5 name="ruler" size={15} color="black" />
              <Text>500 M2</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.requestButton}
            onPress={() => {
              router.push("");
            }}
          >
            <Text style={{ color: "white" }}>Request Info</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontWeight: 500, fontSize: 20 }}>OverView</Text>
          <Pressable onPress={handleSeeMore} style={{paddingVertical: 20}}>
            <Text>
              {seemore
                ? <Text style={{fontSize: 17, fontWeight: 300}}>The house consist of 4 bedroom detached duplex with gym inside and gym equipment. It has a garge that is spacious and can contain 5 cars at the same time. swimming pool in..... <Text style={{fontWeight: 'bold',}}> Read More</Text></Text>
                : <Text style={{fontSize: 17, fontWeight: 300}}>The house consist of 4 bedroom detached duplex with gym inside and gym equipment. It has a garge that is spacious and can contain 5 cars at the same time. swimming pool in condusive environment. 24 hours water supply and constant water supply.</Text>
                }
            </Text>
          </Pressable>
        </View>

        <View style={{justifyContent:'space-around', flexDirection: 'row'}}>
               <View style={{flexDirection: 'row', gap: 6}}>
                <Image
                  source={require("../../../assets/images/person.png")}
                  width={200}
                  height={150}
                  />
                  <View>
                    <Text>John Doe</Text>
                    <Text>Real Estate Agent</Text>  
                  </View>
                  </View>
                  <View style={{flexDirection: 'row', gap:6}}>
                  <MaterialIcons name="message" size={24} color="black" />
                  <FontAwesome name="phone" size={24} color="black" />
                  </View>
        </View>

        <View>
                  <Text style={{fontSize: 20, padding: 20}}>Facilities</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

                      <TouchableOpacity style={{backgroundColor:'#39383820', padding:10,  borderRadius: 20}}>
                          <Ionicons name="bed-outline" size={24} color="#09003bc6" />
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'#39383820', padding:10,  borderRadius: 20}}>
                           <MaterialCommunityIcons name="fridge-outline" size={24} color="#09003bc6" />
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'#39383820', padding:10,  borderRadius: 20}}>
                      <MaterialCommunityIcons name="hospital-building" size={24} color="#09003bc6" />
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'#39383820', padding:10,  borderRadius: 20}}>
                          <Ionicons name="bed-outline" size={24} color="#09003bc6" />
                      </TouchableOpacity>
                      <TouchableOpacity style={{backgroundColor:'#39383820', padding:10,  borderRadius: 20}}>
                      <MaterialCommunityIcons name="hospital-building" size={24} color="#09003bc6" />
                      </TouchableOpacity>

                </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
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
  content: {
    paddingHorizontal: 15,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },
  titleRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  ratingRow: {
    flexDirection: "row",
  },
  ratingText: {
    fontSize: 13,
  },
  reviewText: {
    fontSize: 10,
  },
  description: {
    fontWeight: "200",
    fontSize: 15,
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  mapContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  mapButton: {
    flexDirection: "row",
    backgroundColor: "#39383820",
    padding: 3,
    borderRadius: 10,
    gap: 5,
    alignItems: "center",
  },
  requestButton: {
    backgroundColor: "#0F315E",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    color: "white",
  },
});
