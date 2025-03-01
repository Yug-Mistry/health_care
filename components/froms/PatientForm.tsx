"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";

export enum FormFieldTypes {
	INPUT = "input",
	TEXTAREA = "textarea",
	PHONE = "phone",
	EMAIL = "email",
	CHECKBOX = "checkbox",
	RADIO = "radio",
	DATEPICKER = "datepicker",
	SELECT = "select",
	SKELETON = "skeleton",
}

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});

const PatientForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-6 flex-1'>
				<section className='mb-12 space-y-4'>
					<h1>Hi There👋</h1>
					<p className='text-dark-700'>
						Schedule your first appointment with us today.
					</p>
				</section>

				<CustomFormField
					formfieldtype={FormFieldTypes.INPUT}
					control={form.control}
					name='username'
					label='Username'
					placeholder='shadcn'
					description='This is your public display name.'
					iconSrc={""}
					iconAlt={""}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
};

export default PatientForm;
