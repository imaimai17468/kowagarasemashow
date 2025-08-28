import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL("https://kowagarasema.show"),
	title: "kowagarasema.show",
	description: "怖がらせましょう！",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	keywords: ["怖がらせましょう"],
	authors: [{ name: "kowagarasema.show" }],
	alternates: {
		canonical: "https://kowagarasema.show",
	},
	icons: {
		icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦈</text></svg>",
	},
	openGraph: {
		title: "kowagarasema.show",
		description: "怖がらせましょう！",
		url: "https://kowagarasema.show",
		siteName: "kowagarasema.show",
		images: [
			{
				url: "/app-ogp.png",
				width: 1200,
				height: 630,
				alt: "kowagarasema.show",
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "kowagarasema.show",
		description: "怖がらせましょう！",
		images: ["/app-ogp.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className="antialiased"
				style={{
					fontFamily:
						'"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, "游ゴシック", YuGothic, sans-serif',
				}}
			>
				{children}
			</body>
		</html>
	);
}
