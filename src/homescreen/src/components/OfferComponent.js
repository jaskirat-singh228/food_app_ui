import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ImageComponent from '../../../utills/ImageComponent';
import { IMAGES } from '../../../utills/Images';
import TextComponent from '../../../utills/TextComponent';
import { COLORS } from '../../../utills/Colors';
import CommonButton from '../../../utills/CommonButton';

const { height, width } = Dimensions.get('window')

const OfferComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)} style={{
                position: 'absolute', top: 180, alignSelf: 'center', backgroundColor: "red",zIndex:1000}}>
                <TextComponent text={'OFFERS'} style={{ color: COLORS.MAIN_BG, fontSize: 20, fontWeight: '800', padding: 5 }} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => setVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity>
                            <ImageComponent source={IMAGES.OFFER_BG} style={{ width: 345, height: 416 }} />
                            <View style={styles.offer}>
                                <ImageComponent source={IMAGES.OFFER_BG_ICONS} style={styles.offerBgIcons} />
                                <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancel}>
                                    <ImageComponent source={IMAGES.OFFER_CANCEL} />
                                </TouchableOpacity>
                                <TextComponent text={'Hurry Offers!'} style={styles.hurryOffersText} />
                                <TextComponent text={'#1243CD2'} style={styles.cuponText} />
                                <TextComponent text={'Use the cupon get 25% discount'} style={[styles.cuponText, { fontSize: 18, marginTop: 10 }]} />
                                <CommonButton title={'GOT IT'} onPress={() => setVisible(false)} style={styles.button} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: height,
        width: width,
        top: 205,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    offer: {
        position: 'absolute',
        height: 425,
        width: '88%',
        alignSelf: 'center',
        borderRadius: 35,
        padding: 24,
        alignItems: 'center',
    },
    hurryOffersText: {
        fontWeight: '800',
        fontSize: 41,
        lineHeight: 56,
        color: COLORS.MAIN_BG,
        marginTop: 55
    },
    cuponText: {
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 56,
        color: COLORS.MAIN_BG,
        marginTop: 40
    },
    button: {
        backgroundColor: null,
        borderWidth: 2,
        borderColor: COLORS.MAIN_BG,
        marginTop: 25
    },
    cancel: {
        position: 'absolute',
        top: -15,
        right: 0
    },
    offerBgIcons: {
        position: 'absolute',
        top: 35,
        zIndex: 0,
        alignSelf: 'center',
    }

});

export default OfferComponent;
