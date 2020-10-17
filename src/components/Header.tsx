import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string,
    showCancel?: boolean,
    theme: string
}

export default function Header({ title, showCancel = true, theme }: HeaderProps) {

    const navigation = useNavigation()

    function handleBackToHome() {
        navigation.navigate('OrphanagesMap')
    }

    return (
        <View style={theme == 'light' ? styles.container :styles.containerDark}>
            <BorderlessButton>
                <Feather name="arrow-left" size={24} color="#15b6e6" onPress={navigation.goBack}></Feather>
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {showCancel ? (
                <BorderlessButton>
                    <Feather name="x" size={24} color="#ff669d" onPress={handleBackToHome}></Feather>
                </BorderlessButton>
            ) : <View />}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f8',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerDark: {
        padding: 24,
        backgroundColor: '#1a1a2e',
        borderBottomWidth: 0,
        elevation: 20,
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Nunito_700Bold',
        color: '#8fa7b3',
        fontSize: 16
    }
})