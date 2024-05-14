import * as React from "react";

export interface TableTdProps extends React.ComponentPropsWithoutRef<"td"> {}

export default function TableTd({ children, ...rest }: TableTdProps) {
  return (
    <td className="px-4 py-2 text-left" {...rest}>
      {children}
    </td>
  );
}
