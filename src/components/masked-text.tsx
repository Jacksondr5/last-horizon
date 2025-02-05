import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface MaskedTextProps extends Omit<InputProps, "onChange"> {
  mask: string;
  onChange?: (value: string) => void;
  hideInput?: boolean;
  value?: string;
}

const MaskedText = React.forwardRef<HTMLInputElement, MaskedTextProps>(
  ({ mask, onChange, value, hideInput = false, className, ...props }, ref) => {
    const [showInput, setShowInput] = React.useState(!hideInput);

    const format = (val: string) => {
      const numbers = val.replace(/\D/g, "");
      let formatted = mask;

      let numberIndex = 0;
      for (let i = 0; i < mask.length && numberIndex < numbers.length; i++) {
        if (mask[i] === "_") {
          formatted =
            formatted.substring(0, i) +
            numbers[numberIndex] +
            formatted.substring(i + 1);
          numberIndex++;
        }
      }

      return formatted;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      const numbers = val.replace(/\D/g, "");
      const formatted = format(numbers);

      onChange?.(formatted);
    };

    const toggleVisibility = () => {
      setShowInput(!showInput);
    };

    const displayValue = React.useMemo(() => {
      if (showInput) return value ?? mask;

      // Replace all non-mask characters with •
      return (value ?? mask).replace(/[^-() ]/g, "•");
    }, [value, mask, showInput]);

    return (
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          value={displayValue}
          onChange={handleChange}
          className={`${className} ${hideInput ? "pr-10" : ""}`}
        />
        {hideInput && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showInput ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    );
  },
);

MaskedText.displayName = "MaskedText";

export { MaskedText };
