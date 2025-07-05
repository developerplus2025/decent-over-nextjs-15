'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import { cn } from '@/lib/utils';

export default function LocaleSwitcherSelect()  {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
 const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(locale);
  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }
  
  return (
    <label
      className={clsx(
        '',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-[32px]"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"></path></svg>
        
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={"Search Locale"} className="h-9" />
          <CommandList>
            <CommandEmpty>{t('notFound')}</CommandEmpty>
            <CommandGroup heading={t('label')}>
              {routing.locales.map((cur) => (
              <CommandItem
              key={cur}
              value={cur}
              onSelect={() => {
                onSelectChange(cur); // ✅ truyền đúng giá trị locale
                setValue(cur);
                setOpen(false);
              }}
            >
              {t('locale', { locale: cur })}
              <Check
                className={cn(
                  'ml-auto h-4 w-4',
                  value === cur ? 'opacity-100' : 'opacity-0'
                )}
              />
            </CommandItem>
            
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
      
    </label>
  );
}