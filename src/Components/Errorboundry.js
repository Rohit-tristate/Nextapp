// components/ErrorBoundar
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

async function ErrorFallback({ error, resetErrorBoundary }) {
    "use server"
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
     
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
