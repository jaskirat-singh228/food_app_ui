import { Platform, StyleSheet, View } from 'react-native'
import { COLORS } from './Colors'

const CommonViewComponent = ({ children,style }) => {
    return (
        <View style={[styles.view,style]}>
            {children}
        </View>
    )
}

export default CommonViewComponent

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLORS.MAIN_BG,
        marginHorizontal: 24,
        marginVertical:Platform.OS=='android'?24:0
    }
})