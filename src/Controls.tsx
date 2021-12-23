import React from 'react';
import {
    Text,
    StyleSheet,
    Pressable
} from 'react-native';
import SSH from './NativeSSH';
import { 
    HOST, 
    USERNAME, 
    PASSWORD,
    PRIVATE_KEY,
    COMMAND
} from './config';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#152642',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        activeOpacity: 0.9
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
});

const Controls = () => {
    const toggle = async (action: string) => {
        const command = `${COMMAND} ${action}`;

        SSH.execute(HOST, USERNAME, PASSWORD, PRIVATE_KEY, command).then(res => {

        }).catch(error => {
            // TODO: Handle error
        });
    };

    return (
        <React.Fragment>
            <Pressable
                style={styles.button}
                onPress={() => toggle('on')}
            >
                <Text style={styles.buttonText}>
                    On
                </Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => toggle('off')}
            >
                <Text style={styles.buttonText}>
                    Off
                </Text>
            </Pressable>
        </React.Fragment>
    );
};

export default Controls;