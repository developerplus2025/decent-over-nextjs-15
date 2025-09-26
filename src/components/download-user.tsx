"use client";
import React from "react";
import { redirect, useRouter } from "next/navigation";
function DownloadUser() {
  const router = useRouter();
  const handleClick = async () => {
    // Chuyển trang và chờ quá trình chuyển hoàn tất
    await router.push(
      "/downloads/libre_desktop_version_11.9.4_free_windows.exe",
    );
  };
}

export default DownloadUser;
