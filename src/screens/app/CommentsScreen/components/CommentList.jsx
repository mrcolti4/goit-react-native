import { FlatList, View } from "react-native";
import Comment from "./Comment";

const CommentList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Comment data={item} key={item.id} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ marginVertical: 15 }}></View>
      )}
    />
  );
};

export default CommentList;
