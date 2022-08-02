import React from "react";
import { View, Image, Text, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import dynamicStyles from "./styles";

const WalkthroughScreen = (props) => {
  const appConfig = props.appConfig;
  const appStyles = props.appStyles;
  const colorScheme = "";
  const styles = dynamicStyles(appStyles, colorScheme);

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: `${index}`,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
        content: screenSpec.screens
      };
    }
  );

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
      <StatusBar color={ "#f4f4f4" } backgroundColor={ "#383838" } />
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {item.content}
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      //Handler for the done On last slide
      showSkipButton={false}
      showDoneButton={false}
      showNextButton={false}
    />
  );
};

export default WalkthroughScreen;
