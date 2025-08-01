import React from "react";
import Text from "./text";
import {cva, cx, type VariantProps} from "class-variance-authority";
import Skeleton from "./skeleton";

export const badgeVariants = cva(
"inline-flex items-center justify-center rounded-full", 
{
    variants: {
        variant: {
            none: "",
            primary: "bg-green-light",
            secondary: "bg-pink-light"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
});

export const badgeSkeletonVariants = cva("", {
    variants: {
        size: {
            sm: "w-6 h-6"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})

export const badgTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-green-dark",
            secondary: "text-pink-dark"
        }
    }
})

interface BadgeProps 
extends React.ComponentProps<"div">, 
VariantProps<typeof badgeVariants>{
    loading?: boolean;
}

export default function Badge({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps) {
    if (loading) {
        return <Skeleton rounded="full" className={cx(
            badgeVariants({variant: "none"}),
            badgeSkeletonVariants({size}),
            className
        )}/>
    }

    return <div className={badgeVariants({variant, size, className})} {...props}>
        <Text variant="body-sm-bold" className={badgTextVariants({variant})}>
            {children}
        </Text>
    </div>
}