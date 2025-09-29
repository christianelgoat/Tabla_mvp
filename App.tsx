
import React from 'react';
import PainPointTable from './components/PainPointTable';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            Solución a los Puntos de Dolor del Usuario
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Cómo Nuestro MVP "Smart Control Stock" Aborda sus Necesidades
          </p>
        </header>
        <PainPointTable />
      </main>
      <footer className="w-full max-w-5xl mx-auto mt-12 text-center text-gray-500">
        <p></p>
      </footer>
    </div>
  );
};

export default App;
