import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './Colors';

const SafeAreaViewComponent = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.safeArea, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.MAIN_BG,
    },
});

export default SafeAreaViewComponent;
