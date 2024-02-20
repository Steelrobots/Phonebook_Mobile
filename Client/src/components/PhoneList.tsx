import { useState } from "react";
import { FlatList, View } from "react-native";
import PhoneItem from "./PhoneItem";

export default function PhoneList({
    keyword,
    sort,
  }: {
    keyword: string;
    sort: string;
  }) {
const [isLoading,setIsLoading ] = useState(false)

return(
    <View>
        <PhoneItem/>
    </View>
)
}