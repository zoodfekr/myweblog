// components/common/Table.tsx
import React from "react";

type Column<T> = {
    key: keyof T | string;
    header: string;
    render?: (row: T) => React.ReactNode; // برای کنترل نمایش سفارشی
    className?: string;
};

type Action<T> = {
    label: string;
    icon: React.ReactNode;
    onClick: (row: T) => void;
};

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    actions?: Action<T>[];
    onRowClick?: (row: T) => void;
}

export default function DataTable<T>({
    data,
    columns,
    actions,
    onRowClick,
}: TableProps<T>) {
    return (
        <div className="bg-stone-900/95 shadow p-6 rounded-lg">
            <table className="w-full text-right border-collapse">
                <thead>
                    <tr className="bg-green-50 text-green-800">
                        {columns.map((col) => (
                            <th key={col.key.toString()} className="px-4 py-2">
                                {col.header}
                            </th>
                        ))}
                        {actions && <th className="px-4 py-2">عملگر</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr
                            key={idx}
                            className="hover:bg-purple-500/10 border-b cursor-pointer"
                            onClick={() => onRowClick && onRowClick(row)}
                        >
                            {columns.map((col, index) => (

                                <td
                                    key={col.key.toString()}
                                    className={`px-4 py-2 ${col.className || ""}`}
                                >
                                    {col.render ? col.render(row) : (row as any)[col.key]}
                                </td >

                            ))}

                            {actions && (
                                <td className="flex gap-2 px-4 py-2 font-semibold text-green-700">
                                    {actions.map((action, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                action.onClick(row);
                                            }}
                                            className="hover:bg-green-100/10 p-1 rounded"
                                        >
                                            {action.icon}
                                        </button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
