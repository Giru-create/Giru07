"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Loader2, Award } from "lucide-react";

export default function VerifyPage() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleUpload = () => {
    setIsVerifying(true);
    // Mock API call to Gemini Vision
    setTimeout(() => {
      setIsVerifying(false);
      setResult({
        activity: "Tree Plantation",
        confidence: 96,
        pointsAwarded: 50
      });
    }, 2500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Camera className="h-8 w-8 text-amber-500" /> Eco Action Verification
        </h1>
        <p className="text-zinc-400 mt-1">Upload a photo of your eco-friendly action to earn Green Points.</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-8 text-center border-2 border-dashed border-zinc-700 rounded-lg m-6 hover:bg-zinc-800/50 transition-colors cursor-pointer" onClick={handleUpload}>
          {isVerifying ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Loader2 className="h-12 w-12 text-amber-500 animate-spin" />
              <p className="text-zinc-300">Analyzing image with Gemini Vision...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <Camera className="h-12 w-12 text-zinc-500" />
              <div className="space-y-1">
                <p className="text-zinc-300 font-medium">Take a photo or upload an image</p>
                <p className="text-zinc-500 text-sm">PNG, JPG (max 5MB)</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card className="bg-amber-950/20 border-amber-900/50">
          <CardHeader>
            <CardTitle className="text-amber-400 flex items-center gap-2">
              <Award className="h-5 w-5" /> Action Verified!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center pb-8">
            <div className="text-zinc-300">
              We detected <span className="font-bold text-white">{result.activity}</span> with {result.confidence}% confidence.
            </div>
            <div className="text-5xl font-black text-amber-400 pt-2">
              +{result.pointsAwarded} GP
            </div>
            <p className="text-sm text-zinc-500">Your Eco Score has also increased.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
