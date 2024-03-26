import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Circle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle2}>
        <View style={styles.circle1}>
          <TouchableOpacity>
            <Text style={styles.addphoto}>{'Add\nPhoto'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphoto: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    flexDirection: 'row',
    textAlign: 'center',
  },
  circle1: {
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  circle2: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
    borderWidth: 2.5,
    borderStyle: 'dashed',
    borderRadius: 180,
    borderColor: '#8D92A3',
  },
});
