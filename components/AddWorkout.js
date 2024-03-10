import React, { useContext } from 'react';
import { WorkoutContext } from '../WorkoutContext';
import { Modal, Pressable, StyleSheet, View, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SegmentedButtons, TextInput, Button, Chip } from 'react-native-paper';
import styles from '../Styles';


export default function AddWorkout() {

  const { visible, setVisible, date, setDate, workoutType, setWorkoutType, distance, setDistance, duration, setDuration, workouts, setWorkouts, unit } = useContext(WorkoutContext);



  function handleDate(selectedDate) {
    setDate(selectedDate.dateString);
    setVisible(false);
  }

  const addWorkout = () => {
    const newWorkout = {
      date,
      workoutType,
      distance,
      duration,
    };

    setWorkouts([...workouts, newWorkout]);
    setDate('');
    setWorkoutType('');
    setDistance('');
    setDuration('');
    console.log(workouts);
  };

  return (
    <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
      <View style={styles.addWorkouContainer}>
        <SafeAreaView>
          <SegmentedButtons
            style={styles.segmentedButtons}
            value={workoutType}
            onValueChange={setWorkoutType}
            buttons={[
              { icon: 'run', value: 'run', label: 'Running' },
              { icon: 'swim', value: 'swim', label: 'Swimming' },
              { icon: 'bike', value: 'bike', label: 'Cycling' },
            ]}
          />
        </SafeAreaView>
        <TextInput
          label={`Distance (${unit})`}
          keyboardType='number-pad'
          value={distance}
          onChangeText={setDistance}
          clearButtonMode='while-editing'
        />
        <TextInput
          label="Duration(min)"
          keyboardType='number-pad'
          value={duration}
          onChangeText={setDuration}
          clearButtonMode='while-editing'
        />
        <Modal visible={visible} transparent={true}>
          <Calendar onDayPress={handleDate} />
        </Modal>
        <Pressable style={styles.pressable} onPress={() => setVisible(true)}>
          <Chip icon={'calendar'} style={styles.pressableText}>{date || 'Select date'}</Chip>
        </Pressable>
        <Button style={styles.addWorkoutButton} icon='send' mode='elevated' title="Add Workout" onPress={addWorkout}
          disabled={date === '' || workoutType === '' || distance === '' || duration === ''}
        > Add Workout</Button>
      </View>
    </TouchableWithoutFeedback>
  );
};