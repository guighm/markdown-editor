import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import React from "react";

const Toolbar = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Root>) => {
    return (
        <ToolbarPrimitive.Root className={className} {...props} />
    )
}

const ToolbarButton = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Button>) => {
    return (
        <ToolbarPrimitive.Button className={className} {...props} />
    )
}

const ToolbarSeparator = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Separator>) => {
    return (
        <ToolbarPrimitive.Separator className={className} {...props} />
    )
}

const ToolbarLink = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Link>) => {
    return (
        <ToolbarPrimitive.Link className={className} {...props} />
    )
}

const ToolbarToggleGroup = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup>) => {
    return (
        <ToolbarPrimitive.ToggleGroup className={className} {...props} />
    )
}

const ToolbarToggleItem = ({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem>) => {
    return (
        <ToolbarPrimitive.ToggleItem className={className} {...props} />
    )
}

export {
    Toolbar,
    ToolbarButton,
    ToolbarSeparator,
    ToolbarLink,
    ToolbarToggleGroup,
    ToolbarToggleItem
}