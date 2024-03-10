//Author: Matias Ylipekkala

import { MD2LightTheme as DefaultTheme,PaperProvider } from "react-native-paper";
import { useState } from "react";
import { WorkoutContext } from "./WorkoutContext";
import Navigation from "./components/Navigation";
import Statistics from "./Statistics";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    secondary: "yellow",
  },
};

export default function App() {

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [workouts, setWorkouts] = useState(Statistics);
  const [unit, setUnit] = useState('Km');
  

  return (
    <WorkoutContext.Provider value={{ visible, setVisible, 
                                      date, setDate, 
                                      workoutType, setWorkoutType, 
                                      distance, setDistance, 
                                      duration, setDuration, 
                                      workouts, setWorkouts, 
                                      unit, setUnit }}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider> 
    </WorkoutContext.Provider>
  );
}
