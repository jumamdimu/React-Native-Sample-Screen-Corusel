import { Text } from 'react-native'
const WalkthroughAppConfig = {
    onboardingConfig: {
      walkthroughScreens: [
        {
          icon: require("../assets/react-native.png"),
          title: "React Native Walkthrough",
          description: "Welcome your users with a beautiful app walkthrough.",
          //screens: (<Text>Here</Text>)
        },
        {
          icon: require("../assets/educate.png"),
          title: "Educate",
          description: "Showcase features to new users so that they get to love your app.",
          //screens: (<Text>Here1</Text>)
        },
        {
          icon: require("../assets/bell.png"),
          title: "Get Notified",
          description: "Describe the value proposition of each core feature.",
          //screens: (<Text>Here2</Text>)
        },
      ],
    },
  };
  
  export default WalkthroughAppConfig;
  