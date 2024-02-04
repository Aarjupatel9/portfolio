import { createContext } from 'react';

const colorContext = createContext<{
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}>({ color: '', setColor: () => { } });

export default colorContext;