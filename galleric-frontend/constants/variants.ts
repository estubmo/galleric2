import { Variants } from 'framer-motion';

export const parentVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            delayChildren: 1,
            duration: 2
        }
    },
    hidden: {
        opacity: 0
    }
};

export const slideFromLeftVariants: Variants = {
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        x: '-50%'
    }
};
export const slideFromRightVariants: Variants = {
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delayChildren: 1.5
        }
    },
    offscreen: {
        opacity: 0,
        x: '50%'
    }
};

export const slideUpTextVariants: Variants = {
    onscreen: { opacity: 1, top: 0, transition: { duration: 1 } },
    offscreen: { opacity: 0, top: 16 }
};
