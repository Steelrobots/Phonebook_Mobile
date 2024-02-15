import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function PhoneItem() {
    const [isEdit, setIsEdit] = useState(false);


    return (
        <view>
            <view>

            </view>
            <view>
                <text>Andri Priyadi</text>
                <text>089695991757</text>
                <view>
                    <TouchableOpacity><FontAwesomeIcon icon={faPenToSquare} /></TouchableOpacity>
                    <TouchableOpacity><FontAwesomeIcon icon={faTrashCan} /></TouchableOpacity>
                </view>
            </view>
        </view>
    )
};
