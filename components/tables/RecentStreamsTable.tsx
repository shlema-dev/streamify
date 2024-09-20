"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
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
import { useState } from "react";

const recentStreams = [
  {
    songName: "Subtle",
    artist: "Low Key",
    dateStreamed: "2024-09-01",
    streamCount: 123452,
    userId: "1",
  },
  {
    songName: "Ramble",
    artist: "Zed Leppelin",
    dateStreamed: "2024-09-05",
    streamCount: 164574,
    userId: "2",
  },
  {
    songName: "Creator",
    artist: "Big Dawg",
    dateStreamed: "2024-08-20",
    streamCount: 47473,
    userId: "1",
  },
  {
    songName: "Rip Tide",
    artist: "Beach Town",
    dateStreamed: "2024-09-09",
    streamCount: 3772,
    userId: "4",
  },
  {
    songName: "Dreamy Vibes",
    artist: "Luna",
    dateStreamed: "2024-08-10",
    streamCount: 28456,
    userId: "5",
  },
  {
    songName: "Beat the Sun",
    artist: "Sonic Wave",
    dateStreamed: "2024-09-04",
    streamCount: 13457,
    userId: "3",
  },
  {
    songName: "Chillwave",
    artist: "Echoes",
    dateStreamed: "2024-08-31",
    streamCount: 27347,
    userId: "2",
  },
  {
    songName: "Night Drive",
    artist: "Roadtrip",
    dateStreamed: "2024-09-08",
    streamCount: 45741,
    userId: "8",
  },
  {
    songName: "Summer Breeze",
    artist: "Tropix",
    dateStreamed: "2024-08-05",
    streamCount: 84531,
    userId: "9",
  },
  {
    songName: "Lost in Space",
    artist: "Beatz",
    dateStreamed: "2024-09-02",
    streamCount: 135883,
    userId: "6",
  },
  {
    songName: "Funky Groove",
    artist: "The Vibes",
    dateStreamed: "2024-09-10",
    streamCount: 34576,
    userId: "10",
  },
  {
    songName: "Downtown Hustle",
    artist: "City Lights",
    dateStreamed: "2024-08-29",
    streamCount: 234645,
    userId: "11",
  },
  {
    songName: "Ocean Waves",
    artist: "SeaSounds",
    dateStreamed: "2024-09-07",
    streamCount: 23464,
    userId: "7",
  },
  {
    songName: "Street Beats",
    artist: "Block Party",
    dateStreamed: "2024-08-27",
    streamCount: 2774,
    userId: "12",
  },
  {
    songName: "Electro Bounce",
    artist: "Zed",
    dateStreamed: "2024-08-23",
    streamCount: 86546,
    userId: "13",
  },
  {
    songName: "City Life",
    artist: "Uptown",
    dateStreamed: "2024-09-03",
    streamCount: 42457,
    userId: "14",
  },
  {
    songName: "Golden Hour",
    artist: "Sunset",
    dateStreamed: "2024-08-30",
    streamCount: 45689,
    userId: "15",
  },
  {
    songName: "Electric Dreams",
    artist: "Synthwave",
    dateStreamed: "2024-09-06",
    streamCount: 59775,
    userId: "16",
  },
  {
    songName: "Moonlit Road",
    artist: "Nocturne",
    dateStreamed: "2024-08-12",
    streamCount: 53484,
    userId: "17",
  },
  {
    songName: "Festival Lights",
    artist: "DJ Sparks",
    dateStreamed: "2024-08-25",
    streamCount: 35495,
    userId: "18",
  },
];

export default function RecentStreamsTable() {
  const [sortType, setSortType] = useState<"date" | "count">("date");
  const [filters, setFilters] = useState({
    artist: true,
    songName: false,
  });
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedStreams = [...recentStreams].sort((a, b) => {
    if (sortType === "date") {
      return (
        new Date(b.dateStreamed).getTime() - new Date(a.dateStreamed).getTime()
      );
    } else {
      return b.streamCount - a.streamCount;
    }
  });

  const filteredStreams = sortedStreams.filter((stream) => {
    if (filters.artist && filters.songName) return true;
    if (filters.artist) return stream.artist;
    if (filters.songName) return stream.songName;
    return true;
  });

  const totalPages = Math.ceil(filteredStreams.length / itemsPerPage);

  const paginatedStreams = filteredStreams.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                  {paginatedStreams.map((stream) => {
                    return (
                      <TableRow className="bg-accent border-b border-primary/20">
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
