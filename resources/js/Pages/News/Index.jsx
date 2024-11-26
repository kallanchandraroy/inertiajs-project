import React from "react";
import { Link } from "@inertiajs/inertia-react";
import logo from "../../../../public/react-logo.png"; // Tell webpack this JS file uses this image

export default function Index({ news }) {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">News</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Title</th>
                                <th className="py-2 px-4 border-b">Author</th>
                                <th className="py-2 px-4 border-b">
                                    Published Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">
                                        {item.title}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {item.author}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {new Date(
                                            item.published_at
                                        ).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-center space-x-2">
                    {Array.from({ length: news.last_page }, (_, index) => (
                        <Link
                            key={index + 1}
                            href={route("news.index", { page: index + 1 })}
                            className={`px-4 py-2 rounded ${
                                news.current_page === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {index + 1}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
                <div className="shrink-0">
                    <img class="size-12" src={logo} alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">
                        ChitChat
                    </div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <div className="mt-4 py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
                <img
                    className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                    src={logo}
                    alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                            Product Engineer
                        </p>
                    </div>
                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                    </button>
                </div>
            </div>


            <a
                href="#"
                class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 mt-4"
            >
                <div class="flex items-center space-x-3">
                    <svg
                        class="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    ></svg>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
                        New project
                    </h3>
                </div>
                <p class="text-slate-500 group-hover:text-white text-sm">
                    Create a new project from a variety of starting templates.
                </p>
            </a>
        </>
    );
}
