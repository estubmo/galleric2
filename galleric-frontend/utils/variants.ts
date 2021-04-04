export const containerVariants = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.2, duration: 0.5 }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const childrenVariants = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const errorMessageVariant = {
    hidden: {
        opacity: 0,
        y: -10
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
