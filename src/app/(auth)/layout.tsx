import { ChildrenType } from "@/types";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center w-full min-h-screen flex-center">
      {children}
    </div>
  );
};
export default Layout;
