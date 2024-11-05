import {useSession} from '@/auth/auth-context';
import {Href, Link} from 'expo-router';
import {StyleSheet, Text, View} from 'react-native';


export default function Index() {
    const {signOut} = useSession();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Link href={"/about" as Href} style={styles.button}>
                Go to About screen
            </Link>
            <Text
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    signOut();
                }}>
                Sign Out
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});