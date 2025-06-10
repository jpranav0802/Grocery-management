import { motion } from 'framer-motion';

export function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center">
            <motion.div
                className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
} 