'use client';
import React from 'react';

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return (
        <div style={{ padding: 32, textAlign: 'center' }}>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()} style={{ marginTop: 16 }}>
                Try again
            </button>
        </div>
    );
}