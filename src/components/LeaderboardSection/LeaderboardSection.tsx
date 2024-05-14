import * as React from "react";
import Subheading from "../ui/Subheading";
import Button from "../ui/Button";
import ParagraphText from "../ui/ParagraphText";
import Table from "../Table";

export default function LeaderboardSection() {
  return (
    <section className="min-h-screen flex justify-start items-center flex-wrap">
      <div className="flex flex-col items-center justify-start gap-8">
        <div className="flex w-full justify-between items-center">
          <Subheading>LLM Leaderboard</Subheading>
          <Button>Submit your model</Button>
        </div>
        <ParagraphText>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework
          to test LLMs on a large number of different evaluation tasks. The
          higher the score, the better the LLM.
        </ParagraphText>
        {/* <Table /> */}
      </div>
    </section>
  );
}
