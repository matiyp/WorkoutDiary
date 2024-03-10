import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  pressableText: {
    color: '#ffffff',
    fontSize: 18,
  },
  segmentedButtons: {
    margin: 10,
  },
  addWorkoutButton: {
    margin: 10,
    borderWidth:2, 
    backgroundColor:'#5beb4e72',
  },
  addWorkouContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card:{
    flexDirection: 'row',   
    justifyContent: 'space-evenly',
  },
  chip: {
    borderTopWidth: 1,
  },
  radiobuttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '50%',
    marginBottom:'50%',
    borderWidth: 1,
    borderRadius: 20,
  },
  radiobutton: {
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 20,
  },
});

export default styles;