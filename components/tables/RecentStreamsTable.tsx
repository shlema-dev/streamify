"use client";

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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ListFilter, File } from "lucide-react";
import { useState, useMemo } from "react";
import useFetch from "@/app/api/useFetch";
import SkeletonRecentStreams from "./SkeletonRecentStreams";

export default function RecentStreamsTable() {
  const {
    data: recentStreams,
    isPending,
    error,
  } = useFetch("http://localhost:8000/recentStreams");

  const [sortType, setSortType] = useState<"date" | "count">("date");
  const [filters, setFilters] = useState({
    artist: true,
    songName: true,
  });
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedAndFilteredStreams = useMemo(() => {
    if (!recentStreams) return [];

    let sorted = [...recentStreams].sort((a, b) => {
      if (sortType === "date") {
        return (
          new Date(b.dateStreamed).getTime() -
          new Date(a.dateStreamed).getTime()
        );
      } else {
        return b.streamCount - a.streamCount;
      }
    });

    return sorted.filter((stream) => {
      if (filters.artist && filters.songName) return true;
      if (filters.artist) return stream.artist;
      if (filters.songName) return stream.songName;
      return false;
    });
  }, [recentStreams, sortType, filters]);

  const totalPages = Math.ceil(sortedAndFilteredStreams.length / itemsPerPage);

  const paginatedStreams = useMemo(() => {
    return sortedAndFilteredStreams.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [sortedAndFilteredStreams, currentPage, itemsPerPage]);

  if (isPending) return <SkeletonRecentStreams />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full mt-8">
      <h1 className="text-2xl font-bold mb-6">Recent Streams</h1>
      <Tabs
        value={sortType}
        onValueChange={(value) => setSortType(value as "date" | "count")}
      >
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="date">Date</TabsTrigger>
            <TabsTrigger value="count">Count</TabsTrigger>
          </TabsList>

          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.artist}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({ ...prev, artist: checked }))
                  }
                >
                  Artist
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.songName}
                  onCheckedChange={(checked) =>
                    setFilters((prev) => ({ ...prev, songName: checked }))
                  }
                >
                  Song name
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
        <TabsContent value={sortType}>
          <Card x-chunk="dashboard-05-chunk-3" className="border-none mt-4">
            <CardHeader className="px-7">
              <CardTitle>Most recent streams on platform</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-primary">Date</TableHead>

                    {filters.artist && (
                      <TableHead
                        className={`${
                          filters.artist
                            ? filters.songName
                              ? "hidden sm:table-cell"
                              : "table-cell"
                            : "hidden sm:table-cell"
                        } text-primary`}
                      >
                        Artist
                      </TableHead>
                    )}
                    {filters.songName && (
                      <TableHead className="text-primary">Song</TableHead>
                    )}

                    <TableHead className="text-primary">Count</TableHead>
                    <TableHead className="text-right text-primary">
                      User Id
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedStreams.map((stream, index) => {
                    return (
                      <TableRow
                        key={index}
                        className="bg-accent border-b border-primary/20"
                      >
                        <TableCell>
                          <div className="font-medium">
                            {stream.dateStreamed}
                          </div>
                        </TableCell>
                        {filters.artist && (
                          <TableCell
                            className={`${
                              filters.artist
                                ? filters.songName
                                  ? "hidden sm:table-cell"
                                  : "table-cell"
                                : "hidden sm:table-cell"
                            }`}
                          >
                            {stream.artist}
                          </TableCell>
                        )}
                        {filters.songName && (
                          <TableCell className="table-cell">
                            {stream.songName}
                          </TableCell>
                        )}

                        <TableCell className="">{stream.streamCount}</TableCell>
                        <TableCell className="text-right">
                          {stream.userId}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <span className="sr-only sm:not-sr-only">
                  Items per page: {itemsPerPage}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={itemsPerPage === 5}
                onCheckedChange={() => {
                  setItemsPerPage(5);
                  setCurrentPage(1);
                }}
              >
                5
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={itemsPerPage === 10}
                onCheckedChange={() => {
                  setItemsPerPage(10);
                  setCurrentPage(1);
                }}
              >
                10
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={"outline"}
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            size="sm"
            variant={"outline"}
            className="border-primary/60 hover:bg-primary/10"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
