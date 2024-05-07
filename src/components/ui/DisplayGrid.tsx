import React, { ReactNode } from 'react';

type DisplayGridProps = {
    children: ReactNode;
};

export default function DisplayGrid({ children }: DisplayGridProps) {
    return (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-7">
            {children}
        </div>
    );
} 