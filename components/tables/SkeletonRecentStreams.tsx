import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { ListFilter, File } from "lucide-react";

const SkeletonRecentStreams = () => {
  return (
    <div className="w-full mt-8 animate-pulse">
      <h1 className="text-2xl font-bold mb-6 bg-popover/50 h-8 w-48 rounded"></h1>
      <Tabs defaultValue="date">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger
              value="date"
              className="bg-popover/50 text-transparent"
            >
              Date
            </TabsTrigger>
            <TabsTrigger
              value="count"
              className="bg-popover/50 text-transparent"
            >
              Count
            </TabsTrigger>
          </TabsList>

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 gap-1 text-sm bg-popover/50"
            >
              <ListFilter className="h-3.5 w-3.5 text-transparent" />
              <span className="sr-only sm:not-sr-only text-transparent">
                Filter
              </span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-sm bg-popover/50"
            >
              <File className="h-3.5 w-3.5 text-transparent" />
              <span className="sr-only sm:not-sr-only text-transparent">
                Export
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value="date">
          <Card className="border-none mt-4">
            <CardHeader className="px-7">
              <CardTitle className="bg-popover/50 h-6 w-64 rounded"></CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-popover/50 h-6 w-20 rounded"></TableHead>
                    <TableHead className="bg-popover/50 h-6 w-24 rounded hidden sm:table-cell"></TableHead>
                    <TableHead className="bg-popover/50 h-6 w-24 rounded"></TableHead>
                    <TableHead className="bg-popover/50 h-6 w-16 rounded"></TableHead>
                    <TableHead className="bg-popover/50 h-6 w-16 rounded text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, index) => (
                    <TableRow
                      key={index}
                      className="bg-accent border-b border-primary/20"
                    >
                      <TableCell>
                        <div className="bg-popover/50 h-5 w-24 rounded"></div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="bg-popover/50 h-5 w-32 rounded"></div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-popover/50 h-5 w-32 rounded"></div>
                      </TableCell>
                      <TableCell>
                        <div className="bg-popover/50 h-5 w-16 rounded"></div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="bg-popover/50 h-5 w-8 rounded ml-auto"></div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-7 gap-1 text-sm bg-popover/50 text-transparent"
          >
            Items per page: 5
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-popover/50 text-transparent"
          >
            Previous
          </Button>
          <span className="text-sm bg-popover/50 h-5 w-24 rounded"></span>
          <Button
            size="sm"
            variant="outline"
            className="bg-popover/50 text-transparent"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkeletonRecentStreams;
