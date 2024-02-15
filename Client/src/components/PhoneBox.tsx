import { useState } from "react";
import { SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";

export default function PhoneBox(){
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] =useState('asc')

    return (
        <SafeAreaView>
            <SearchBar 
            sort={sort}
            setSort={setSort}
            keyword={keyword}
            setKeyword={setKeyword}/>
            
        </SafeAreaView>
    )

}