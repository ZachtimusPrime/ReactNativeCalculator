import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableHighlight, View, Text } from 'react-native';
import { add, subtract, multiply, divide, append, clear, calculate } from '../actions/index';
import styles from '../styles';
import _ from 'lodash';

class CalculatorButton extends React.Component {
    constructor() {
        super();
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        console.log("Button " + this.props.content + " clicked.")
        if (this.props.content == "=") { this.props.calculate(); }
        else if (this.props.content == "+") { this.props.add(); }
        else if (this.props.content == "-") { this.props.subtract(); }
        else if (this.props.content == "*") { this.props.multiply(); }
        else if (this.props.content == "/") { this.props.divide(); }
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
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    append: (number) => dispatch(append(number)),
    clear: () => dispatch(clear()),
    calculate: () => dispatch(calculate())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorButton);