import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeAreaViewComponent from '../../utills/SafeAreaViewComponent'
import CommonViewComponent from '../../utills/CommonViewComponent'
import BackButtonHeader from '../../utills/BackButtonHeader'
import { LISTS } from '../../utills/Lists'
import { COLORS } from '../../utills/Colors'
import TextComponent from '../../utills/TextComponent'
import ImageComponent from '../../utills/ImageComponent'
import { IMAGES } from '../../utills/Images'

const Reviews = () => {
    const reviewList = LISTS.reviewList;

    const renderReviewList = ({ item }) => {
        return (
            <View style={styles.listView}>
                <View style={styles.userImageView} />
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewDateView}>
                        <TextComponent text={item.date} style={styles.dateNumber} />
                        <TouchableOpacity>
                            <ImageComponent source={IMAGES.REVIEW_DOTS} />
                        </TouchableOpacity>
                    </View>
                    <TextComponent text={item.title} style={[styles.dateNumber, { color: COLORS.PROFILE_INFO_LIST_TITLE, fontWeight: '700', marginTop: 10 }]} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={styles.chefReviewStars} />
                        <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={styles.chefReviewStars} />
                        <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={styles.chefReviewStars} />
                        <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={styles.chefReviewStars} />
                        <ImageComponent source={IMAGES.CHEF_REVIEW_STAR} style={styles.chefReviewStars} />
                    </View>
                    <TextComponent text={item.subTitle} style={[styles.dateNumber, { width: 262.5, marginTop: 10 }]} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaViewComponent children={
            <CommonViewComponent children={
                <>
                    <BackButtonHeader title={'Reviews'} />
                    <View style={{ marginTop: 35 }}>
                        <FlatList
                            data={reviewList}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderReviewList}
                        />
                    </View>
                </>
            } />
        } />
    )
}

export default Reviews

const styles = StyleSheet.create({
    listView: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 25,
    },
    userImageView: {
        height: 43,
        width: 43,
        backgroundColor: COLORS.COMMON_GRAY,
        borderRadius: 200
    },
    reviewContainer: {
        borderRadius: 15,
        backgroundColor: COLORS.PROFILE_INFO_LIST_BG,
        marginLeft: 10,
        padding: 16
    },
    reviewDateView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateNumber: {
        fontWeight: '400',
        fontSize: 14,
        lineHieght: 14.44,
        color: COLORS.SUB_TITLE
    },
    chefReviewStars: {
        height: 20,
        width: 20,
        marginVertical: 10
    }
})