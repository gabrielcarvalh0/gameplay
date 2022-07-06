import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({

    container: {

        width: '100%',
        flexDirection: 'column',
    },

    bodyProfile: {
        width: '100%',
        paddingRight: 74,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: theme.colors.secondary80


    },
    bodyOptions: {
        width: '100%',
        paddingTop: 10,
        paddingVertical: 20,

    },
    options: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 0,
        margin: 10,

        borderRadius: 8,
    },
    optionText: {
        marginLeft: 35,
        fontSize: 16,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,

    },
    modalLogout: {
        width: '100%',
        padding: 20,
        paddingVertical: 20,
    },
    footerModalLogout: {
        width: '50%',
        padding: 0,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30

    },
    divText: {
        marginTop: 30,
        padding: 10
    },
    divBtn: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 20

    },
    textLogOut: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
        textAlignVertical: 'center',
    },

    user: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    btnUser: {
        width: 45,
        height: 45,
        padding: 10,
        backgroundColor: theme.colors.secondary80,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 16,
        color: theme.colors.heading,
        textAlignVertical: 'center',
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }


})

