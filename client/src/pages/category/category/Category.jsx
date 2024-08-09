import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
const Category = () => {
	return (
		<div className="max-w-screen-xl mx-auto px-2">
			<Sheet>
				<SheetTrigger className="flex lg:hidden">Filter</SheetTrigger>
				<SheetContent side="left" className="flex lg:hidden">
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<div>
				<div className="flex">
					<div className="hidden lg:flex bg-red-500 h-96 flex-grow basis-[20%]">
						<section>
							<Accordion type="single" collapsible>
								<AccordionItem value="item-1">
									<AccordionTrigger>Is it accessible?</AccordionTrigger>
									<AccordionContent>
										Yes. It adheres to the WAI-ARIA design pattern.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</section>
					</div>
					<div className="bg-green-500 h-96 flex-grow basis-[80%]"></div>
				</div>
			</div>
		</div>
	);
};

export default Category;
