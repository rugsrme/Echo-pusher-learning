import React, { useState, useLayoutEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const user = props.auth.user;

    const GotMessage = () => {
        const [loggedIn, setLoggedIn] = useState();
        Echo.join("video")
            .here((users) => {})
            .joining((user) => {
                setLoggedIn(user.name);
            })
            .leaving((user) => {
                setLoggedIn(user.name);
            });
        return <p>{loggedIn} Is Logged in</p>;
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <GotMessage />
            </div>
        </Authenticated>
    );
}
