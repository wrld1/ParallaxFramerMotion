import * as React from "react";
import TableTd from "./TableTd";

export interface TableRowProps {
  data: {
    modelName: string;
    average: number;
    arc: number;
    hellaswag: number;
    mmlu: number;
    truthful: number;
    winogrande: number;
    gsm8k: number;
    usage: number;
  };
}

export default function TableRow({ data }: TableRowProps) {
  return (
    <tr className="border-b">
      <TableTd>#</TableTd>
      <TableTd>{data.modelName}</TableTd>
      <TableTd>{data.average}</TableTd>
      <TableTd>{data.arc}</TableTd>
      <TableTd>{data.hellaswag}</TableTd>
      <TableTd>{data.mmlu}</TableTd>
      <TableTd>{data.truthful}</TableTd>
      <TableTd>{data.winogrande}</TableTd>
      <TableTd>{data.gsm8k}</TableTd>
      <TableTd>{data.usage}</TableTd>
    </tr>
  );
}
