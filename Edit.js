import {datasource} from "./Data";
import {Button, TextInput, View, Text, Alert} from "react-native";
import {useState} from "react";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{flex: 1}} >
            <Text>Letter:</Text>
            <TextInput value={letter} style={{borderWidth: 1}} onChangeText={setLetter} maxLength={1} />

            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", gap: 20, padding: 10}}>
                <View style={{flex: 1}}>
                    <Button title="Save" onPress={() => {
                        let indexnum = 1;
                        if(route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data[route.params.index].key = letter;
                        navigation.navigate("Home");
                    }}/>

                </View>
                <View style={{flex: 1}}>
                    <Button title="Delete" onPress={() => {
                        let indexnum = 1;
                        if(route.params.type === "Vowels") {
                            indexnum = 0;
                        }
                        Alert.alert("Are you sure?", '',
                            [{text: 'Yes', onPress: () => {
                                    datasource[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                    }},
                                    {text: 'No'}])


                    }}/>

                </View>

            </View>
        </View>
    )
}

export default Edit;