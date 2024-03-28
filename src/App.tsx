import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainPage } from "./pages";
import { PostListPage } from "./pages/posts";
import { PostDetailPage } from "./pages/posts/[id]";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/posts", element: <PostListPage /> },
  {
    path: "/posts/:id",
    element: <PostDetailPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
