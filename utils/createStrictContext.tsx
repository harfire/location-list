import React, { createContext, useContext } from 'react';

export function createStrictContext<T>({
  errorMessage,
  contextName,
}: { errorMessage?: string; contextName?: string } = {}) {
  const Context = createContext<T | undefined>(undefined);

  function useConsumer() {
    const _contextName = contextName || '';
    const _errorMessage = errorMessage || ' context provider is missing';

    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(`${_contextName}${_errorMessage}`);
    }

    return context;
  }

  return [Context.Provider, useConsumer] as [React.Provider<T>, () => T];
}
