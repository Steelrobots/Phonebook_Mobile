import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PhoneItem() {
    const [isEdit, setIsEdit] = useState(false);


    return (
        <View>
            <View>

            </View>
            <View>
                <Text>Andri Priyadi</Text>
                <Text>089695991757</Text>
                <View>
                    <TouchableOpacity><FontAwesomeIcon icon={faPenToSquare} /></TouchableOpacity>
                    <TouchableOpacity><FontAwesomeIcon icon={faTrashCan} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const  styles = StyleSheet.create({
    container:{
        
    }
})
