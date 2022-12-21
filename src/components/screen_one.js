import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Input, Button, ListItem, Text} from 'react-native-elements';
import { AppHeader } from '../util/tools';
import { AppContext } from '../context';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ScreenOne = () => {

    const context = useContext(AppContext);

    const renderMeals = () => (
        context.state.meals.map((item, index) => (
            <ListItem
                key={index}
                bottomDivider
                style={{ width: '100%' }}
                onLongPress={() => context.removeMeal(index)}
            >

                <ListItem.Chevron />
                <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>

            </ListItem>
        ))
    )

    console.log(context)

    return (
        <>
            <Formik
             initialValues={{meal: ''}}
             validationSchema={Yup.object({
                meal: Yup.string()
                .min(2, "Must be more than 2 letters")
                .max(15, "Must be less than 15 letters")
                .required("Food\'s name is reuired!")
             })}
             onSubmit={(values, {resetForm}) => {
                context.addMeal(values.meal)
                resetForm();
             }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                    <>
                        <AppHeader />

                        <Input
                            placeholder='Add meals here'
                            leftIcon={{
                                type: 'ionicon',
                                name: 'fast-food-outline'
                            }}
                            inputContainerStyle={{
                                marginHorizontal: 50,
                                marginTop: 50
                            }}

                            renderErrorMessage={errors.meal && touched.meal}
                            errorMessage={errors.meal}
                            errorStyle={{
                                marginHorizontal:50
                            }}

                            onChangeText={handleChange('meal')}
                            onBlur={handleBlur('meal')}
                            value={values.meal}
                        />

                        <Button
                            title={"Add Meal"}
                            buttonStyle={styles.button}
                            onPress={handleSubmit}
                        />

                    </>
                )}
            </Formik>

            <View style={{ padding: 20, width: '100%' }}>{

                context.state.meals && context.state.meals.length > 0?
                <>
                    <Text>List of Meals</Text>
                    {renderMeals()}

                    <Button
                        buttonStyle={styles.button}
                        title={'Get Suggestion'}
                        onPress={() => context.nextScreen()}
                    />
                </>
                :
                null
            }

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#DB3EB1',
        marginTop: 20
    }
})

export default ScreenOne;