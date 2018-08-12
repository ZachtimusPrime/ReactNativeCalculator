import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Col, Row, Grid } from "react-native-easy-grid";
import CalculatorButton from './CalculatorButton';
import styles from '../styles';

function formatInt(number) {
    if (number % 1 === 0) {
        return number;
    } else {
        return number.toFixed(3);
    }
}

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
                    {(this.props.total > 0) ? formatInt(this.props.total) : ((this.props.previousValue) ? formatInt(this.props.previousValue) : 0) }
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

function mapStateToProps(state) {
    return {
      total: state.total,
      previousValue: state.previousValue
    };
}

export default connect(
    mapStateToProps,
    null
)(Calculator);