import { faArrowDownAZ, faArrowUpAZ, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";



export default function SearchBar(
    { sort, setSort, keyword, setKeyword }:
        {
            sort: string, setSort: React.Dispatch<React.SetStateAction<string>>,
            keyword: string, setKeyword: React.Dispatch<React.SetStateAction<string>>
        }) {
    const nav:any = useNavigation();

    return (
        <KeyboardAvoidingView style={styles.container}  >
            {sort === 'asc' ? (<TouchableOpacity onPress={() => { setSort('desc'); }}><FontAwesomeIcon icon={faArrowUpAZ} /></TouchableOpacity>) :
                (<TouchableOpacity onPress={() => { setSort('asc'); }} ><FontAwesomeIcon icon={faArrowDownAZ} /></TouchableOpacity>)}
            <View>
                <TextInput value={keyword} onChangeText={text => setKeyword(text)} placeholder="Search" />
            </View>
            <TouchableOpacity  onPress={() => nav.navigate('Add')}><FontAwesomeIcon icon={faUserPlus} /></TouchableOpacity>

        </KeyboardAvoidingView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 5,
    },
    btn: {

    }

})