import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; //native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // createNsnav
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen" ;

export default function StackNavigation(){
    const Stack=createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
                {/* <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Friends" component={FriendsScreen} />
                <Stack.Screen name="Chats" component={ChatsScreen} />
                <Stack.Screen name="Messages" component={ChatMessagesScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}



// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }