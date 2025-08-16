import Navigation from './components/Navigation';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 p-4 pt-0">
        <AppRoutes />
      </main>
      <Navigation />
    </>
  );
}

export default App;
