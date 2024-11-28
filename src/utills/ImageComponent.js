import { Image } from 'react-native'

const ImageComponent = ({
    source,
    style,
    resizeMode }) => {
    return (
        <Image source={source} style={style} resizeMode={resizeMode} />
    )
}

export default ImageComponent;