"use client"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useRouter } from "next/navigation";

import { parseAsInteger, useQueryState } from 'nuqs';
import React, { useEffect } from "react";
const Data = [
  {
    rank: 1,
    name: 1,
  },
  {
    rank: 1,
    name: 2,
  },
  {
    rank: 1,
    name: 3,
  },
  {
    rank: 2,
    name: 1,
  },
  {
    rank: 2,
    name: 2,
  },
  {
    rank: 2,
    name: 3,
  },
  {
    rank: 3,
    name: 1,
  },
  {
    rank: 3,
    name: 2,
  },
  {
    rank: 3,
    name: 3,
  },
];
const PaginationItems = [
  {
    rank: 1,
  },
  {
    rank: 2,
  },
  {
    rank: 3,
  },
];
function ServerPage() {
    const router = useRouter();
    const [rank, setRank] = useQueryState(
      "page",
      parseAsInteger.withDefault(1),
    );
    useEffect(() => {}, [rank]);
    return (
      <div className="mb-[3rem] flex flex-col gap-[6rem]">
        <div className="grid grid-cols-3 place-items-center justify-items-center gap-[2rem]">
          {Data.filter((data) => data.rank === rank).map((data) => (
            <div
              key={`${data.rank}-${data.name}`}
              className="border-input flex h-[400px] w-[400px] items-center justify-center rounded-xl border bg-[#0c0c0c]"
            >
              <p className="text-6xl">{data.name}</p>
            </div>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setRank(Math.max(1, rank - 1))}
                aria-disabled={rank <= 1}
                className={
                  rank <= 1
                    ? "pointer-events-none cursor-pointer opacity-50"
                    : ""
                }
              />
            </PaginationItem>
            {PaginationItems.map((data) => (
              <PaginationItem className="cursor-pointer" key={data.rank}>
                <PaginationLink
                  isActive={data.rank == rank ? true : false}
                  onClick={() =>
                    router.push(`/server?page=${String(data.rank)}`)
                  }
                >
                  {data.rank}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                aria-disabled={rank >= PaginationItems.length}
                onClick={() =>
                  setRank(Math.min(PaginationItems.length, rank + 1))
                }
                className={
                  rank >= PaginationItems.length
                    ? "pointer-events-none cursor-pointer opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
}

export default ServerPage