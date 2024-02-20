import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneAdd() {
    const [add, setAdd] = useState({ name: '', phone: '' })
    const nav:any = useNavigation()

    return (
        <KeyboardAvoidingView>
            <View>
                <TextInput placeholder="insert your name" onChangeText={text => { setAdd({ ...add, name: text }) }} />
                <TextInput  placeholder="insert your phone" onChangeText={text => { setAdd({ ...add, phone: text }) }}/>
            </View>
            <View>
                <TouchableOpacity>Save</TouchableOpacity>
                <TouchableOpacity  onPress={()=> nav.navigate('Home')}>Cancel
          </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}