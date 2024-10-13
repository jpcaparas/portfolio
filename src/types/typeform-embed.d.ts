declare module '@typeform/embed' {
    export function createWidget(id: string, options: {
        container: HTMLElement;
        hideHeaders?: boolean;
        hideFooter?: boolean;
        opacity?: number;
        [key: string]: any;
    }): void;
}