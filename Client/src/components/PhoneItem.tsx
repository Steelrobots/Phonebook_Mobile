import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneItem() {
    const [isEdit, setIsEdit] = useState(false);
    const [newData, setNewData] = useState({ name: '', phone: '' })
    const source: ImageSourcePropType = {
        uri: 'http://localhost:3001/images/user-tie-solid.svg'
    };



    if (isEdit) {
        return (<View>
            <View>
                <TouchableOpacity>
                    <Image
                        source={source}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput onChangeText={text => setNewData({ ...newData, name: text })} />
                <TextInput onChangeText={text => setNewData({ ...newData, phone: text })} />
                <View>
                    <TouchableOpacity><FontAwesomeIcon icon={faFloppyDisk} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsEdit(false)}><FontAwesomeIcon icon={faArrowRotateLeft} /></TouchableOpacity>
                </View>
            </View>
        </View>
        )
    } else {
        return (
            <View>
                <View>

                </View>
                <View>
                    <Text>Andri Priyadi</Text>
                    <Text>089695991757</Text>
                    <View>
                        <TouchableOpacity onPress={() => setIsEdit(true)}><FontAwesomeIcon icon={faPenToSquare} /></TouchableOpacity>
                        <TouchableOpacity><FontAwesomeIcon icon={faTrashCan} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {

    }
})
