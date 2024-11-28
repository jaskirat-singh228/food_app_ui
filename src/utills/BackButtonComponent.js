import { Platform, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from './Images';
import ImageComponent from './ImageComponent';

const BackButtonComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={{ position: 'absolute', top: Platform.OS=='android'?24:60, paddingHorizontal: 24,zIndex:100 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ImageComponent source={IMAGES.BACK}/>
            </TouchableOpacity>
        </View>
    )
}

export default BackButtonComponent;