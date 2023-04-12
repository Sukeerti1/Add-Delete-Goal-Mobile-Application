import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  Button, 
  TextInput, 
  ScrollView,
  FlatList,
  Modal
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      // enteredGoalText
      {text: enteredGoalText, id: Math.random().toString()}
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color='gray' 
        onPress={startAddGoalHandler}
        />
     <GoalInput 
       visible={modalIsVisible} 
       onAddGoal = {addGoalHandler}  
       onCancel={endAddGoalHandler} /> 
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal) => (
        <View 
        style={styles.goalItem} 
        key={goal}
        >
          <Text style={styles.goalText}>{goal}</Text>
        </View> 
        
        ))}
        </ScrollView> */}
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
          return (
             <GoalItem 
             text={itemData.item.text} 
             id={itemData.item.id}
             onDeleteItem={deleteGoalHandler} 
             />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false} 
        />
      </View>
    </View>
    </>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16,
    backgroundColor: 'black'
  },
  
  goalsContainer: {
    flex: 4
  },
  
});
