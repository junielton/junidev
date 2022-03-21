import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({})

export default function ThemeContextProvider({ children }) {
	const themes = {
		dark: {
			color: '#f7f6ee',
			background: '#263238',
			inverseColor: '#263238',
			inverseBackground: '#f7f6ee',
		},
		light: {
			color: '#263238',
			background: '#f7f6ee',
			inverseColor: '#f7f6ee',
			inverseBackground: '#263238',
		},
	}
	const [theme, setTheme] = useState(themes.light)

	return (
		<ThemeContext.Provider value={{ themes, theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	const { themes, theme, setTheme } = context as any
	return { themes, theme, setTheme }
}
