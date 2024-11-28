import { Text } from 'react-native';

const TextComponent = ({ text, style, onPress,numberOfLines }) => {
    return <Text onPress={onPress} style={style} numberOfLines={numberOfLines}>{text}</Text>;
};

export default TextComponent;