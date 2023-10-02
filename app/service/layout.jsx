export async function generateMetadata() {
  return {
    title: "Service",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
