import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";

function AddPropertiesSetup() {
    return (
        <div className="grid gap-4 w-full">
            <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-start">
                    Name
                </label>
                <Input id="name" placeholder="John Doe" className="w-full"/>
            </div>
            <div className="grid gap-2">
                <label htmlFor="address" className="text-sm font-medium text-start">
                    Address
                </label>
                <Textarea
                    id="address"
                    placeholder="123 Main St, Anytown USA"
                    className="w-full"
                />
            </div>
        </div>
    );
}

export default AddPropertiesSetup;