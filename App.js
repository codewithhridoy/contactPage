import React, { useState } from "react";
import {
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Picker,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Zocial from "react-native-vector-icons/Zocial";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground source={require("./header.png")} style={styles.image}>
          <TouchableOpacity>
            <EntypoIcon
              style={styles.CrossIcon}
              name="cross"
              size={30}
              color="#900"
            />
          </TouchableOpacity>
          <Text style={styles.text}>Add Contact</Text>
          <TouchableOpacity>
            <AntDesignIcon
              style={styles.CheckIcon}
              name="checkcircle"
              size={30}
              color="#900"
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          backgroundColor={"#FF573300"}
          translucent
          barStyle="light-content"
        />

        <View style={styles.main}>
          <View style={styles.pickerBorder}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker1}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="--- Select Source ---" value="java" />
              {/* <Picker.Item label="JavaScript" value="js" /> */}
            </Picker>
          </View>

          <View style={styles.textField}>
            <FontAwesome
              style={styles.Icon}
              name="user"
              size={30}
              color="#900"
            />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Full Name"
            />
          </View>

          <View style={styles.textField}>
            <Zocial style={styles.Icon} name="call" size={30} color="#900" />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Mobile"
            />
          </View>

          <View style={styles.textField}>
            <MaterialIcon
              style={styles.Icon}
              name="email"
              size={30}
              color="#900"
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              // onChangeText=""
              //
              placeholder="Email"
            />
          </View>

          <View style={styles.textField}>
            <MaterialIcon
              style={styles.Icon}
              name="home-analytics"
              size={30}
              color="#900"
            />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Company"
            />
          </View>

          <View style={styles.textField}>
            <IonIcon
              style={styles.Icon}
              name="md-location-sharp"
              size={30}
              color="#900"
            />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Country"
            />
          </View>

          <View style={styles.textField2}>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="State"
            />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Zip"
            />
          </View>

          <View style={styles.textField2}>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Address"
            />
          </View>
          <View style={styles.textField2}>
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="City"
            />
          </View>

          <View style={styles.textField}>
            <EntypoIcon
              style={styles.Icon}
              name="bar-graph"
              size={30}
              color="#900"
            />
            <TextInput
              style={styles.input}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="Deal"
            />
          </View>
        </View>

        <View style={styles.bottomPart}>
          <View style={styles.customField}>
            <View style={styles.pickerBorder2}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="--- Pick as ---" value="java" />
                {/* <Picker.Item label="JavaScript" value="js" /> */}
              </Picker>
            </View>
            <TextInput
              style={styles.input2}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="qw"
            />
            <TextInput
              style={styles.input2}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="ccc2"
            />
            <TextInput
              style={styles.input2}
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              placeholder="house"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 40,
    alignItems: "center",
  },
  header: {
    height: 150,
    width: "100%",
    backgroundColor: "blue",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    flexDirection: "row",
    resizeMode: "cover",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    marginRight: 160,
  },
  CrossIcon: {
    color: "white",
    marginTop: 75,
    marginLeft: 30,
    marginRight: 30,
  },
  CheckIcon: {
    color: "#74b9ff",
    marginTop: 75,
  },
  main: {
    height: 700,
    width: 360,
  },
  picker1: {
    height: 50,
    width: 360,
  },
  picker2: {
    // height: 50,
    // width: 300,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  input2: {
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    height: 50,
    width: 320,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  textField: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 70,
    maxWidth: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  textField2: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 70,
    maxWidth: 310,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    padding: 10,
    color: "grey",
    marginTop: 10,
    height: 50,
    width: 50,
  },
  pickerBorder: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  pickerBorder2: {
    height: 50,
    width: 320,
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  customField: {
    marginTop: 20,
    height: 300,
    width: 360,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
  },
  bottomPart: {
    height: 600,
    width: 360,
  },
});

export default App;
