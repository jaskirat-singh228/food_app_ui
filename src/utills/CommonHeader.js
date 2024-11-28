import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import ImageComponent from './ImageComponent'
import { COLORS } from './Colors'
import TextComponent from './TextComponent'
import { IMAGES } from './Images'

const CommonHeader = ({
    title,
    subTitle,
    email
}) => {
    return (
        <>
            <View style={styles.top} />
            <View style={styles.main}>
                <TextComponent text={title} style={styles.title} />
                <TextComponent text={subTitle} style={styles.subTitle} />
                <TextComponent text={email} style={styles.email} />
                <ImageComponent source={IMAGES.ELLIPSE} style={styles.ellipse} />
            </View>
            <View style={styles.bottom} />
        </>
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    top: {
        height: 62,
        backgroundColor: COLORS.LOGIN_TOP_BG,
        position: 'absolute',
        width: '100%'
    },
    main: {
        flex: Platform.OS=='android'?0.3:0.25,
        backgroundColor: COLORS.LOGIN_TOP_BG,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: COLORS.MAIN_BG,
        lineHeight: 40,
        fontWeight: '700',
        fontSize: 30
    },
    ellipse: {
        tintColor: COLORS.SUB_TITLE,
        opacity: 0.3,
        height: 140,
        width: 150,
        position: 'absolute',
        top: Platform.OS=='android'?-30:-60,
        alignSelf: 'flex-start'
    },
    bottom: {
        height: 34,
        backgroundColor: COLORS.MAIN_BG,
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 26,
        color: COLORS.MAIN_BG
    },
    email: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 23.62,
        color: COLORS.MAIN_BG
    }
})