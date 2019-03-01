declare module 'node-readability' {
    export interface callbackResult {
        content: string;
        title: string;
    }

    export default function read(url: string, callback: Function):void;
}
