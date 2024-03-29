import { Header, PostDetail } from "@/components";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        reset
      </button>
    </div>
  );
}

export const PostDetailPage = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div>
      <Header />
      <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
        <Suspense fallback="로딩중...">
          <PostDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
