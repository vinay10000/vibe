import { inngest } from "./client";
import { createAgent, gemini } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are a Next.js expert who writes clear, concise, and simple explanations for developers",
      model: gemini({ model: "gemini-2.5-pro" }),
    });
    const { output } = await codeAgent.run(`${event.data.value}`);
    console.log(output);
    return { output };
  }
);
