import {useTheme} from 'next-themes';
import React from 'react';
import {Layout, Navbar} from 'ui';
import {Sidebar} from './Sidebar';

interface IContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<IContentLayoutProps> = ({children}) => {
  return (
    <main className="3xl:px-12 min-h-[100vh] px-4 pt-24 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-10 xl:pb-20">
      {children}
    </main>
  );
};

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({children}) => {
  const {theme, setTheme} = useTheme();

  const test = (): void => {
    console.log(theme);
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <Layout>
        <Navbar test={test} />
        <Sidebar />
        <ContentLayout>{children}</ContentLayout>
      </Layout>
    </>
  );
};

export default Wrapper;
