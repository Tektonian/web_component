import React from "react";
import * as Select from "@radix-ui/react-select";
import { Controller } from "react-hook-form";

export interface SelectInputProps {
    control: any;
    name: string;
    label: string;
    options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
    control,
    name,
    label,
    options,
}) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <div>
                <label>{label}</label>
                <Select.Root value={field.value} onValueChange={field.onChange}>
                    <Select.Trigger
                        aria-label={name}
                        className="select-trigger"
                    >
                        <Select.Value placeholder="Select an option" />
                        <Select.Icon />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content className="select-content">
                            <Select.Viewport>
                                {options.map((option) => (
                                    <Select.Item
                                        key={option}
                                        value={option}
                                        className="select-item"
                                    >
                                        <Select.ItemText>
                                            {option || "None"}
                                        </Select.ItemText>
                                    </Select.Item>
                                ))}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
        )}
    />
);

export default SelectInput;
