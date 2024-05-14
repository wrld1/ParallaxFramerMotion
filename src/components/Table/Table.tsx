import * as React from "react";
import TableRow from "../ui/TableRow";
import TableTh from "./TableTh";

export interface TableProps {}

export default function Table(props: TableProps) {
  const tableData = [
    {
      modelName: "davidkim205/Rhea-72b-v0.5",
      average: 81.22,
      arc: 79.78,
      hellaswag: 91.15,
      mmlu: 77.95,
      truthful: 74.5,
      winogrande: 87.85,
      gsm8k: 76.12,
      usage: 1384193,
    },
  ];
  return (
    <table className="w-full text-white text-start table-auto">
      <thead>
        <tr>
          <TableTh>#</TableTh>
          <TableTh>Model Name</TableTh>
          <TableTh>Average</TableTh>
          <TableTh>ARC</TableTh>
          <TableTh>Hellaswag</TableTh>
          <TableTh>MMLU</TableTh>
          <TableTh>Truthful</TableTh>
          <TableTh>Winogrande</TableTh>
          <TableTh>GSM8K</TableTh>
          <TableTh>Usage</TableTh>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <TableRow key={index} data={row} />
        ))}
      </tbody>
    </table>
  );
}
