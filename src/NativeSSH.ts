import { NativeModules } from 'react-native';
const { SSH } = NativeModules;

interface SSHInterface {
    execute(
        host: string,
        port: number,
        username: string,
        password: string | null,
        privateKey: string | null,
        command: string
    ): Promise<string>;
};

export default SSH as SSHInterface;