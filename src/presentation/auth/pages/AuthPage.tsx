import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {brandLogoImg} from "@/assets";
import SignIn from "@/presentation/auth/components/SignIn.tsx";
import Signup from "@/presentation/auth/components/Signup.tsx";

function AuthPage() {
    return (
        <div className="flex flex-col gap-12 md:gap-0 items-stretch md:flex-row md:h-screen p-6">
            <div className={'md:flex-1 md:flex md:justify-center md:p-16 w-full'}>

                <div className={"flex flex-col md:min-w-sm space-y-8 md:space-y-12"}>

                    <div className={"inline-flex items-end"}>
                        <img src={brandLogoImg} alt="logo" className={"scale-125"}/>
                        {/*<span className="text-sm tracking-wider text-primary font-bold">roperties park</span>*/}
                    </div>

                    <div className="text-start">
                        <h1 className={"text-2xl font-bold"}>Get Started Now</h1>
                        <p className="text-sm text-slate-500">Enter credentials to access your account</p>
                    </div>

                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className={"w-full rounded p-0 mb-8"}>
                            <TabsTrigger className={"rounded-r-none data-[state=active]:rounded-l data-[state=active]:rounded-r-none shadow-none data-[state=active]:shadow-none  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"} value="login">Login</TabsTrigger>
                            <TabsTrigger className={"rounded-l-none data-[state=active]:rounded-r data-[state=active]:rounded-l-none shadow-none data-[state=active]:shadow-none  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"} value="signup">Sign up</TabsTrigger>
                        </TabsList>
                        <TabsContent className={""} value="login">
                            <SignIn />
                        </TabsContent>
                        <TabsContent value="signup">
                            <Signup />
                        </TabsContent>
                    </Tabs>

                </div>

            </div>
            <div className={'md:flex-1 md:h-full rounded-lg bg-gradient-to-tr from-[#641713] via-[#7a1a17] to-[#991f1a] p-4 md:p-16 flex flex-col gap-12 md:justify-center w-full'}>

                {/*  */}
                <div className="space-y-4">
                    <h1 className="text-primary-foreground text-2xl font-bold tracking-wide">
                        Meet your AI Rental Assistant
                    </h1>
                    {/*Our AI learns from your rental history, track rent, send automatic reminders,
                        manage tenants, and prepare for taxes*/}
                    <p className="text-primary-foreground tracking-wide">AI powered tool for property owners</p>
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
                                <h3 className="text-white font-medium text-lg">Automatic reminders</h3>
                                <p className="text-white/80 text-sm mt-1">AI-powered reminders detect payment delays and notify tenants at the right time—so you don’t have to.</p>
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
                                <h3 className="text-white font-medium text-lg">Track rent</h3>
                                <p className="text-white/80 text-sm mt-1">Effortlessly monitor rent activity with smart insights that flag patterns and potential issues.</p>
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
                                <h3 className="text-white font-medium text-lg">Manage expenses</h3>
                                <p className="text-white/80 text-sm mt-1">Easily track property-related expenses like
                                    repairs, utilities, and maintenance — just snap a receipt and let AI handle the
                                    rest.</p>
                            </div>
                        </div>
                    </div>
                    <div className={"bg-white/10 p-4 rounded-lg"}>
                        <div className="flex items-start">
                            <div className={"w-[20%] md:w-auto"}>
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">4
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-medium text-lg">Prepare for taxes</h3>
                                <p className="text-white/80 text-sm mt-1">Get AI-assisted tax summaries that organize
                                    your income and deductions for CRA-ready reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AuthPage;