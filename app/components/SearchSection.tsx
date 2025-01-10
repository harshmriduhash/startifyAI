"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosInstance";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const { data } = await axiosInstance.get("/query", {
        params: { query },
      });
      setResponse(data.response);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="search" className="container mx-auto text-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">
        Ask Me Anything About Startups 🚀
      </h2>
      <p className="text-gray-600 mb-8">
        Funding, pitch decks, growth strategies—get instant answers with
        AI-powered insights.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about startups—funding, pitch decks, growth strategies..."
            className="w-full p-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Response Display */}
      {response && (
        <div className="mt-8 p-4 border rounded-md bg-gray-50 text-left max-w-2xl mx-auto">
          <h3 className="text-lg font-bold mb-2">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </section>
  );
}