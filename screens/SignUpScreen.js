import React from 'react'
import { Text, View, StyleSheet, Platform, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textinput: true,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textinput: true,
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textinput: false,
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }
    const handleConfirm_PasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
        })
    }

    const updateSecureText = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const confirmupdateSecureText = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}> Register Here </Text>
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig"
                duration={1500}>
                <Text style={styles.text_footer}> Email </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color="#05375a" />
                    <TextInput
                        style={styles.InputText}
                        placeholder="email"
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textinput ?
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" size={25} color="green" />
                        </Animatable.View> : null
                    }
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" size={20} color="#05375a" />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)} />
                    <TouchableOpacity onPress={updateSecureText}>
                        <Feather name={data.secureTextEntry ? "eye-off" : "eye"} size={25} color={"grey"} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" size={20} color="#05375a" />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Confirm Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirm_PasswordChange(val)} />
                    <TouchableOpacity onPress={confirmupdateSecureText}>
                        <Feather name={data.confirm_secureTextEntry ? "eye-off" : "eye"} size={25} color={"grey"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.textSign, { color: '#009387' }]}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}
                        onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={[styles.textSign, { color: '#009387' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    InputText: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        margin: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});
