import type { Theme } from "theme-ui";

const theme: Theme = {
	breakpoints: ["40em", "64em"],
	space: [0, 8, 16, 32, 64, 128, 256],
	fontSizes: [13, 16, 21, 25, 33, 49, 65, 97],
	fonts: {
		body: '"Open Sans", sans-serif',
		heading: '"Barlow", sans-serif',
		headingAlt: '"Barlow Condensed", sans-serif',
	},
	sizes: {
		normal: "840px",
		tight: "640px",
	},
	fontWeights: {
		body: 400,
		heading: 900,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: "1em",
	},
	letterSpacings: {
		body: "normal",
	},
	colors: {
		primary: "#ed1685",
		accent: "#e5ff37",
		white: "#fff",
		text: "#020310",
	},
	buttons: {
		primary: {
			/* boxShadow: "5px 6px #020310", */
			borderRadius: 0,
		},
	},
	styles: {
		h2: {
			borderTop: "4px solid",
			borderColor: "text",
			backgroundImage:
				"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABVJREFUGFdjZGBg8GVgYNjMyAABvgALrgFQQ0xB3AAAAABJRU5ErkJggg==)",
			backgroundRepeat: "repeat",
			pl: 2,
			lineHeight: "1em",
			fontSize: 4,
		},
		root: {
			color: "text",
			"h2,h3,h4,h5": {
				fontFamily: "heading",
				lineHeight: "1em",
				py: 2,
			},
			h1: {
				fontFamily: "headingAlt",
				color: "primary",
			},
			h2: {
				fontSize: ["6vw", 5],
			},
			h3: {
				display: "inline-block",
				fontSize: "2.5vw",
				my: 0,
				pb: 0,
				"&:after": {
					content: `''`,
					backgroundColor: "accent",
					height: ".6em",
					width: "103%",
					display: "block",
					mt: "-.4em",
					ml: ".3em",
				},
			},
			".accordion": {
				h3: {
					backgroundImage:
						"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABVJREFUGFdjZGBg8GVgYNjMyAABvgALrgFQQ0xB3AAAAABJRU5ErkJggg==)",
					backgroundRepeat: "repeat",
					display: "block",

					pt: 0,
					button: {
						cursor: "pointer",
						fontSize: "2vw",
						fontFamily: "heading",
						background: "none",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						pl: 2,
						svg: {
							width: "2em",
						},
					},
					"&:after": {
						height: ".1em",
						display: "none",
					},
				},
			},
		},
	},
};
export default theme;