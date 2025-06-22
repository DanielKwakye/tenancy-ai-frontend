import {Input} from "@/components/ui/input.tsx";

function AddTenantsSetup() {
    return (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <label htmlFor="card-number" className="text-sm font-medium text-start">
                    Card Number
                </label>
                <Input
                    id="card-number"
                    placeholder="4111 1111 1111 1111"
                    className="w-full"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <label
                        htmlFor="expiry-date"
                        className="text-sm font-medium text-start"
                    >
                        Expiry Date
                    </label>
                    <Input id="expiry-date" placeholder="MM/YY" className="w-full"/>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="cvc" className="text-sm font-medium text-start">
                        CVC
                    </label>
                    <Input id="cvc" placeholder="123" className="w-full"/>
                </div>
            </div>
        </div>
    );
}

export default AddTenantsSetup;