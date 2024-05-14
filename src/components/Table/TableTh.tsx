import * as React from "react";

export interface TableThProps extends React.ComponentPropsWithoutRef<"th"> {}

export default function TableTh({ children, ...rest }: TableThProps) {
  return (
    <th className="px-4 py-2 text-left" {...rest}>
      {children}
    </th>
  );
}
