import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Index () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return <View>
    <Text>
      This is Home Screen
    </Text>
  </View>
}

function ProfileScreen() {
  return <View>
    <Text>
      This is Profile Screen
    </Text>
  </View>
}