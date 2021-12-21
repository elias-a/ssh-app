import { NativeModules } from 'react-native';
const { SSH } = NativeModules;

interface SSHInterface {
    execute(host: string, username: string, password: string, command: string): Promise<string>;
};

export default SSH as SSHInterface;