import React from "react"

const DollarIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<rect width="24" height="24" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_687_1049" transform="scale(0.00195312)" />
				</pattern>
				<image
					id="image0_687_1049"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	)
}

export default DollarIcon