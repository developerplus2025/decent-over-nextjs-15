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

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(locale);

  
  

  return (
   <div></div>
  );
}
