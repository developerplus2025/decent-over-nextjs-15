"use client"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
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
   const [rank, setRank] = useQueryState("page", parseAsInteger.withDefault(1));
   return (
     <div className="flex flex-col gap-[6rem]">
       <div className="grid grid-cols-3 place-items-center justify-items-center">
         {Data.map(
           (data) =>
             data.name == Number(rank) && (
               <div
                 key={data.rank}
                 className="border-input h-[400px] w-[400px] rounded-xl border bg-[#0c0c0c]"
               >
                 {data.name}
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
               <PaginationLink href={`/server?page=${String(data.rank)}`}>
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