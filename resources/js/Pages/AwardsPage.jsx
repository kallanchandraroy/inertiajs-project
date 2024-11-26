// src/Pages/AwardsPage.jsx
import React from 'react';
import Header from '../components/Header';
import AwardCategories from '../components/AwardCategories';
import AwardWinners from '../components/AwardWinners';

export default function AwardsPage() {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <Header />
            <AwardCategories />
            <AwardWinners />
            <footer className="bg-indigo-600 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Awards Ceremony. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
