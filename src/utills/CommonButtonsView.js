import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, {  useState } from 'react'
import TextComponent from './TextComponent'
import { COLORS } from './Colors'

const CommonButtonsView = ({ listData, isColumn, numColumns, isCategory, onPressCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(isCategory ? 1 : 0);

    return (
        <>
            {isColumn ?
                <FlatList
                    data={listData}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                setSelectedCategory(item?.id)
                                onPressCategory(item?.id)
                            }} style={[styles.categoryButtons, {
                                backgroundColor: selectedCategory == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.MAIN_BG,
                                borderColor: selectedCategory == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.CATEGORY_BR,
                            }]}>
                                <TextComponent style={[styles.categoryText, { color: selectedCategory == item?.id ? COLORS.MAIN_BG : COLORS.TITLE }]} text={item?.name} />
                            </TouchableOpacity>
                        )
                    }}
                />
                :
                <FlatList
                    data={listData}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                setSelectedCategory(item?.id)
                                onPressCategory(item?.id)
                            }
                            } style={[styles.categoryButtons, {
                                backgroundColor: selectedCategory == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.MAIN_BG,
                                borderColor: selectedCategory == item?.id ? COLORS.RESTAURANT_CATEGORY_BG : COLORS.CATEGORY_BR,
                            }]}>
                                <TextComponent style={[styles.categoryText, { color: selectedCategory == item?.id ? COLORS.MAIN_BG : COLORS.TITLE }]} text={item?.name} />
                            </TouchableOpacity>

                        )
                    }}
                />
            }
        </>

    )
}

export default CommonButtonsView

const styles = StyleSheet.create({
    categoryButtons: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.CATEGORY_BR,
        marginBottom: 5,
        marginRight: 10
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 19.25
    },
})