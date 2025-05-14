"use client";
import React, { useState } from 'react';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import Image from 'next/image';
import Link from "next/link";
import { createAccount, signInUser } from '@/lib/actions/user.actions';
import OtpModal from './OtpModal';

type FormType = "sign-in" | "sign-up"

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().min(1, { message: "Email is required" }).email(),
        fullName:
            formType === "sign-up"
                ? z.string()
                    .min(1, { message: "Full name is required" })
                    .min(2, { message: "Full name must contain at least 2 characters" })
                    .max(50, { message: "Full name must not exceed 50 characters" })
                : z.string().optional(),
    });
};


const AuthForm = ({ type }: { type: FormType }) => {
    const [isloading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [accountId, setAccountId] = useState(null);
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
        },
    });


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setErrorMessage("");

        try {
              if (type === "sign-in") {
                // Use the signInUser function for sign-in
                const response = await signInUser({
                    email: values.email,
                });
                
                if (response.error) {
                form.setError("email", { 
                    type: "manual", 
                    message: "Account not found. Please sign up first." 
                });
                return;
                }
                
                if (response.accountId) {
                    setAccountId(response.accountId);
                }
            } else {
                // Sign up flow using createAccount
                // The createAccount function already checks for existing users
                const user = await createAccount({
                    fullName: values.fullName || "",
                    email: values.email,
                });
                
                if (user.accountId) {
                    setAccountId(user.accountId);
                }
            }
        } catch {
            setErrorMessage("Failed to create account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
                    <h1 className='form-title'>
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    {type === "sign-up" && (
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="shad-form-item">
                                        <FormLabel className="shad-form-label">Full Name</FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Enter your full name"
                                                className="shad-input"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage className="shad-form-message" />
                                </FormItem>
                            )}
                        />)}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="shad-form-item">
                                    <FormLabel className="shad-form-label">Email</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className="shad-input"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage className="shad-form-message" />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='form-submit-button'>
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                        {isloading && (
                            <Image
                                src="/assets/icons/loader.svg"
                                alt="loader"
                                width={24}
                                height={24}
                                className="ml-2 animate-spin"
                            />
                        )}
                    </Button>

                    {errorMessage && <p className="error-message">*{errorMessage}</p>}

                    <div className="body-2 flex justify-center">
                        <p className="text-light-100">
                            {type === "sign-in"
                                ? "Don't have an account?"
                                : "Already have an account?"}
                        </p>
                        <Link
                            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className="ml-1 font-medium text-brand"
                        >
                            {" "}
                            {type === "sign-in" ? "Sign Up" : "Sign In"}
                        </Link>
                    </div>
                </form>
            </Form>


            {accountId && (
                <OtpModal email={form.getValues("email")} accountId={accountId} />
            )}
        </>
    );
};

export default AuthForm;