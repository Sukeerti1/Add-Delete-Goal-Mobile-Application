import {
  StyleSheet, 
  View, 
  TextInput, 
  Button, 
  Modal, 
  Image 
} from 'react-native'
import {useState} from 'react'

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image 
        style={styles.image}
        source={require('../assets/images/goal.png')}/>
        <TextInput 
        style={styles.textInput}
        placeholder='Your course goals'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
              <Button 
              title='Add Goal' 
              onPress={addGoalHandler}
              color='gray'
            />
        </View>
        <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={props.onCancel}
              color='#f31282'
            />
        </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        //flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 24,
        padding: 16,
        //borderBottomWidth: 1,
        //borderBottomColor: '#cccccc',
        backgroundColor: 'black'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
       // marginRight: 8,
        padding: 8,
        color: 'white'
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: '100',
        marginHorizontal: 8
      }
})