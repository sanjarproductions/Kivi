"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag('config', 'G-BL2SHMX3X0', {
                page_path: url,
            });
        };

        router.events?.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events?.off("routeChangeComplete", handleRouteChange);
        };
    }, [router]);

    return (
        <>
            {/* Google Tag Manager */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-BL2SHMX3X0"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BL2SHMX3X0');
          `,
                }}
            />
            {children}
        </>
    );
}
