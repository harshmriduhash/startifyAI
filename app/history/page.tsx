"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useAuth } from "@clerk/nextjs";

interface HistoryEntry {
  id: string;
  user_id: string;
  type: "query" | "health_check" | "pitch_deck";
  input: Record<string, any>;
  output: string;
  timestamp: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) {
      console.warn("No userId available from Clerk.");
      setError("User not authenticated.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    const fetchHistory = async () => {
      try {
        const response = await axiosInstance.get(`/history/${userId}`);
        setHistory(response.data.history || []);
      } catch (err: any) {
        setError(err.response?.data?.detail || "Failed to fetch history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [userId]);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">🕒 User History</h1>
      <p className="text-gray-600 text-center mb-8">
        View your past queries, health checks, and pitch deck generations.
      </p>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && history.length === 0 && (
        <p className="text-gray-500 text-center">No history available yet.</p>
      )}

      <div className="mt-8 space-y-4">
        {history.map((entry, index) => (
          <div
            key={index}
            className="p-4 border rounded-md bg-gray-50 shadow-sm"
          >
            <p>
              <strong>Type:</strong> {entry.type.toUpperCase()}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(entry.timestamp).toLocaleString()}
            </p>
            <p>
              <strong>Input:</strong> {JSON.stringify(entry.input)}
            </p>
            <p>
              <strong>Output:</strong> {entry.output}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
