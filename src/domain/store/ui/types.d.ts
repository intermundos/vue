type TUIState = {
    theme: 'dark' | 'light',
}

interface IUIStore {
    set_theme( theme: TUIState['theme'] ): void
}
