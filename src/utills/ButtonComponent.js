import { TouchableOpacity, Text } from 'react-native';

const ButtonComponent = ({
    onPress,
    style,
    title,
    textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
