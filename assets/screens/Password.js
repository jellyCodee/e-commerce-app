import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Google({ navigation }) {
    return (
        <View style={styles.main}>
            <View>
                <Text style={{fontFamily: 'MontserratMedium'}}>Sorry you forgot your password but this feature is not available yet.</Text>
                <Text style={{fontFamily: 'MontserratMedium', marginTop: 20}}>In the meantime press the button below to access your account just this one time</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.pressMe} onPress={() => navigation.navigate('Home')}>
                <Text style={{fontFamily: 'MontserratMedium', color: '#4580ff'}}>Press me</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    pressMe: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#4580ff',
        borderRadius: 10,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 