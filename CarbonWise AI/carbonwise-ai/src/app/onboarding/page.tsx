"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    transportType: "car",
    dailyDistance: 10,
    monthlyElectricityKwh: 300,
    diet: "average",
  });

  const updateForm = (key: keyof typeof formData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else finishOnboarding();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const finishOnboarding = async () => {
    // In a real app, this would submit to an API route to calculate baseline and create EcoScore
    // const res = await fetch('/api/onboarding', { method: 'POST', body: JSON.stringify(formData) });
    console.log("Onboarding complete", formData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <Card className="w-full max-w-lg overflow-hidden border-green-900/50 bg-zinc-950/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-green-400">CarbonBaseline™ Survey</CardTitle>
          <CardDescription>Let's calculate your initial carbon footprint.</CardDescription>
        </CardHeader>
        <CardContent className="relative h-64">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4 absolute inset-0 p-6"
              >
                <h3 className="text-xl font-medium">Transportation</h3>
                <div className="space-y-2">
                  <Label>Primary Transport Mode</Label>
                  <select 
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm ring-offset-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                    value={formData.transportType}
                    onChange={(e) => updateForm("transportType", e.target.value)}
                  >
                    <option value="car">Car (Gasoline)</option>
                    <option value="bus">Public Bus</option>
                    <option value="train">Train / Metro</option>
                    <option value="flight">Frequent Flyer</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Daily Commute (km)</Label>
                  <Input 
                    type="number" 
                    value={formData.dailyDistance} 
                    onChange={(e) => updateForm("dailyDistance", Number(e.target.value))}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4 absolute inset-0 p-6"
              >
                <h3 className="text-xl font-medium">Energy Consumption</h3>
                <div className="space-y-2">
                  <Label>Monthly Electricity (kWh)</Label>
                  <Input 
                    type="number" 
                    value={formData.monthlyElectricityKwh} 
                    onChange={(e) => updateForm("monthlyElectricityKwh", Number(e.target.value))}
                  />
                  <p className="text-xs text-zinc-500">Check your recent utility bill for this number.</p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4 absolute inset-0 p-6"
              >
                <h3 className="text-xl font-medium">Dietary Habits</h3>
                <div className="space-y-2">
                  <Label>Which best describes your diet?</Label>
                  <select 
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm ring-offset-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                    value={formData.diet}
                    onChange={(e) => updateForm("diet", e.target.value)}
                  >
                    <option value="meat_heavy">Meat Heavy (Every meal)</option>
                    <option value="average">Average (Some meat)</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-zinc-800 pt-4">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          <div className="flex gap-1 items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-2 w-2 rounded-full ${step >= s ? 'bg-green-500' : 'bg-zinc-800'}`} />
            ))}
          </div>
          <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700 text-white">
            {step === 3 ? "Complete" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
