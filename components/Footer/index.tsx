import React from "react";
import { useTheme } from '../../context/ThemeContextProvider';

export default function Footer() {
	const { theme } = useTheme()
	return (
		<div className="flex flex-col items-center justify-center py-2" style={theme}>
			<footer className="flex items-center justify-center w-full h-24">
				<h2 className="text-center text-2xl font-black mt-5">
					That's all for now :)
				</h2>
			</footer>
		</div>
	)
}