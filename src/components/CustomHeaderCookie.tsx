"use client";
import * as CookieBanner from "@c15t/react/cookie-banner";
import { Button } from "./ui/button";

 
export default function CustomAcceptButton()  {
  return (
    <CookieBanner.Root theme={{
      "banner.card": "dark:!bg-black bg-white",
      "banner.header.root": "dark:!bg-black bg-white",
      "banner.footer": "dark:!bg-black bg-white",
    }}>
			<CookieBanner.Card>
      <CookieBanner.Header >
        <CookieBanner.Title className="flex justify-between items-center">We value your privacy <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z"></path></svg></CookieBanner.Title>
     <CookieBanner.Description className=""> We use cookies and similar technologies to help personalize
                content, tailor and measure ads, and provide a better
                experience. By clicking accept, you agree to this, as outlined
                in our Cookie Policy.</CookieBanner.Description>
    </CookieBanner.Header>
				<CookieBanner.Footer>
					<CookieBanner.FooterSubGroup>
						<CookieBanner.RejectButton themeKey="banner.footer.reject-button"><Button>Decline All</Button></CookieBanner.RejectButton>
						<CookieBanner.CustomizeButton themeKey="banner.footer.customize-button"><Button>Preferences</Button></CookieBanner.CustomizeButton>
					</CookieBanner.FooterSubGroup>
					<CookieBanner.AcceptButton themeKey="banner.footer.accept-button"><Button>Accept All</Button></CookieBanner.AcceptButton>
				</CookieBanner.Footer>
			</CookieBanner.Card>
		</CookieBanner.Root>
  
  );
};