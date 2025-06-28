"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const Client = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job invoked")
    }
  }))
  const { data } = useSuspenseQuery(
    trpc.createAI.queryOptions({ text: "vinay PREFETCH" })
  );
  return (
    <div className="p-4 gap-4 mx-auto">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({text: "vinay"})}>
        Invoke background job
      </Button>
    </div>
  )
};
