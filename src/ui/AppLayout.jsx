import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoaderSpinner from "./LoaderSpinner";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <LoaderSpinner />}
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
