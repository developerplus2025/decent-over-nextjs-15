// components/DownloadButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Wind } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DownloadButton: React.FC = () => {
  const router = useRouter();
  const [downloadReady, setDownloadReady] = useState(false);
  const t = useTranslations('ButtonText');
 
  const handleClick = async () => {
    // Chuyển trang và chờ quá trình chuyển hoàn tất
    await router.push("/docs/user-win-download");
    setDownloadReady(true);
  };
  return (
    <Button className="" variant={"outline"} onClick={handleClick}>
      <ArrowDownToLine className="mr-2 h-4 w-4" />
    {t('DownloadText')}
    </Button>
  );
};

export default DownloadButton;
