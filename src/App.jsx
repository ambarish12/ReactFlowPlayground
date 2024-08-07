import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Graph1 from './Graph/Graph1';
import Graph2 from './Graph/Graph2/Graph2';
import Graph3 from './Graph/Graph3/Graph3';
import Dagre1 from './Graph/Dagre1/Dagre1';
import { Editor } from './Graph/Editor/Editor';
 
export default function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Graph1 />,
  },
  {
    path: "1",
    element: <Graph2 />,
  },
  {
    path: "2",
    element: <Graph3 />,
  },
  {
    path: "3",
    element: <Dagre1 />,
  },
  {
    path: "4",
    element: <Editor />,
  }])
 
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}