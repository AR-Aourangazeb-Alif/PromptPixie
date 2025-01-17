import '@styles/globals.css';

import Nav from '@components/Nav';

export const metadata = {
  title: 'PromptCraft',
  description: 'Discover & Share AI Prompts'
}
  
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>

      </body>
    </html>
  );
};

export default RootLayout;
