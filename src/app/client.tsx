"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const Client = () => {
  const trpc = useTRPC();
  
  return (
    <div className="p-4 gap-4 mx-auto">
     
    </div>
  )
};
