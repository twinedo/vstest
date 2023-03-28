import {FlatList, ListRenderItem, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import {DATA} from 'utils/constants';
import {DataTypes} from 'types/interfaces';

import {Spacer} from 'components/atoms';
import {Header} from 'components/molecules';
import {TContainer} from 'components/templates';
import {CardPrimary} from 'components/organisms';

import globalStyles from 'styles/globalStyles';
import {GREY2} from 'styles/colors';

export default function Home() {
  const [data, setData] = useState<DataTypes[]>(DATA);

  const _onCardBtnPress = (idx: number, type: 'like' | 'dislike') => {
    const dat = [...data];

    type === 'like'
      ? (dat[idx].likes = dat[idx].likes + 1)
      : (dat[idx].likes = dat[idx].likes - 1);
    setData(dat);
  };

  const _onHeaderBtnPress = (type: 'likeAll' | 'resetAll' | 'dislikeAll') => {
    const dat = [...data];
    const newData = dat.map(item => {
      return {
        ...item,
        likes:
          type === 'likeAll'
            ? item.likes + 1
            : type === 'dislikeAll'
            ? item.likes - 1
            : 0,
      };
    });
    setData(newData);
  };

  const renderItem: ListRenderItem<DataTypes> = ({item, index}) => {
    return (
      <CardPrimary
        imageSource={item.imageSource}
        likes={item.likes}
        onLikePress={() => _onCardBtnPress(index, 'like')}
        onDislikePress={() =>
          item.likes > 0 ? _onCardBtnPress(index, 'dislike') : undefined
        }
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor={GREY2} barStyle="dark-content" />
      <TContainer
        header={
          <Header
            onLikePress={() => _onHeaderBtnPress('likeAll')}
            onResetPress={() => _onHeaderBtnPress('resetAll')}
            onDislikePress={() => _onHeaderBtnPress('dislikeAll')}
          />
        }>
        <Spacer height={20} />
        <View style={globalStyles.displayFlex}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer height={15} />}
          />
        </View>
      </TContainer>
    </>
  );
}
