import Head from 'next/head';
import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Switch from "react-switch";
import { useTheme } from '../../context/ThemeContextProvider';
import Link from 'next/link'

export default function Header() {
	const brand = "<juniDev/>"
	const { setTheme, theme, themes } = useTheme()
	const [switchTheme, setSwitchTheme] = useState(false)

	function handleSwithTheme(checked) {
		const currentTheme = checked ? themes.dark : themes.light
		const state = checked ? true : false
		setSwitchTheme(state)
		setTheme(currentTheme)
	}


	return (
		<div className="flex flex-col items-center justify-center py-2" style={theme}>
			<Head>
				<meta name="description"
					content="My personal webpage, introducing myself and promoting a little of what I do in the world of web development, website creation, systems, and programming in general.">
				</meta>
				<title>juniDev - Yep another developer page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="flex w-full md:w-3/5 flex-wrap justify-center md:justify-between items-center my-2">
				<Link href="/">
					<span className="text-2xl font-black cursor-pointer">
						{brand}
					</span>
				</Link>
				<nav className="my-2 flex">
					<a rel="noopener" className="py-2 px-4 mx-3" href="#about">

					</a>
					<Link href="/about">
						<span className="py-2 px-4 mx-3 cursor-pointer">
							About
						</span>
					</Link>
					<Link href="/blog">
						<span className="py-2 px-4 mx-3 cursor-pointer">
							Blog
						</span>
					</Link>
					<div className="flex gap-1 items-center">
						<FiSun />
						<Switch onChange={handleSwithTheme} checked={switchTheme} offColor={theme.color} onColor={theme.color} uncheckedIcon={false} checkedIcon={false} height={20} width={45} offHandleColor={theme.inverseColor} onHandleColor={theme.inverseColor}
						/>
						<FiMoon />
					</div>
				</nav>
			</header>
		</div>

	)
}