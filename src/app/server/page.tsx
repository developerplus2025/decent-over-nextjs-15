"use client"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useRouter } from "next/router";
import { parseAsInteger, useQueryState } from 'nuqs';
import React from 'react'
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
    return (
      <div className="mb-[3rem] flex flex-col gap-[6rem]">
        <div className="grid grid-cols-3 place-items-center justify-items-center gap-[2rem]">
          {Data.map(
            (data) =>
              data.rank == Number(rank) && (
                <div
                  key={data.rank}
                  className="border-input flex h-[400px] w-[400px] items-center justify-center rounded-xl border bg-[#0c0c0c]"
                >
                  <p className="text-3xl">{data.name}</p>
                </div>
              ),
          )}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => setRank(Number(rank) - 1)} />
            </PaginationItem>
            {PaginationItems.map((data) => (
              <PaginationItem key={data.rank}>
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
              <PaginationNext onClick={() => setRank(Number(rank) + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
}

export default ServerPage