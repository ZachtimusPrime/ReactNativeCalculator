import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../components/scaling';


const styles = StyleSheet.create({
    calcWindow: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    calcText: {
        color: 'green',
        fontSize: moderateScale(52),
    },
    calcButtonText: {
        color: 'black',
        fontSize: moderateScale(34),
    },
    calcRow: {
        flex: 1,
    //   borderWidth: 0.25,
    //   borderColor: '#000',
    },
    calcButton: {
        flex: 1,
        backgroundColor: '#AAA',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.50,
        borderColor: '#000',
    }
});

export default styles;