import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import ImagePicker from "react-native-image-picker";
import { Card, Button } from "react-native-elements";
import { themeColor, WINDOW_WIDTH } from "../public";
import { createFoodItem } from '../net/fetch'
import { connect } from 'react-redux'
import { addOrder } from '../actions/homeAction'

class Initiate extends Component {
  static navigationOptions = {
    title: "发起拼团",
    headerStyle: { backgroundColor: themeColor },
    headerTintColor: "#rgba(47, 52, 54, 1.00)"
  };

  state = {
    chooseImg: [],
    storeName: null,
    foodName: null,
    price: null
  };

  initate = () => {
    var foodItem = {
      storeName: this.state.storeName,
      foodName: this.state.foodName,
      price: this.state.price,
      picUrl: this.state.chooseImg,
    }
    foodItem = {foodItem: createFoodItem(foodItem)}
    this.props.dispatch(addOrder(foodItem))
    this.props.navigation.navigate('merge', {item: [foodItem]})
  };

  chooseImg = () => {
    var options = {
      title: "选择菜品图片",
      takePhotoButtonTitle: "拍照",
      chooseFromLibraryButtonTitle: "从相册中获取",
      cancelButtonTitle: "取消",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        var arr = this.state.chooseImg;
        arr.push(source);
        this.setState({
          chooseImg: arr
        });
      }
    });
  };

  render() {
    const buttonDisable = !(
      this.state.storeName &&
      this.state.storeName !== "" &&
      this.state.foodName &&
      this.state.foodName !== "" &&
      this.state.price &&
      this.state.price !== ""
    );

    return (
      <View style={{ alignItems: "center" }}>
        <Card
          containerStyle={{
            borderRadius: 10,
            marginBottom: 20,
            width: WINDOW_WIDTH * 0.9
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 20,
              justifyContent: "center"
            }}
          >
            {this.state.chooseImg.map((item, index) => {
              return (
                <View style={{ width: 100, height: 100, padding: 10 }} key={`imageChoose_${index}`}>
                  <Image
                    key={`choose_image${index}`}
                    source={item}
                    style={{ flex: 1, width: null, height: null }}
                    resizeMode="cover"
                  />
                </View>
              );
            })}
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={this.chooseImg}
            >
              <Image
                source={require("../images/addImg.png")}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
          </View>
          <DetailInput
            title="填写店名"
            onChangeText={value => this.setState({ storeName: value })}
          />
          <DetailInput
            title="添加菜品"
            onChangeText={value => this.setState({ foodName: value })}
          />
          <DetailInput
            title="定制价格"
            priceInput
            onChangeText={value => this.setState({ price: value })}
          />
          <DetailInput
            title="配送时间"
            style={{ marginBottom: 10 }}
            timeInput
          />
        </Card>
        <Button
          buttonStyle={{ width: WINDOW_WIDTH * 0.7 }}
          title="发起拼餐"
          backgroundColor={themeColor}
          textStyle={{ color: "black", fontSize: 15 }}
          onPress={this.initate}
          disabled={buttonDisable}
          disabledStyle={{ backgroundColor: "lightgray" }}
          disabledTextStyle={{ color: "white" }}
        />
      </View>
    );
  }
}

class DetailInput extends Component {
  state = { value: 0 };

  render() {
    const isPriceInput = this.props.priceInput || false;
    const isTimeInput = this.props.timeInput || false;
    return (
      <View style={this.props.style}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../images/triangle.png")}
            style={{ width: 20, height: 10 }}
          />
          <Text style={{ fontSize: 12, color: "#rgba(154, 155, 156, 1)" }}>
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            backgroundColor: "#rgba(220, 221, 221, 1)",
            height: 1
          }}
        />
        <View
          style={{
            alignItems: "center",
            marginVertical: 15
          }}
        >
          <TextInput
            keyboardType={isPriceInput ? "number-pad" : "default"}
            style={{
              textAlign: "center",
              color: isPriceInput ? "red" : "black",
              width: 200,
              height: 30,
              borderColor: themeColor,
              borderWidth: 1
            }}
            placeholder={isTimeInput ? "默认配送" : null}
            editable={isTimeInput ? false : true}
            onChangeText={value => {
              price = parseInt(value);
              if (isNaN(price)) {
                price = 0;
              }
              this.setState({ value: price });
              if (value === "") {
                value = null;
              }
              this.props.onChangeText && this.props.onChangeText(value);
            }}
            value={isPriceInput ? "￥" + this.state.value : null}
          />
        </View>
      </View>
    );
  }
}

let mapStateToProps = state => {
  const { home } = state
  return { home }
}

export default connect(mapStateToProps)(Initiate)
