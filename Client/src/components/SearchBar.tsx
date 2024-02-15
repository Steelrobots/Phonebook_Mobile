import { faArrowUpAZ, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TextInput, TouchableOpacity } from "react-native";

export default function SearchBar(
    { sort, setSort, keyword, setKeyword }:
        {
            sort: string, setSort: React.Dispatch<React.SetStateAction<string>>,
            keyword: string,setKeyword: React.Dispatch<React.SetStateAction<string>>
        }) {
    return (
        <view>
            <TouchableOpacity><FontAwesomeIcon icon={faArrowUpAZ} /></TouchableOpacity>
            <TextInput />
            <TouchableOpacity><FontAwesomeIcon icon={faUserPlus} /></TouchableOpacity>

        </view>
    )
}