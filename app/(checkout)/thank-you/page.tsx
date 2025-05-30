"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
	return (
		<div className="flex flex-col gap-10 pt-10">
			<div className="flex flex-col gap-4">
				<p className="text-2xl font-bold text-primary">Thank you!</p>
				<h1 className="text-5xl font-bold">Your order is on the way!</h1>
				<p className="text-2xl text-gray-500">
					We&apos;sve received your order and now processing it.
				</p>
			</div>
			<p className="flex gap-1 text-xl font-bold">
				Go back to{" "}
				<Link className="flex items-center underline" href={"/"}>
					{" "}
					home page <ArrowRight />
				</Link>
			</p>
		</div>
	);
}
