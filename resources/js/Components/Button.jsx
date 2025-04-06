import React from "react";


/**
 * Button component with various styles and sizes
 *
 * @param {Object} props
 * @param {string} props.variant - primary, secondary, success, danger, warning, info
 * @param {string} props.size - sm, md, lg
 * @param {boolean} props.outline - Whether to use outline style
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {string} props.className - Additional classes
 * @param {function} props.onClick - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.type - Button type (button, submit, reset)
 */
const Button = ({
    variant = "primary",
    size = "md",
    outline = false,
    disabled = false,
    className = "",
    onClick,
    children,
    type = "button",
    ...rest
}) => {
    // Base classes for all buttons
    const baseClasses =
        "font-medium rounded focus:outline-none transition-colors";

    // Size classes
    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    };

    // Variant classes for filled buttons
    const variantClasses = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-300",
        secondary:
            "bg-gray-600 hover:bg-gray-700 text-white focus:ring-2 focus:ring-gray-300",
        success:
            "bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-300",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-2 focus:ring-red-300",
        warning:
            "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-2 focus:ring-yellow-300",
        info: "bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-2 focus:ring-cyan-300",
    };

    // Variant classes for outline buttons
    const outlineClasses = {
        primary:
            "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300",
        secondary:
            "border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300",
        success:
            "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-2 focus:ring-green-300",
        danger: "border border-red-600 text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-300",
        warning:
            "border border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-2 focus:ring-yellow-300",
        info: "border border-cyan-500 text-cyan-500 hover:bg-cyan-50 focus:ring-2 focus:ring-cyan-300",
    };

    // Disabled state
    const disabledClasses = "opacity-60 cursor-not-allowed";

    // Combine all the classes
    const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.md}
    ${
        outline
            ? outlineClasses[variant] || outlineClasses.primary
            : variantClasses[variant] || variantClasses.primary
    }
    ${disabled ? disabledClasses : ""}
    ${className}
  `.trim();

    return (
        <button
            type={type}
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
