// app/admin/columns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Report } from '@/types'
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "createdAt",
    //header: "created At",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
  },
    cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        return <div>{date.toLocaleString('en-IN', {year: 'numeric',month: 'numeric',day: 'numeric',hour: '2-digit',minute: '2-digit',hour12: false})}</div>
    }
},   
  {
    accessorKey: "updatedAt",
    //header: "Updated At",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
  },
    cell: ({ row }) => {
        const date = new Date(row.getValue("updatedAt"))
        return <div>{date.toLocaleString('en-IN', {year: 'numeric',month: 'numeric',day: 'numeric',hour: '2-digit',minute: '2-digit',hour12: false})}</div>
    }
},  
  {
        accessorKey: "shipName",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Ship's Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        //header: "Ship's Name",

    },
    {
        accessorKey: "imoNumber",
        header: "IMO No.",
    },
    {
        accessorKey: "incidentCategory",
        header: "Category",
    },
    {
        accessorKey: "incidentDate",
        header: "Incident Date",
        cell: ({ row }) => {
            const date = new Date(row.getValue("incidentDate"))
            return <div>{date.toLocaleDateString()}</div>
        }
    },

    {
      accessorKey: "flag",
      header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Flag
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
      },
      //header: "Flag",

  },
    {
        accessorKey: "deaths",
        header: "Deaths",
        cell: ({ row }) => {
            const deaths = row.getValue("deaths") as number
            return <Badge variant={deaths > 0 ? "destructive" : "secondary"}>{deaths}</Badge>
        }
    },
    {
        accessorKey: "injured",
        header: "Injured",
        cell: ({ row }) => {
            const injured = row.getValue("injured") as number
            return <Badge variant={injured > 0 ? "default" : "secondary"} className={injured > 0 ? "bg-yellow-500" : ""}>{injured}</Badge>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const report = row.original
   
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                    <Link href={`/admin/${report.id}`}>View Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={`/admin/${report.id}/edit`}>Edit Report</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    },
]