"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldTypes } from "./froms/PatientForm";
import React from "react";
import { Field } from "react-hook-form";

interface CustomProps {
	formfieldtype: FormFieldTypes;
	control: any;
	name: string;
    label?: string;
    placeholder?: string;
    description?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode; 
    renderSkeleton?: ( field : any) => React.ReactNode;
}

const RenderInput = () => {
    return (
        <Input 
            type='text'
            placeholder='shadcn'
            className='w-full'
        />
    )

const CustomFormField = ({
	formfieldtype,
	control,
	name,
    label,
}: CustomProps) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='flex-1'>
					{formfieldtype === FormFieldTypes.INPUT && label && (
						<FormLabel htmlFor={name}>{label}</FormLabel>
					)}

				</FormItem>
			)}
		/>
	);
};

export default CustomFormField;
