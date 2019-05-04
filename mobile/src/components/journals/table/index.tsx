import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';
import { main as mainColor } from '../../../constants/Colors';

interface JournalTableItem extends PreviewItemJournalProps {
  id: number;
}

interface TableJournalsProps {
  data: Array<JournalTableItem>;
  handleLoadMore: () => void;
  loading: boolean;
}

const TableJournals = ({
  data,
  handleLoadMore,
  loading
}: TableJournalsProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id.toString()}
      ListFooterComponent={() => renderFooter(loading)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      numColumns={2}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const renderItem = ({
  item: { title, id, publisher }
}: {
  item: JournalTableItem;
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)} style={styles.item}>
      <PreviewItemJournal title={title} publisher={publisher} />
    </TouchableOpacity>
  );
};

const onPress = (id: number) => {
  console.log(id);
};

const renderFooter = (loading: boolean) => {
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={mainColor} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column'
  },
  item: {
    width: '50%'
  },
  loader: {
    padding: 20
  }
});

export default TableJournals;
