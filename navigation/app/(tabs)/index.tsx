import HomeScreen from '@/components/HomeScreen';
import ProfileScreen from '@/components/ProfileScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import "@/global.css"

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator >
      <Tab.Screen  name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>

  );
}

