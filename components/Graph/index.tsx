import { FC, SVGProps } from 'react';

const Graph: FC<SVGProps<SVGSVGElement>> = ({ color = '#333333', ...props }) => {
    return (
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' color={color} {...props}>
            <defs>
                <pattern id='smallGrid' width='32' height='32' patternUnits='userSpaceOnUse'>
                    <path d='M 32 0 L 0 0 0 32' fill='none' stroke='currentColor' strokeWidth='0.5'/>
                </pattern>
                <pattern id='grid' width='160' height='160' patternUnits='userSpaceOnUse'>
                    <rect width='160' height='160' fill='url(#smallGrid)'/>
                    <path d='M 160 0 L 0 0 0 160' fill='none' stroke='currentColor' strokeWidth='1'/>
                </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
    );
};

export default Graph;