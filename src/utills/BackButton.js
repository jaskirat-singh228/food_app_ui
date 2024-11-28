import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IMAGES } from './Images';
import ImageComponent from './ImageComponent';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ImageComponent source={IMAGES.BACK_BUTTON} />
            </TouchableOpacity>
        </View>
    )
}

export default BackButton;