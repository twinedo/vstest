import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GREY3, PRIMARY, SECONDARY, WHITE} from 'styles/colors';
import globalStyles from 'styles/globalStyles';
import {Button} from 'components/atoms';
import {percentageWidth} from 'utils/screen_size';
import Logo from 'assets/images/logo.png';

interface ICardPrimary {
  imageSource: ImageSourcePropType;
  likes: number;
  onLikePress: () => void;
  onDislikePress: () => void;
}

export default function CardPrimary(props: ICardPrimary) {
  const {imageSource, likes, onLikePress, onDislikePress} = props;

  return (
    <View style={[styles.cardContainer]}>
      <Image source={imageSource} defaultSource={Logo} style={styles.img} />
      <View
        style={[
          globalStyles.row,
          globalStyles.alignCenter,
          globalStyles.justifySpaceBetween,
          globalStyles.horizontalDefaultPadding,
          globalStyles.verticalDefaultPadding,
        ]}>
        <View style={[globalStyles.displayFlex]}>
          <View
            style={[
              styles.likeContainer,
              globalStyles.horizontalDefaultPadding,
              globalStyles.justifyCenter,
              globalStyles.alignCenter,
            ]}>
            <Text style={[globalStyles.headingRegular.h3]}>{likes} Like</Text>
          </View>
        </View>
        <View
          style={[
            globalStyles.displayFlex,
            globalStyles.row,
            globalStyles.alignCenter,
            globalStyles.justifySpaceBetween,
          ]}>
          <View>
            <Button
              text="Like"
              textColor={WHITE}
              containerStyle={[
                styles.btn,
                globalStyles.horizontalDefaultPadding,
                {backgroundColor: PRIMARY},
              ]}
              onPress={onLikePress}
            />
          </View>
          <Button
            text="Dislike"
            textColor={WHITE}
            containerStyle={[
              styles.btn,
              globalStyles.horizontalDefaultPadding,
              {backgroundColor: SECONDARY},
            ]}
            onPress={onDislikePress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: GREY3,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 4,
  },
  img: {
    width: '100%',
    height: 198,
    resizeMode: 'cover',
  },
  likeContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GREY3,
    width: percentageWidth(25),
    height: 36,
  },
  btn: {
    borderRadius: 5,
    height: 36,
  },
});
