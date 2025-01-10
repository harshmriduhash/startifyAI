"use client";
import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StartupHealthCheck() {
  const [formData, setFormData] = useState({
    stage: "Series A",
    ROI: 7,
    gross_burn_rate: 10000,
    net_burn_rate: 7000,
    CAC: 800,
    MRR: 40000,
  });

  const [analysis, setAnalysis] = useState<any>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stage" ? value : Number(value),
    }));
  };

  // Submit form data to backend
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setAnalysis(null);
    setSummary("");

    try {
      const response = await axiosInstance.post("/health-check/analyze", formData);
      setAnalysis(response.data.analysis);
      setSummary(response.data.summary);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to analyze health metrics.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">📊 Startup Health Check</h1>
      <p className="text-gray-600 text-center mb-8">
        Analyze your startup's financial metrics and get actionable insights.
      </p>

      {/* Form Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Enter Financial Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input Fields */}
          <div>
            <label className="block text-sm font-medium mb-1">Stage</label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="w-full p-2 rounded-md border"
            >
              <option value="Seed">Pre-Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
              <option value="Series B">Series C</option>
              <option value="Series B">Series D</option>
              <option value="Series B">Series E+</option>
            </select>
          </div>

          {["ROI", "gross_burn_rate", "net_burn_rate", "CAC", "MRR"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field.replace(/_/g, " ")}
                </label>
                <input
                  type="number"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border"
                />
              </div>
            )
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mt-6 px-6 py-2 rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Analyzing..." : "Start Health Check"}
        </button>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Analysis & Visualization Section */}
      {analysis && (
        <div>
          <h2 className="text-2xl font-bold mb-4">📈 Analysis Results</h2>
          <Bar
            data={{
              labels: Object.keys(analysis),
              datasets: [
                {
                  label: "Health Analysis",
                  data: Object.values(analysis).map((value: any) =>
                    value === "Within Range" ? 1 : 0
                  ),
                  backgroundColor: [
                    "#4CAF50",
                    "#FFC107",
                    "#FF5722",
                    "#2196F3",
                    "#9C27B0",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                legend: { position: "top" },
              },
              responsive: true,
            }}
          />

          {/* Summary Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-2">📋 Summary</h3>
            <p className="text-gray-600 whitespace-pre-line">{summary}</p>
          </div>
        </div>
      )}
    </section>
  );
}
