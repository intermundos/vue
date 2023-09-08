type TAppState = {
    test: number;
}

interface IAppStore {
    show_test(): boolean;

    test(): void;
}
