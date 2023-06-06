import MainNavigation from "./MainNavigaton";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="my-12 mx-auto w-11/12 max-w-3xl">{props.children}</main>
    </div>
  );
}

export default Layout;
