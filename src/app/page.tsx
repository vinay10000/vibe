"use client"
import {useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState("")
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("OpenAI background job invoked")
    }
  }))
  return (
    <div className="max-w-md mx-auto mt-8 p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">AI Summarizer</h1>
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text to summarize..."
      />
      <div className="space-y-2">
        <Button 
          onClick={() => invoke.mutate({value: value})} 
          className="w-full"
          disabled={!value.trim() || invoke.isPending}
        >
          {invoke.isPending ? "Processing..." : "Summarize with OpenAI"}
        </Button>
      </div>
    </div>
  );
}
