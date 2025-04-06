
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Indian flag inspired colors
				india: {
					saffron: '#FF8C00', // More vibrant saffron
					white: '#FFFFFF',
					green: '#008F39', // Richer green
					navyBlue: '#0C2461', // Deeper navy blue
					ashoka: '#1E3799', // Deeper blue for Ashoka chakra
					accent1: '#FFA000', // Accent colors for UI elements
					accent2: '#1A237E',
					accent3: '#2C3E50',
					lightBg: '#F8FAFC', // Light background
					darkBg: '#1A202C'  // Dark background
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'border-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: 1,
						boxShadow: '0 0 5px rgba(255, 140, 0, 0.5)'
					},
					'50%': { 
						opacity: 0.8,
						boxShadow: '0 0 20px rgba(255, 140, 0, 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'border-rotate': 'border-rotate 3s linear infinite',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				devanagari: ['Noto Sans Devanagari', 'sans-serif']
			},
			backgroundImage: {
				'india-gradient': 'linear-gradient(to bottom, #FF8C00 33%, #FFFFFF 33%, #FFFFFF 66%, #008F39 66%)',
				'hero-pattern': 'radial-gradient(circle at 30% 107%, #0C2461 5%, #1E3799 45%, #273c75 60%, #0c2461 90%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
