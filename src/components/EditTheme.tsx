import React from 'react';
import { Feather } from "@expo/vector-icons"
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

interface Props {
    theme: string
}

export default function EditTheme(props: Props) {

    const [theme, setTheme] = useState('')

    function handleEditTheme() {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <View style={styles.editTheme}  >
            <Feather
                onpress={handleEditTheme}
                name={props.theme == 'light' ? 'moon' : 'sun'}
                color={props.theme == 'light' ? '#666' : '#fff'}
                size={20}>
            </Feather>
        </View>
    )
}

const styles = StyleSheet.create({

    editTheme: {
        position: 'absolute',
        top: 36,
        right: 20
    },

})