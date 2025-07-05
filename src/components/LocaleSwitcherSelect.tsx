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
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {t('label')}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t('search')} className="h-9" />
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
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}