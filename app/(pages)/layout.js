import './pages.scss';

export default function PagesLayout({ children }) {
  return (
      <main className="mainContent">
        {children}
      </main>
  );
}