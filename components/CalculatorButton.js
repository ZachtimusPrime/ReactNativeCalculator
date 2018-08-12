import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, View, Image, Button, Text } from 'react-native';
import { scale, moderateScale, verticalScale} from './scaling';
import { add, sub, append, clear } from '../actions/index';
import styles from '../styles';
import _ from 'lodash';

class CalculatorButton extends React.Component {
    constructor() {
        super();
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        console.log("Button " + this.props.content + " clicked.")
        console.log(this.props.total)
        if (this.props.content == "+") { this.props.add(); }
        else if (this.props.content == "-") { this.props.sub(); }
        else if (this.props.content == "C") { this.props.clear(); }
        else if (_.inRange(Number.parseInt(this.props.content,10),0,10)) {
            this.props.append(this.props.content);
        }

        console.log(this.props.total)
    }

    render() {
        return (
            <Row size={25} style={styles.calcRow}>
                <TouchableHighlight style={{flex:1}} onPress={this.handlePress}>
                    <View style={styles.calcButton}>
                        <Text style={styles.calcButtonText}>
                            {this.props.content}
                        </Text>
                    </View>
                </TouchableHighlight>
            </Row>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    total: state.total
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    add: (number) => dispatch(add(1)),
    sub: (number) => dispatch(sub(1)),
    append: (number) => dispatch(append(number)),
    clear: () => dispatch(clear())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorButton);