// src/components/AwardWinners.jsx
import React from 'react';

const winners = [
    { name: 'John Doe', award: 'Best Innovation Award', description: 'For groundbreaking contributions to sustainable technology.' },
    { name: 'Jane Smith', award: 'Leadership Excellence Award', description: 'For exceptional leadership in social enterprise initiatives.' },
    // Add more winners as needed
];

export default function AwardWinners() {
    return (
        <section className="container mx-auto my-12 px-6">
            <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">Award Winners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {winners.map((winner, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-center mb-4">
                            <img className="w-20 h-20 rounded-full mx-auto" src="https://via.placeholder.com/80" alt="Winner" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 text-center">{winner.name}</h3>
                        <p className="text-gray-600 text-center">{winner.award}</p>
                        <p className="mt-4 text-gray-500">{winner.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
