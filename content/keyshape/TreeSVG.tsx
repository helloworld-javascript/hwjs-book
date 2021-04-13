import React from 'react'
import LazySVG from './LazySVG'

const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 406" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" style="white-space: pre;">
    <g>
        <path d="M0,0L-45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(320,66.834) scale(1.34818,1.34818)"/>
        <path d="M0,0L-45,67.3334" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(259.332,157.611) scale(1.34818,1.34818)"/>
        <path d="M0,0L45,67.3334" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(259.332,157.611) scale(1.34818,1.34818)"/>
        <path d="M0,0L45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(320,66.834) scale(1.34818,1.34818)"/>
        <path d="M0,0L45,67.3334" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(380.668,157.611) scale(1.34818,1.34818)"/>
        <path d="M0,0L-45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(441.336,248.389) scale(1.34818,1.34818)"/>
        <path d="M0,0L45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(441.336,248.389) scale(1.34818,1.34818)"/>
        <path d="M0,0L-45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(198.664,248.389) scale(1.34818,1.34818)"/>
        <path d="M0,0L45,67.3333" stroke="#dee2e6" fill="none" stroke-linecap="square" stroke-width="5" transform="translate(198.664,248.389) scale(1.34818,1.34818)"/>
    </g>
    <g>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(333.482,80.3158) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(272.814,171.093) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(212.146,261.87) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(333.482,261.87) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(454.818,261.87) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(151.478,352.648) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(272.814,352.648) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(394.15,352.648) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(515.486,352.648) scale(1.34818,1.34818) translate(-10,-10)"/>
        <ellipse rx="22.5" ry="22.5" fill="#868e96" stroke="none" transform="translate(394.15,171.093) scale(1.34818,1.34818) translate(-10,-10)"/>
    </g>
</svg>
`

export default function TreeSVG() {
  return <LazySVG svgString={svgString} />
}
