import { useState } from "react";
import { KeyboardAvoidingView, TextInput, View } from "react-native";

export default function PhoneAdd() {
    const [add, setAdd] = useState({ name: '', phone: '' })


    return (
        <KeyboardAvoidingView>
            <View>
                <TextInput placeholder="insert your name" onChangeText={text => { setAdd({ ...add, name: text }) }} />
                <TextInput  placeholder="insert your phone" onChangeText={text => { setAdd({ ...add, phone: text }) }}/>
            </View>
            <View>

            </View>
        </KeyboardAvoidingView>
    )
}