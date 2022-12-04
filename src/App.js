import { RouterProvider } from "react-router-dom";
import useProducts from "./Hooks/useProducts";
import routes from "./routes/routes";

function App() {
  const products = useProducts();

  console.log(products);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
