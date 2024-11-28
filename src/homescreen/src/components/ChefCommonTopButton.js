import { StyleSheet, Text, View } from 'react-native'
import TextComponent from '../../../utills/TextComponent'
import { COLORS } from '../../../utills/Colors'

const ChefCommonTopButton = ({ title, buttonTitle, onPress }) => {
    return (
        <View style={styles.container}>
            <TextComponent text={title} style={styles.title} />
            <TextComponent text={buttonTitle} style={[styles.title, { color: COLORS.ACTIVE_INDICATOR, textDecorationLine: 'underline', textDecorationColor: COLORS.ACTIVE_INDICATOR }]} onPress={onPress} />
        </View>
    )
}

export default ChefCommonTopButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.84,
        color: COLORS.PROFILE_INFO_LIST_TITLE,
    },
})