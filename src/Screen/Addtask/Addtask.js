import { View, Text, Image, TouchableOpacity, TextInput, addons } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '../../constants/imagePath'
import { styles } from './styles'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import Modal from "react-native-modal";
import Navigationstrings from '../../Navigation/Navigationstrings'
import store from '../../redux/store'
import { addtodo } from '../../redux/action'

export default function Addtask({ navigation, route }) {
     
    const [openmodal, setmodal] = useState(false)
    const [title, settitle] = useState(null)
    const [notes, setnotes] = useState(null)

    let onmodalclick=() =>
    {       setmodal(!openmodal)
            store.dispatch(addtodo(title,notes))
  
    }

    let onAddbtn = () => {
        if (title === null) {
            alert("please enter title...")
            return;
        }
        if (notes === null) {
            alert("please enter description...")
            return;
        }
        if (title !== null && notes !== null) {
            setmodal(!openmodal)
        }
    }
    let onBack = () => {
        navigation.navigate(Navigationstrings.HOME)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.backImage} onPress={onBack}><Image source={imagePath.i_back}>
                </Image></TouchableOpacity>
                <Text style={styles.headerText}>New Reminder</Text>
            </View>

            <View style={styles.taskView}>
                <TextInput
                    value={title}
                    placeholder="Title"
                    style={styles.titleInput}
                    onChangeText={(val) => { settitle(val) }}
                />
                <View style={styles.line}></View>
                <TextInput
                    value={notes}
                    placeholder="Notes"
                    multiline={true}
                    style={styles.NotesInput}
                    onChangeText={(val) => { setnotes(val) }}
                />
            </View>

            <TextInput placeholder="Details" style={styles.detailsInput} />
            <View style={styles.dateTimeView}>

                <TouchableOpacity style={styles.datetimebtn}>
                    <Image source={imagePath.i_calender} style={styles.btnimg}></Image>
                    <Text>Due Date</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.datetimebtn}>
                    <Image source={imagePath.i_time} style={styles.btnimg}></Image>
                    <Text>Time</Text>
                </TouchableOpacity>
            </View>
            <ButtonComp title="Add" onPress={onAddbtn}></ButtonComp>
            <Modal isVisible={openmodal} style={styles.modalmain} >
                <TouchableOpacity onPress={() => {
                  onmodalclick()
                }}
                    style={styles.modalview}>
                    <Image source={imagePath.i_tick2}></Image>
                    <Text style={styles.modaltext}>Your Reminder has been added.</Text>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
}