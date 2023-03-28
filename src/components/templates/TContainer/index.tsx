import {View} from 'react-native';
import React, {ReactNode} from 'react';
import {BaseContainer} from 'components/molecules';
import globalStyles from 'styles/globalStyles';
import {GREY2} from 'styles/colors';

interface ITContaienr {
  header: ReactNode;
  children: ReactNode;
}

export default function TContainer(props: ITContaienr) {
  const {header, children} = props;

  return (
    <BaseContainer>
      <View
        style={[
          globalStyles.displayFlex,
          globalStyles.horizontalDefaultPadding,
          globalStyles.verticalDefaultPadding,
          {backgroundColor: GREY2},
        ]}>
        <View>{header}</View>
        <View style={[globalStyles.displayFlex]}>{children}</View>
      </View>
    </BaseContainer>
  );
}
