"use client";

import { motion } from "framer-motion";
import { useSearch } from "fumadocs-ui/components/dialog/search";
import {
	Lightbulb,
	Medal,
	NotebookText,
	Podcast,
	Share2,
	WifiOff,
} from "lucide-react";
import {Link} from '@/i18n/navigation'
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import UserButtonClient from "./UserButtonClient";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";

// const UserButton = dynamic(() => import("./UserButtonClient"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

type NavigationProps = {
	className?: string;
	children: React.ReactNode;
};
export default function Navigation({
	className,
}: NavigationProps): React.ReactElement {
	const pathname = usePathname();
	const isWebfilmPath = pathname === "/webfilm";
	const isWebAppPath = pathname === "/webapp";
	const isDocsPath = pathname === "/docs";
	const isAi = pathname === "/ai";
	const isChatV2 = pathname === "/chat-v2";
	const isHelp = pathname === "/help";
	const isDocs = pathname === "/docs";
	const isGuides = pathname === "/guides";
	const isSignIn = pathname === "/signin";
	const isCreative = pathname === "/creative";
	const isGeneration = pathname === "/generation";
	const isDesign = pathname === "/design";

	const [isScrolled, setIsScrolled] = useState(false);

	
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(
				window.scrollY > 60 ||
					window.scrollY + window.innerHeight >=
						document.documentElement.scrollHeight,
			);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const t = useTranslations('Navigation');
	return (
		<motion.div
			// initial={{ opacity: 0, y: -20 }}
			// animate={{ opacity: 1, y: 0 }}
			// transition={{ duration: 0.5, ease: "easeOut" }}
			className={`${
				isWebfilmPath ||
				isWebAppPath ||
				isAi ||
				isChatV2 ||
				isSignIn ||
				isGuides ||
				isDocs ||
				isHelp ||
				isDesign ||
				pathname.startsWith("/docs")
					? "webfilm-class"
					: ""
			} ${className} sticky top-0 z-20`}
		>
			<nav className="relative z-4 px-[2rem] pt-[1rem] shrink-0 items-center justify-center min-[300px]:hidden sm:hidden md:hidden lg:flex xl:flex">
				<nav
					className={`${isScrolled ? "border bg-[#0c0c0c]" : "border"} rounded-xl ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-1 flex w-full items-center justify-between gap-8 bg-white px-8 dark:border-[#292929] dark:bg-[#000000]`}
				>
					<div className="flex h-[58px] w-fit items-center gap-4 text-sm">
						<div className="flex items-center gap-4">
							<Link
								href="/"
								className="mask-logo-animation font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
							>
								Decent
							</Link>
						</div>
						<NavigationMenu>
							<NavigationMenuList className="font-medium">
							
								<NavigationMenuItem className="px-3">
									<NavigationLink
										href="/library"
										
									>
										<div
											
										>
											{t('LibraryLink')}
										</div>
									</NavigationLink>
								</NavigationMenuItem>
								
								<NavigationMenuItem className="px-3">
									<NavigationLink
										href="/creative"
										
									>
										<div
											
										>
											{t('CreativeLink')}
										</div>
									</NavigationLink>
								</NavigationMenuItem>

								<NavigationMenuItem className="px-3">
									<NavigationLink
										href="/pricing"
										
									>
										<div
											
										>
											{t('PricingLink')}
										</div>
									</NavigationLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="px-3">
									<NavigationLink
										href="/blog"
										
									>
										<div
											
										>
											{t('BlogLink')}
										</div>
									</NavigationLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="px-3">
									<NavigationLink
										href="/design"
									
									>
										<div
											
										>
											{t('DesignLink')}
										</div>
									</NavigationLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link
										href="/docs"
										className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
											pathname === "/docs"
												? "dark:text-white"
												: "dark:text-[#9b9b9b]"
										} cursor-pointer transition-colors select-none dark:hover:text-white`}
									>
										{t('DocsLink')}
										{pathname !== "/docs" && (
											<sup>
												<svg
													data-testid="geist-icon"
													height={12}
													strokeLinejoin="round"
													viewBox="0 0 15 15"
													width={12}
													style={{ color: "currentcolor" }}
												>
													<title>Arrow Up Right</title>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
														fill="currentColor"
													/>
												</svg>
											</sup>
										)}
									</Link>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<Link
										href="/radio"
										className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
											pathname === "/radio"
												? "dark:text-white"
												: "dark:text-[#9b9b9b]"
										} cursor-pointer transition-colors select-none dark:hover:text-white`}
									>
										{t('RadioLink')}
										<sup>
											<svg
												data-testid="geist-icon"
												height={12}
												strokeLinejoin="round"
												viewBox="0 0 15 15"
												width={12}
												style={{ color: "currentcolor" }}
											>
												<title>Arrow Up Right</title>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
													fill="currentColor"
												/>
											</svg>
										</sup>
									</Link>
								</NavigationMenuItem>

								
								<NavigationMenuIndicator />
							</NavigationMenuList>
						</NavigationMenu>
					</div>
					<div className="flex items-center gap-4">
						<div className="h-[1.2rem] border-r"></div>

						<UserButtonClient />
					</div>
					<div className="absolute top-0 left-0 z-3 rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
				</nav>
			</nav>
		</motion.div>
	);
}
