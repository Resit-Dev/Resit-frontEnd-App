import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { LandInvestmentData } from "@/components/DummyData";

const invest = () => {
  const data = LandInvestmentData || [];

  const renderHouseInvestmentItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: "auto",
        width: "95%",
        padding: 7,
        gap: 5,
      }}
    >
      <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
        <View>
          <Image
            source={item.InvestmentImg}
            style={{ width: 100, height: 80, borderRadius: 5 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "500" }}>{item.InvestmentLabel}</Text>
          <Text style={{ paddingTop: 10, fontWeight: "300", color: "#0D0D0D" }}>
            {item.InvestmentLocation}
          </Text>
          <Text style={{ color: "#737373", paddingTop: 10 }}>
            {item.InvestmentPrice}
          </Text>
        </View>
      </View>
      {/* <Text>{item.location}</Text> */}
      <View style={{ paddingLeft: 5 }}>
        <Text>{item.InvestmentProfitNum}</Text>
        <Text style={{ color: "#029310", paddingTop: 10 }}>
          {item.InvestmentProfit}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href="../">
          <AntDesign name="left" size={24} color="black" />
        </Link>
        <Text style={styles.headerText}>Investment</Text>
        <MaterialCommunityIcons name="tune" size={24} color="black" />
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="black" />
        <TextInput
          placeholder="Find your dream house"
          placeholderTextColor="#737373"
          style={styles.searchInput}
        />
      </View>

      <View
        style={{
          backgroundColor: "#F4F4F4",
          padding: 20,
          marginHorizontal: "auto",
          width: "90%",
          borderRadius: 2,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#737373" }}>Portfolio</Text>
          <Text style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 13 }}>
            Average Return
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ color: "#03337D", fontSize: 21, fontWeight: "bold" }}
            >
              # 10,000 000
            </Text>
            <Text style={{ color: "#A6A6A6", fontSize: 13, paddingTop: 15 }}>
              <Text style={{ color: "#267501" }}>12.5 %</Text> for the last
              month
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#D9D9D9",
                padding: 10,
                borderRadius: 2,
              }}
            >
              <Text style={{ color: "#029310", fontSize: 16 }}>30.0%</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#F4F4F4",
            padding: 15,
            marginHorizontal: "auto",
            borderRadius: 2,
            flexDirection: "column",
          }}
        >
          <Text style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 11 }}>
            Average property price
          </Text>
          <Text
            style={{
              color: "#03337D",
              fontSize: 17,
              fontWeight: "bold",
              paddingTop: 5,
            }}
          >
            # 10,000 000
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F4F4F4",
            padding: 15,
            marginHorizontal: "auto",
            borderRadius: 2,
            flexDirection: "column",
          }}
        >
          <Text style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 11 }}>
            Monthly Profit
          </Text>
          <Text
            style={{
              color: "#029310",
              fontSize: 17,
              fontWeight: "bold",
              paddingTop: 5,
            }}
          >
            +2.0%
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F4F4F4",
            padding: 15,
            marginHorizontal: "auto",
            borderRadius: 2,
            flexDirection: "column",
          }}
        >
          <Text style={{ color: "#A6A6A6", fontWeight: "400", fontSize: 11 }}>
            Profit Yearly
          </Text>
          <Text
            style={{
              color: "#029310",
              fontSize: 17,
              fontWeight: "bold",
              paddingTop: 5,
            }}
          >
            +24.0 %
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>My Investment</Text>
        <Text style={{ color: "#0F315E" }}>See analytics</Text>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderHouseInvestmentItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
      <View>
        <View>
          <Text style={{ fontWeight: "300", fontSize: 18, margin: 20 }}>
            Market Forecast
          </Text>
        </View>
        <View style={{flexDirection: 'column', margin: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
            <View>
              <MaterialIcons name="analytics" size={24} color="black" />
              <Text>Analytics</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default invest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
});
