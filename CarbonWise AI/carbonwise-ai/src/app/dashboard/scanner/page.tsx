"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Loader2, CheckCircle } from "lucide-react";

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleUpload = () => {
    setIsScanning(true);
    // Mock API call to Gemini Vision
    setTimeout(() => {
      setIsScanning(false);
      setResult({
        provider: "Green Energy Co.",
        units: 320,
        cost: 45.20,
        date: "2023-10-01",
        co2e: 128
      });
    }, 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <FileText className="h-8 w-8 text-blue-500" /> Bill & Receipt Scanner
        </h1>
        <p className="text-zinc-400 mt-1">Upload your utility bills or gas receipts to automatically calculate your carbon impact.</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-8 text-center border-2 border-dashed border-zinc-700 rounded-lg m-6 hover:bg-zinc-800/50 transition-colors cursor-pointer" onClick={handleUpload}>
          {isScanning ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
              <p className="text-zinc-300">Extracting data using Gemini Vision...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Upload className="h-12 w-12 text-zinc-500" />
              <div className="space-y-1">
                <p className="text-zinc-300 font-medium">Click to upload or drag and drop</p>
                <p className="text-zinc-500 text-sm">PDF, PNG, JPG (max 5MB)</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card className="bg-green-950/20 border-green-900/50">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" /> Extraction Successful
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-zinc-400">Provider</p>
              <p className="text-lg font-medium text-white">{result.provider}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Date</p>
              <p className="text-lg font-medium text-white">{result.date}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Units Consumed</p>
              <p className="text-lg font-medium text-white">{result.units} kWh</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Estimated Carbon</p>
              <p className="text-lg font-medium text-red-400">+{result.co2e} kg CO₂e</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
