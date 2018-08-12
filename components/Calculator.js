import React from 'react';
import { StyleSheet, TouchableHighlight, View, Image, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { scale, moderateScale, verticalScale} from './scaling';
import CalculatorButton from './CalculatorButton';

class CalculatorColumn extends React.Component {
    render() {
        return (
            <Col>
                <CalculatorButton content={this.props.button1} />
                <CalculatorButton content={this.props.button2} />
                <CalculatorButton content={this.props.button3} />
                <CalculatorButton content={this.props.button4} />
            </Col>
        )
    }
}

class Calculator extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <Grid>
          <Row size={20}>
            {/* <Image
              style={{flex:1, height: undefined, width: undefined}}
              source={{uri: 'https://i.ytimg.com/vi/YwCEgBIrsYc/maxresdefault.jpg'}}
              resizeMode="cover"
            /> */}
            <View style={styles.calcWindow}>
                <Text style={styles.calcText}>
                    {this.props.total}
                </Text>
            </View>
          </Row>
          <Row size={80}>
            <CalculatorColumn 
                button1={"7"}
                button2={"4"}
                button3={"1"}
                button4={"-"}
            />
            <CalculatorColumn 
                button1={"8"}
                button2={"5"}
                button3={"2"}
                button4={"0"}
            />
            <CalculatorColumn 
                button1={"9"}
                button2={"6"}
                button3={"3"}
                button4={"+"}
            />
            <CalculatorColumn 
                button1={"C"}
                button2={"*"}
                button3={"/"}
                button4={"="}
            />
          </Row>
        </Grid>
    );
  }
}

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


function mapStateToProps(state) {
    return {
      total: state.total
    };
}

export default connect(
    mapStateToProps,
    null
)(Calculator);