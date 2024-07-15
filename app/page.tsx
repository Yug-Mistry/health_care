// Code: health_care

import PatientForm from "@/components/froms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className=' flex h-screen max-h-screen'>
			<section className=' remove-scrollbar container my-auto '>
				<div className='mx-auto max-w-[496px]'>
					<Image
						src='/assets/icons/logo-full.svg'
						alt='Health Care'
						width={1000}
						height={1000}
						className='h-10 w-fit mb-12'
					/>

					<PatientForm />

					<div className='text-center mt-8 justify-between flex text-14-regular'>
						<p className='justify-items-end text-dark-600 xl:text-left'>
							© 2024 Health Care. All rights reserved.
						</p>
						<Link
							href='/?admin=true'
							className=' text-green-500 '>
							Admin
						</Link>
					</div>
				</div>
			</section>
			<Image
				src='/assets/images/onboarding-img.png'
				alt='Doctor'
				width={1000}
				height={1000}
				className='side-img max-w-[50%]'
			/>
		</div>
	);
}
