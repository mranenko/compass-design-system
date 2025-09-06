import "./Page.scss";

import { useEffect } from "react";

import {
  PageContent,
  PageSidebarNav,
} from "../../components";

interface PageProps {
  children: React.ReactNode
  className?: string
};

const Page = ({ children, className = "" }: PageProps) => {
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className={`page ${className}`}>
      <PageSidebarNav />
      {/* <PageHeader />
      <PageMain> */}
      <PageContent>{children}</PageContent>
        {/* {children} */}
      {/* </PageMain>
      <PageFooter /> */}
    </div>
  );
};

export { Page };
