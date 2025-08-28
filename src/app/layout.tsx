import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "kowagarasema.show",
	description: "怖がらせましょう！",
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
