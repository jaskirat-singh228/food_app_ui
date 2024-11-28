import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ImageComponent from '../../../utills/ImageComponent';

const SocialButton = ({
    onPress,
    style,
    source,
    imageStyle
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <ImageComponent source={source} style={imageStyle} />
        </TouchableOpacity>
    );
};

export default SocialButton;
