import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from 'components/atoms';

import {GREY1, PRIMARY, SECONDARY, WHITE} from 'styles/colors';
import globalStyles from 'styles/globalStyles';

interface IHeader {
  onLikePress: () => void;
  onResetPress: () => void;
  onDislikePress: () => void;
}

export default function Header(props: IHeader) {
  const {onLikePress, onResetPress, onDislikePress} = props;
  return (
    <View
      style={[
        globalStyles.row,
        globalStyles.alignCenter,
        globalStyles.justifySpaceBetween,
        styles.header,
      ]}>
      <Button
        text="Like All"
        textColor={WHITE}
        textStyle={[globalStyles.headingRegular.h3]}
        containerStyle={[
          globalStyles.horizontalDefaultPadding,
          styles.btnPrimary,
          {backgroundColor: PRIMARY},
        ]}
        onPress={onLikePress}
      />
      <Button
        text="Reset All"
        textColor={GREY1}
        textStyle={[globalStyles.headingRegular.h3]}
        containerStyle={[
          globalStyles.horizontalDefaultPadding,
          styles.btnPrimary,
          {backgroundColor: WHITE},
        ]}
        onPress={onResetPress}
      />
      <Button
        text="Dislike All"
        textColor={WHITE}
        textStyle={[globalStyles.headingRegular.h3]}
        containerStyle={[
          globalStyles.horizontalDefaultPadding,
          styles.btnPrimary,
          {backgroundColor: SECONDARY},
        ]}
        onPress={onDislikePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnPrimary: {
    elevation: 3,
    borderRadius: 10,
    height: 36,
  },
  header: {margin: 4},
});
