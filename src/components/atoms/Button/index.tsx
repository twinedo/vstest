import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {BLACK, WHITE} from 'styles/colors';

type IButtonProps = {
  text?: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
  containerStyle?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  textColor?: string;
  textStyle?: TextStyle | TextStyle[];
} & ViewStyle;

const Button = (props: IButtonProps & PressableProps) => {
  const {text, textStyle, prefix, postfix, containerStyle, onPress, textColor} =
    props;
  return (
    <Pressable
      {...props}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {prefix}
      <Text style={[styles.text, textStyle, {color: textColor}]}>{text}</Text>
      {postfix}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: BLACK,
    fontSize: 18,
  },
});
