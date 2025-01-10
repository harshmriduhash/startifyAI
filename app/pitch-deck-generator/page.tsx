"use client";

import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { saveAs } from "file-saver";

export default function PitchDeckGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    problem: "",
    solution: "",
    founders: "",
  });

  const [pitchDeck, setPitchDeck] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form data to backend
  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setPitchDeck("");

    try {
      const response = await axiosInstance.post("/pitch_deck", formData);
      setPitchDeck(response.data.pitch_deck);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to generate pitch deck.");
    } finally {
      setLoading(false);
    }
  };

  // Download pitch deck as Word document
  const handleDownloadWord = () => {
    if (!pitchDeck) return;

    // Prepare the content for Word document
    const blobContent = `
      Startup Pitch Deck\n
      ==================\n
      ${pitchDeck.replace(/\n/g, "\r\n")}
    `;

    const blob = new Blob([blobContent], {
      type: "application/msword",
    });

    const fileName = formData.name.trim()
      ? `${formData.name.trim().replace(/[^a-zA-Z0-9]/g, "_")}_pitch_deck.docx`
      : "pitch_deck.docx";

    saveAs(blob, fileName);
  };

  return (
    <section className="container mx-auto py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        📝 Pitch Deck Generator
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Create AI-powered pitch decks tailored to your startup's unique vision
        and goals.
      </p>

      {/* Form Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Enter Startup Details</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Input Fields */}
          {["name", "domain", "problem", "solution", "founders"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field.replace(/_/g, " ")}
                </label>
                {field === "problem" || field === "solution" ? (
                  <textarea
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 rounded-md border"
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border"
                  />
                )}
              </div>
            )
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`mt-6 px-6 py-2 rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Generating..." : "Generate Pitch Deck"}
        </button>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Pitch Deck Display */}
      {pitchDeck && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">📑 Generated Pitch Deck</h3>
          <pre className="whitespace-pre-wrap text-gray-700 text-left">
            {pitchDeck}
          </pre>

          {/* Download Button */}
          <button
            onClick={handleDownloadWord}
            className="mt-10 text-black px-6 py-2 rounded-md hover:bg-gray-200 uppercase text-xs font-bold"
          >
            📥 Download as word
          </button>
        </div>
      )}
    </section>
  );
}
