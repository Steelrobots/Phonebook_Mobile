import { useState } from "react";
import { FlatList, View } from "react-native";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { selectPhonebooks } from "../reducers/phonebook";
import { loadPhonebooks } from "../reducers/API";

export default function PhoneList({ keyword, sort, }:
    {
        keyword: string;
        sort: string;
    }) {
    const dispatch = useDispatch()
    const { phonebooks, page, pages } = useSelector(selectPhonebooks)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <View>
            <PhoneItem />
        </View>
    )
}