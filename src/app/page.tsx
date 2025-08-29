import Image from "next/image";

const TweetButton = () => {
	const tweetText = "怖がらせましょう！\n";
	const siteUrl = "https://kowagarasema.show";
	const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(siteUrl)}`;

	return (
		<a
			href={tweetUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-blue-600"
		>
			<svg
				className="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
			ツイートする
		</a>
	);
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-8">
			<Image
				src="/shark.jpeg"
				alt="サメ"
				width={500}
				height={500}
				className="object-contain"
			/>
			<TweetButton />
		</div>
	);
}
