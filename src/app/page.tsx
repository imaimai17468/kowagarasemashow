import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<Image
				src="/shark.jpeg"
				alt="サメ"
				width={500}
				height={500}
				className="object-contain"
			/>
		</div>
	);
}
