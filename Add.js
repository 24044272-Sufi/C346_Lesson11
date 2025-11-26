import {datasource} from "./Data.js";
import {Button, TextInput, View, Text} from "react-native";
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";

const Add = ({navigation}) => {
    const [letter, setLetter] = useState("");
    const [letterType, setLetterType] = useState("Vowels");
    return (
        <View>
            <Text>Letter:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={setLetter} maxLength={1} />
            <Picker onValueChange={setLetterType} >
                <Picker.Item label="Vowels" value="Vowels"/>
                <Picker.Item label="Consonants" value="Consonants"/>
            </Picker>
            <Button title="Submit" onPress={() => {
                let item = {key: letter};
                let indexnum = 1;
                if(letterType === "Vowels"){
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }} />
        </View>
    )
}

export default Add;

