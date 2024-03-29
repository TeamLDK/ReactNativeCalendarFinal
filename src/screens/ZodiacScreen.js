import React from 'react';
import { StyleSheet, View, Text,
        Image, FlatList, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import ZodiacToday from './ZodiacToday'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import asset from '../asset';
import ZodiacComponent from '../components/ZodiacComponent';
import ConGiapComponent from '../components/ConGiapComponent';
import ConGiapToday from './ConGiapToday';

const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;


const ListZodiac = [
    {
        id: 1,
        name: 'Bạc Dương',
        image: asset.iconZodiac.bachduong,
        time: '21/3 - 19/04',
    },
    {
        id: 2,
        name: 'Kim Ngưu',
        image: asset.iconZodiac.kimnguu,
        time: '20/04 - 20/05',
    },
    {
        id: 3,
        name: 'Song Tử',
        image: asset.iconZodiac.songtu,
        time: '21/05 - 21/06',
    },
    {
        id: 4,
        name: 'Cự Giải',
        image: asset.iconZodiac.cugiai,
        time: '22/06 - 22/07',
    },
    {
        id: 5,
        name: 'Sư Tử',
        image: asset.iconZodiac.sutu,
        time: '23/07 - 22/08',
    },
    {
        id: 6,
        name: 'Xử Nữ',
        image: asset.iconZodiac.xunu,
        time: '23/08 - 22/09',
    },
    {
        id: 7,
        name: 'Thiên Bình',
        image: asset.iconZodiac.thienbinh,
        time: '23/09 - 23/10',
    },
    {
        id: 8,
        name: 'Bọ Cạp',
        image: asset.iconZodiac.bocap,
        time: '24/10 - 22/11',
    },
    {
        id: 9,
        name: 'Nham Ma',
        image: asset.iconZodiac.nhanma,
        time: '22/11 - 21/12',
    },
    {
        id: 10,
        name: 'Nhân Mã',
        image: asset.iconZodiac.maket,
        time: '22/12 - 19/01',
    },
    {
        id: 11,
        name: 'Ma Kết',
        image: asset.iconZodiac.baobinh,
        time: '20/01 - 18/02',
    },
    {
        id: 12,
        name: 'Bảo Bình',
        image: asset.iconZodiac.songngu,
        time: '19/02 - 20/03',
    },
];
const ListConGiap = [
    {
        id: 1,
        name: 'Tý',
        image: asset.iconZodiacChina.ti,
        time: 'Thông minh',
    },
    {
        id: 2,
        name: 'Sửu',
        image: asset.iconZodiacChina.suu,
        time: 'May mắn',
    },
    {
        id: 3,
        name: 'Dần',
        image: asset.iconZodiacChina.dan,
        time: 'Thử thách',
    },
    {
        id: 4,
        name: 'Mão',
        image: asset.iconZodiacChina.mao,
        time: 'Gan dạ',
    },
    {
        id: 5,
        name: 'Thìn',
        image: asset.iconZodiacChina.thin,
        time: 'Danh tiếng',
    },
    {
        id: 6,
        name: 'Tỵ',
        image: asset.iconZodiacChina.ty,
        time: 'Trách nhiệm',
    },
    {
        id: 7,
        name: 'Ngọ',
        image: asset.iconZodiacChina.ngo,
        time: 'Gia đình',
    },
    {
        id: 8,
        name: 'Mùi',
        image: asset.iconZodiacChina.mui,
        time: 'Xuất sắc',
    },
    {
        id: 9,
        name: 'Thân',
        image: asset.iconZodiacChina.than,
        time: 'Kiên định',
    },
    {
        id: 10,
        name: 'Dậu',
        image: asset.iconZodiacChina.dau,
        time: 'Gặp gỡ',
    },
    {
        id: 11,
        name: 'Tuất',
        image: asset.iconZodiacChina.tuat,
        time: 'Ấm áp',
    },
    {
        id: 12,
        name: 'Hợi',
        image: asset.iconZodiacChina.hoi,
        time: 'Như ý',
    },
];
class ButtonInNavigationArea extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.buttonInNavigationArea, this.props.backColor]}
                onPress={() => {
                    /**
                     * do some thing
                     */
                    if (this.props.execute != null)
                        this.props.execute();
                }}
            >
                <Text style={[styles.textOfButtonInNavigationArea, this.props.fontWeight]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}


class ZodiacScreen extends React.Component {
    constructor() {
        super();
        this.state = { 
            isDayClicked: true 
        };
    }

    SelectDob = () => {
        this.setState({ isSelectDob: true })
    }
    getBackgroundColorDayButton = () => {
        if (this.state.isDayClicked == true) {
            return { backgroundColor: '#9ea490' };
        }
        return null;
    }
    getFontWeightDayButton = () => {
        if (this.state.isDayClicked == true) {
            return { fontWeight: '700' };
        }
        return null;
    }
    getBackgroundColorMonthButton = () => {
        if (this.state.isDayClicked == false) {
            return { backgroundColor: '#9ea490' };
        }
        return null;
    }
    getFontWeightMonthButton = () => {
        if (this.state.isDayClicked == false) {
            return { fontWeight: '700' };
        }
        return null;
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.topButtonNavigation}
                        onPress={() => {
                            if (this.props.navigation != null)
                                this.props.navigation.openDrawer();
                        }}
                    >
                        <Image
                            style={[styles.imageTopButtonNavigation, this.props.tranform]}
                            source={require('../../assets/icon/menu.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.navigationArea}>
                        <ButtonInNavigationArea
                            text="Cung Hoàng Đạo"
                            backColor={this.getBackgroundColorDayButton()}
                            fontWeight={this.getFontWeightDayButton()}
                            execute={() => {
                                this.setState({ isDayClicked: true });
                                this.props.navigation.navigate('ZodiacScreen');
                            }}
                        />
                        <ButtonInNavigationArea
                            text="Con Giáp"
                            backColor={this.getBackgroundColorMonthButton()}
                            fontWeight={this.getFontWeightMonthButton()}
                            execute={() => {
                                this.setState({ isDayClicked: false });
                                this.props.navigation.navigate('ZodiacScreen');
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.topButtonNavigation}></TouchableOpacity>
                </View>
                <View style={styles.drawALine}/>

                {this.state.isDayClicked ? <View style={styles.drawContent}>
                    <Text style={styles.title}>
                        Cung Hoàng Đạo
                    </Text>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListZodiac}
                        renderItem={({ item }) => {
                            return <ZodiacComponent item={item} navigation={this.props.navigation} />;
                        }}
                        keyExtractor={item => item.id}
                        numColumns='3'
                        columnWrapperStyle={styles.rowItem}
                    >
                    </FlatList>
                </View>:<View style={styles.drawContent}>
                    <Text style={styles.title}>
                    Con Giáp
                    </Text>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListConGiap}
                        renderItem={({ item }) => {
                            return <ConGiapComponent item={item} navigation={this.props.navigation} />;
                        }}
                        keyExtractor={item => item.id}
                        numColumns='3'
                        columnWrapperStyle={styles.rowItem}
                    >
                    </FlatList>
                </View> }
                
            </View>

        );
    }
}
/**
 * screenOptions={{
                    headerShown: false
                }}
 */
class StackListZodiacScreen extends React.Component {

    render() {
        ZodiacToday,ConGiapToday
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        ...TransitionPresets.ModalSlideFromBottomIOS
                    }
                }
            >
                <Stack.Screen name="ZodiacScreen" component={ZodiacScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ZodiacToday" component={ZodiacToday} options={{ headerShown: false }} />
                <Stack.Screen name="ConGiapToday" component={ConGiapToday} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    headerNavigation: {
        color: 'red',
        fontFamily: "BaseFutara",
    },

    container: {
        flex: 1,
        backgroundColor: '#ffecef',
    },
    drawALine:{
        width:'100%',
        height:2,
        backgroundColor:'silver',
    },
    drawContent: {
        height: '92%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        height: '6.2%',
        fontFamily: "BaseFutara",
    },
    containerScrollZodiac: {
        width: '100%',
        height: '93.8%',

    },
    rowItem: {
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        width: '94%',
        height: '6%',
        marginLeft: '3%',
        marginTop: '2%',
        marginBottom: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topButtonNavigation: {
        width: '10%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'silver',
    },
    imageTopButtonNavigation: {
        alignItems: 'center',
    },
    navigationArea: {
        backgroundColor: '#b3bcb4',
        width: '60%',
        height: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,

    },
    buttonInNavigationArea: {
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOfButtonInNavigationArea: {
        color: 'white',
        fontSize: 12,
        fontFamily: "BaseFutara",
    },

});

export default StackListZodiacScreen;
