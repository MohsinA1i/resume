import { FC } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const blobPaths = [
    'M326.5,331.5Q303,413,218,374Q133,335,121.5,241.5Q110,148,199.5,138.5Q289,129,319.5,189.5Q350,250,326.5,331.5Z',
    'M357,329Q301,408,177.5,400Q54,392,101,284Q148,176,222.5,140.5Q297,105,355,177.5Q413,250,357,329Z',
    'M372,314.5Q292,379,218.5,352.5Q145,326,112,226Q79,126,194,97Q309,68,380.5,159Q452,250,372,314.5Z',
    'M330.5,306.5Q287,363,216.5,344Q146,325,149,252Q152,179,238.5,99.5Q325,20,349.5,135Q374,250,330.5,306.5Z',
];

const Blob: FC<SVGMotionProps<SVGSVGElement>> = (props) => {
    return (
        <motion.svg
            height='40%'
            width='40%'
            viewBox='0 0 500 500'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <motion.path 
                animate={{
                    d: blobPaths
                }}
                transition={{
                    duration: 8,
                    yoyo: Infinity,
                    repeat: Infinity
                }}
                fill='currentColor'
            />
        </motion.svg>
    );
};

export default Blob;