import { TimeProvider } from "./context/TimeContext";

export const Providers: React.FC<React.PropsWithChildren> = ({children}) => (
  <TimeProvider>
    {children}
  </TimeProvider>
)