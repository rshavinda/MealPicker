import React, {Component} from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const AppContext = React.createContext();

class AppProvider extends Component {

    state = {
        stage: 1,
        meals: ["Pizza", "Burger"],
        result: ''
    }


    addMealHandler = (name) => {
        this.setState((prevState, props) => ({
            meals:[
                ...prevState.meals,
                name
            ]
        }))
    }

    removeMealHandler = (index) => {
        let newArray = this.state.meals;
        newArray.splice(index, 1);
        this.setState({meals: newArray});
    }

    nextScreenHandler = () => {
        const {meals} = this.state;

        if(meals.length < 2){
            Toast.show({
                type:'error',
                position:'bottom',
                text1:'Sorry',
                text2:'You need to enter at least 2 meals'
            })

        }
        else{
            this.setState({
                stage:2
            }, () => {
                this.generateMeal();
            })
        }
    }

    generateMeal = () => {
        const {meals} = this.state;

        this.setState({
            result: meals[Math.floor(Math.random() * meals.length)]
        })
    }

    resetResult = () => {
        this.setState({
            stage: 1,
            meals: [],
            result: ''
        })
    }



    render() {
        return(
            <>
                <AppContext.Provider value={{
                    state: this.state,
                    addMeal: this.addMealHandler,
                    removeMeal: this.removeMealHandler,
                    nextScreen: this.nextScreenHandler,
                    getGeneratedMeal: this.generateMeal,
                    resetResult: this.resetResult
                }}>
                    {this.props.children }
                </AppContext.Provider>
            </>
        )
    }
}

export{
    AppProvider,
    AppContext
}