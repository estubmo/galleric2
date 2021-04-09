import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { useAsyncSetState } from '../lib/hooks';
import { childrenVariants, containerVariants } from '../utils/variants';

// import styles from './styles.css';

const KEY = {
    backspace: 'Backspace',
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    enter: 'Enter',
    delete: 'Delete'
};

interface IValidationCodeInputProps {
    type?: 'text' | 'number';
    onComplete: (val: string) => void;
    fields?: number;
    isLoading?: boolean;
    fieldWidth?: number;
    fieldHeight?: number;
    disabled?: boolean;
}

export const VerificationCodeInput = ({
    isLoading,
    fieldHeight = 54,
    fieldWidth = 58,
    fields = 6,
    disabled = false,
    onComplete,
    type = 'number'
}: IValidationCodeInputProps): JSX.Element => {
    const INPUT_STYLE = {
        width: fieldWidth,
        height: fieldHeight
    };

    const id = +new Date();

    const [values, setValues] = useState(Array(fields).fill(undefined));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const itemsRef = useRef<Array<HTMLInputElement | null>>(Array(fields).fill(React.createRef()));

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, fields);
    }, [fields]);

    useEffect(() => {
        itemsRef?.current[selectedIndex]?.focus();
        itemsRef?.current[selectedIndex]?.select();
    }, [values, selectedIndex]);

    useEffect(() => {
        const numbers = values.join('');
        if (numbers.length === fields) {
            if (type === 'number') {
                console.log('numbers', numbers);
                if (isNumeric(numbers)) onComplete(numbers);
            }
        }
    }, [values]);

    const changeValue = async (newValue: number | string) => {
        setValues((prev) => {
            const updatedValues = [...prev];
            updatedValues[selectedIndex] = newValue;
            return updatedValues;
        });
    };

    const tryComplete = () => {
        const numbers = values.join('');
        if (numbers.length === fields) {
            if (type === 'number') {
                console.log('numbers', numbers);
                if (isNumeric(numbers)) onComplete(numbers);
            }
        }
    };

    const isNumeric = (value: string) => {
        return /^-?\d+$/.test(value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
        const prevIndex = selectedIndex !== 0 ? selectedIndex - 1 : 0;
        const nextIndex = selectedIndex !== fields - 1 ? selectedIndex + 1 : fields - 1;
        switch (e.key) {
            case KEY.backspace:
                changeValue('');

                setSelectedIndex(prevIndex);
                break;
            case KEY.delete:
                changeValue('');
                break;
            case KEY.up:
            case KEY.left:
                e.preventDefault();
                setSelectedIndex(prevIndex);
                break;
            case KEY.down:
            case KEY.right:
                e.preventDefault();
                setSelectedIndex(nextIndex);
                break;
            default:
                if (type === 'number') {
                    const key = e.key.replace(/[^\d]/gi, '');

                    if (isNumeric(key)) {
                        changeValue(key);
                        setSelectedIndex(nextIndex);
                        tryComplete();
                    }
                }
                break;
        }
    };

    const handleFocus = (index: number) => {
        setSelectedIndex(index);
    };

    const handlePaste: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
        console.log(e.clipboardData.getData('text/plain'));
        const numericClipboardData = e.clipboardData.getData('text/plain').replace(/[^\d]/gi, '');

        if (isNumeric(numericClipboardData)) {
            const array = Array(fields).fill(undefined);
            const splitValues = numericClipboardData.split('');

            for (let i = 0; i < array.length; i++) {
                array[i] = splitValues[i];
            }
            setValues(array);
        }
    };

    return (
        <motion.div variants={containerVariants} className="flex w-full">
            <AnimateSharedLayout>
                {values &&
                    values.map((value, index) => (
                        <motion.div className="mx-1" key={`${id}-${index}`}>
                            <motion.input
                                className="text-center text-gray-100 bg-gray-900 border-b border-gray-400 focus:outline-none"
                                type={type === 'number' ? 'tel' : type}
                                pattern={type === 'number' ? '[0-9]*' : undefined}
                                style={INPUT_STYLE}
                                data-id={index}
                                value={value}
                                ref={(el) => (itemsRef.current[index] = el)}
                                id={id ? `${id}-${index}` : undefined}
                                // eslint-disable-next-line @typescript-eslint/no-empty-function
                                onChange={() => {}}
                                onKeyDown={handleKeyDown}
                                onFocus={() => handleFocus(index)}
                                initial={{
                                    y: 0
                                }}
                                animate={{
                                    y: 0
                                }}
                                exit={{ y: 0, transition: { duration: 0.5 } }}
                                whileFocus={{
                                    y: -2,
                                    transition: {
                                        y: { type: 'spring', stiffness: 100 }
                                    }
                                }}
                                onPaste={handlePaste}
                                disabled={isLoading}
                            />
                            {selectedIndex === index && (
                                <motion.div
                                    layoutId="verifyField"
                                    className="w-full bg-yellow-400 rounded-xl"
                                    style={{ height: 2, y: -2 }}
                                />
                            )}
                        </motion.div>
                    ))}
            </AnimateSharedLayout>
        </motion.div>
    );
};
