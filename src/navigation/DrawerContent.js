import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper'
import usePreference from "../hooks/usePreferences"

export default function DrawerContent(props) {
    const {navigation} = props;
    const [active, setActive]= useState("home");
    const {theme, toggletheme} = usePreference();
    console.log(theme);

    const onChangeScreen = (screen) => {
        setActive(screen)
        navigation.navigate(screen);
    }
    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item label="Inicio" active={active==="home"} onPress={()=>onChangeScreen("home")}/>
                <Drawer.Item label="Peliculas Populares" active={active==="popular"} onPress={()=>onChangeScreen("popular")}/>
                <Drawer.Item label="Nuevos lanzamientos" active={active==="news"} onPress={()=>onChangeScreen("news")}/>
            </Drawer.Section>
            <Drawer.Section title="Opciones">
                <TouchableRipple>
                    <View style={styles.preferences}>
                        <Text>Dark Theme</Text>
                        <Switch value={theme==="dark"} onValueChange={toggletheme}/>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    preferences:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical: 12,
        paddingHorizontal:16,
    }
});