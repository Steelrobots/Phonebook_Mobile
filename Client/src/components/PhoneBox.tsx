import { useState } from "react";
import { SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";
import PhoneList from "./PhoneList";

export default function PhoneBox() {
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] = useState('asc')

    return (
        <SafeAreaView>
            <SearchBar
                sort={sort}
                setSort={setSort}
                keyword={keyword}
                setKeyword={setKeyword} />
            <PhoneList keyword={keyword} sort={sort} />

        </SafeAreaView>
    )

}