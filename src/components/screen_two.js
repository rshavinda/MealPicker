import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { AppHeader } from '../util/tools';
import { AppContext } from '../context';


const ScreenTwo = () => {

    const context = useContext(AppContext);

    return(
        <>
        <AppHeader/>

        <Text>Suggestion is</Text>
            <Text style={{ marginTop: 30, fontSize: 30 }}>
                {context.state.result}
            </Text>

            <Button
                title='Try Again'
                onPress={() => context.getGeneratedMeal()}
                buttonStyle={styles.button}

            />

            <Button
                title="Start Over"
                onPress={() => context.resetResult()}
                buttonStyle={styles.button}
            />

        </>
    );

}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#41B6E6',
        marginTop:20
    }
})

export default ScreenTwo;