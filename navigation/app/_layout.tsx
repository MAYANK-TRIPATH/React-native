import { Link, Slot } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Layout() {
    return <SafeAreaView>
        <View style={{ height: "90%" }}>
            <Slot />
        </View>
        <View style={{backgroundColor: "blue"}}>
            <Link href={"/"}>
                <Text>Main PAge</Text>
            </Link>

            <Link href={"/About"}>
                <Text>About Page</Text>
            </Link>
        </View>


    </SafeAreaView>
}