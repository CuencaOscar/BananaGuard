import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

type AccessContextType = {
  isAccessed: boolean;
  setAccessed: () => void;
};

const AccessContext = createContext<AccessContextType>({
  isAccessed: false,
  setAccessed: () => {},
});

export const AccessProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isAccessed, setIsAccessed] = useState(false);
  const setAccessed = () => setIsAccessed(true);

  const value = useMemo(() => ({isAccessed, setAccessed}), [isAccessed]);

  return (
    <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
  );
};

export const useAccess = () => useContext(AccessContext);
