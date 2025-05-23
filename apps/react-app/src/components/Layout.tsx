import type { ReactNode } from "react";
import React from 'react';


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-100 p-2 text-center">
                <h1 className="text-3xl font-bold bg-sky-950 text-white p-5">My ToDo List</h1>
            </header>
            <main className="flex-1 p-5 bg-gray-200 w-full">
                {children}
            </main>
            <footer className="bg-gray-100 p-4 text-center">
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
};

export default Layout;
