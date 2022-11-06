import React from "react";
import { Box, IBoxProps, Text, themeTools, useTheme } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  AnimateStyle,
  interpolateColor,
  runOnJS,
} from "react-native-reanimated";
import { ViewStyle } from "react-native";
import zxcvbn from "zxcvbn";

type Props = {
  style?: AnimateStyle<ViewStyle>;
  passwordInput: string;
  emptyColor: string;
  fullColor: string;
};

const AnimatedBox = Animated.createAnimatedComponent(Box);

const PasswordStrengthScore = (pw: string) => {
  const analysis = zxcvbn(pw);
  return analysis.score;
};

const AnimatedMeterBar: React.FC<Props> = (props) => {
  const theme = useTheme();
  const emptyHex = themeTools.getColor(theme, props.emptyColor);
  const fullHex = themeTools.getColor(theme, props.fullColor);
  const score = PasswordStrengthScore(props.passwordInput);

  const BoxStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(Math.max(5, props.passwordInput.length * 8), {
        damping: 10,
        stiffness: 100,
      }),
      backgroundColor: interpolateColor(score, [0, 4], [emptyHex, fullHex]),
    };
  });
  return <AnimatedBox style={[props.style, BoxStyles]} />;
};

export default AnimatedMeterBar;
