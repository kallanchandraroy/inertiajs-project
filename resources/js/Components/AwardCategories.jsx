// src/components/AwardCategories.jsx
import React from 'react';

const categories = [
    { title: 'Best Innovation', description: 'Recognizing outstanding innovative ideas that drive progress and change.' },
    { title: 'Leadership Excellence', description: 'Honoring leaders who inspire and drive positive impact in their fields.' },
    { title: 'Community Service', description: 'Acknowledging commitment to serving communities with dedication.' },
];

export default function AwardCategories() {
    return (
        <section className="container mx-auto my-12 px-6">
            <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">Award Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-2xl font-bold text-indigo-600 mb-4">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
