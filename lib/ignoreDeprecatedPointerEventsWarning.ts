import { Platform } from 'react-native';

const POINTER_EVENTS_WARNING =
  'props.pointerEvents is deprecated. Use style.pointerEvents';

if (Platform.OS === 'web' && __DEV__) {
  const originalWarn = console.warn;

  console.warn = (...args: Parameters<typeof console.warn>) => {
    if (typeof args[0] === 'string' && args[0].includes(POINTER_EVENTS_WARNING)) {
      return;
    }

    originalWarn(...args);
  };
}
