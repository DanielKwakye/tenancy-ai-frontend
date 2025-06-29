import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { defineStepper } from '@stepperize/react';

const { useStepper, utils } = defineStepper(
    {
        id: 'shipping',
        title: 'Your name',
        description: 'Enter your name and click next',
    },
    {
        id: 'payment',
        title: 'Contact details',
        description: 'We need your contact details only for notifications and reminders. Your details are kept confidential',
    },
    { id: 'complete', title: 'Complete', description: 'Checkout complete' }
);

function TenantSetupPage() {
    const stepper = useStepper();

    const currentIndex = utils.getIndex(stepper.current.id);

    return (
        <div className="flex flex-col gap-12 items-stretch md:flex-row md:h-screen p-6">

            {/*  Form content  */}
            <div className={"md:flex-1 md:flex md:justify-center md:items-center"}>
                <div className="space-y-6 w-full md:px-20">
                    <div className="flex items-center gap-4">
                        <StepIndicator
                            currentStep={currentIndex + 1}
                            totalSteps={stepper.all.length}
                        />
                        <div className="flex flex-col">
                            <h2 className="flex-1 text-lg font-medium">
                                {stepper.current.title}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {stepper.current.description}
                            </p>
                        </div>
                    </div>
                    {stepper.switch({
                        shipping: () => <ShippingComponent/>,
                        payment: () => <PaymentComponent/>,
                        complete: () => <CompleteComponent/>,
                    })}
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
                            <Button onClick={stepper.reset}>Reset</Button>
                        )}
                    </div>
                </div>
            </div>
            {/*  End of content  */}

            <div
                className={'md:flex-1 md:h-full rounded-lg bg-gradient-to-tr from-[#641713] via-[#7a1a17] to-[#991f1a] p-4 md:p-16 flex flex-col gap-12 md:justify-center w-full'}>

                {/*  */}
                <div className="space-y-4">
                    <h1 className="text-primary-foreground text-2xl font-bold tracking-wide">
                        Ms. Greeva Navadiya's Property
                    </h1>
                    {/*Our AI learns from your rental history, track rent, send automatic reminders,
                        manage tenants, and prepare for taxes*/}
                    <p className="text-primary-foreground tracking-wide">On this page you will setup as a tenant</p>
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
                                <h3 className="text-white font-medium text-lg">Your personal information</h3>
                                <p className="text-white/80 text-sm mt-1">
                                    Your personal information is kept confidential and only used for its intended purpose
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
                                <h3 className="text-white font-medium text-lg">Reminders</h3>
                                <p className="text-white/80 text-sm mt-1">We will notify you via TEXT and email so you don't miss payment deadlines</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    size?: number;
    strokeWidth?: number;
}

const StepIndicator = ({
                           currentStep,
                           totalSteps,
                           size = 80,
                           strokeWidth = 6,
                       }: StepIndicatorProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const fillPercentage = (currentStep / totalSteps) * 100;
    const dashOffset = circumference - (circumference * fillPercentage) / 100;

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={size} height={size}>
                <title>Step Indicator</title>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-muted-foreground"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    className="text-primary transition-all duration-300 ease-in-out"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium" aria-live="polite">
          {currentStep} of {totalSteps}
        </span>
            </div>
        </div>
    );
};

const ShippingComponent = () => {
    return (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-start">
                    Name
                </label>
                <Input id="name" placeholder="eg. John Doe" className="w-full"/>
                <div className={"text-muted-foreground text-sm"}>We only use your name for identification purposes.
                </div>
            </div>
        </div>
    );
};

const PaymentComponent = () => {
    return (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <label htmlFor="contact phone" className="text-sm font-medium text-start">
                    Contact phone
                </label>
                <Input
                    id="contact phone"
                    placeholder="eg. 709 327 6774"
                    className="w-full"
                />
            </div>
            <div className="grid gap-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-start">
                    Contact email
                </label>
                <Input
                    id="contact-email"
                    placeholder="eg. johndoe@gmail.com"
                    className="w-full"
                />
            </div>

        </div>
    );
};

const CompleteComponent = () => {
    return <h3 className="text-lg py-4 font-medium">Stepper complete 🔥</h3>;
};

export default TenantSetupPage;
