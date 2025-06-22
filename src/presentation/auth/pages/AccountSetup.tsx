import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { defineStepper } from '@stepperize/react';
import AddPropertiesSetup from "@/presentation/auth/components/AddPropertiesSetup.tsx";
import AddTenantsSetup from "@/presentation/auth/components/AddTenantsSetup.tsx";
import CompleteAccountSetup from "@/presentation/auth/components/CompleteAccountSetup.tsx";
import {useNavigate} from "react-router";


const { useStepper, steps, utils } = defineStepper(
    {
        id: 'shipping',
        title: 'Add Properties',
        description: 'Enter your shipping details',
    },
    {
        id: 'payment',
        title: 'Add Tenants',
        description: 'Enter your payment details',
    },
    { id: 'complete', title: 'Complete', description: 'Checkout complete' }
);

function AccountSetup() {

    const navigate = useNavigate();
    const stepper = useStepper();

    const currentIndex = utils.getIndex(stepper.current.id);

    return (
        <div className="flex flex-col gap-12 md:gap-0 items-stretch md:flex-row md:h-screen p-6">
            <div className={'md:flex-2 md:flex md:justify-center md:items-center md:p-16 w-full'}>

                <div className={"flex flex-col md:min-w-lg space-y-8 md:space-y-12"}>

                    <div className="space-y-6 rounded-lg w-full">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-medium">Account Setup</h2>
                            <div className="flex items-center gap-2">
                                      <span className="text-sm text-muted-foreground">
                                        Step {currentIndex + 1} of {steps.length}
                                      </span>
                                <div/>
                            </div>
                        </div>
                        <nav aria-label="Checkout Steps" className="group my-4">
                            <ol className="flex flex-col gap-2" aria-orientation="vertical">
                                {stepper.all.map((step, index, array) => (
                                    <React.Fragment key={step.id}>
                                        <li className="flex items-center gap-4 flex-shrink-0">
                                            <Button
                                                type="button"
                                                role="tab"
                                                variant={index <= currentIndex ? 'default' : 'secondary'}
                                                aria-current={
                                                    stepper.current.id === step.id ? 'step' : undefined
                                                }
                                                aria-posinset={index + 1}
                                                aria-setsize={steps.length}
                                                aria-selected={stepper.current.id === step.id}
                                                className="flex size-10 items-center justify-center rounded-full"
                                                onClick={() => stepper.goTo(step.id)}
                                            >
                                                {index + 1}
                                            </Button>
                                            <span className="text-sm font-medium">{step.title}</span>
                                        </li>
                                        <div className="flex gap-4">
                                            {index < array.length - 1 && (
                                                <div
                                                    className="flex justify-center"
                                                    style={{
                                                        paddingInlineStart: '1.25rem',
                                                    }}
                                                >
                                                    <Separator
                                                        orientation="vertical"
                                                        className={`w-[1px] h-full ${
                                                            index < currentIndex ? 'bg-primary' : 'bg-muted'
                                                        }`}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 my-4">
                                                {stepper.current.id === step.id &&
                                                    stepper.switch({
                                                        shipping: () => <AddPropertiesSetup/>,
                                                        payment: () => <AddTenantsSetup/>,
                                                        complete: () => <CompleteAccountSetup/>,
                                                    })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </ol>
                        </nav>
                        <div className="space-y-4">
                            {!stepper.isLast ? (
                                <div className="flex justify-end gap-4">
                                    <Button
                                        variant="secondary"
                                        onClick={stepper.prev}
                                        disabled={stepper.isFirst}
                                    >
                                        Back
                                    </Button>
                                    <Button onClick={stepper.next}>
                                        {stepper.isLast ? 'Complete' : 'Next'}
                                    </Button>
                                </div>
                            ) : (
                                // <Button onClick={stepper.reset}>Continue</Button>
                                <Button onClick={() => {
                                    navigate("/account/landlord")
                                }}>Finish</Button>
                            )}
                        </div>
                    </div>

                </div>

            </div>
            <div
                className={'md:flex-1 md:h-full rounded-lg bg-gradient-to-tr from-[#641713] via-[#7a1a17] to-[#991f1a] p-4 md:p-16 flex flex-col gap-12 md:justify-center w-full'}>

                {/*  */}
                <div className="space-y-4">
                    <h1 className="text-primary-foreground text-2xl font-bold tracking-wide">
                        Almost there
                    </h1>
                    {/*Our AI learns from your rental history, track rent, send automatic reminders,
                        manage tenants, and prepare for taxes*/}
                    <p className="text-primary-foreground tracking-wide">On this page you will do the following</p>
                </div>


                <div className={"flex flex-col gap-8"}>
                    <div className={"bg-white/10 p-4 rounded-lg"}>
                        <div className="flex items-start">

                            <div className={"w-[20%] md:w-auto"}>
                                <div
                                    className=" h-10 w-10 flex  items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">1
                                </div>
                            </div>

                            <div className="w-full">
                                <h3 className="text-white font-medium text-lg">Add your properties</h3>
                                <p className="text-white/80 text-sm mt-1">
                                    Use any name to help you identify the property. It can be the property address
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"bg-white/10 p-4 rounded-lg"}>
                        <div className="flex items-start">
                            <div className={"w-[20%] md:w-auto"}>
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">2
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-medium text-lg">Add your tentants</h3>
                                <p className="text-white/80 text-sm mt-1">Associate your tentants to the properties you
                                    added in the step above</p>
                            </div>
                        </div>
                    </div>
                    <div className={"bg-white/10 p-4 rounded-lg"}>
                        <div className="flex items-start">
                            <div className={"w-[20%] md:w-auto"}>
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">3
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-medium text-lg">Review and Complete Setup</h3>
                                <p className="text-white/80 text-sm mt-1">Once you're done you will be taken directly to
                                    the portal</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}


export default AccountSetup;
