"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import links_list from '@/data/links.json';

const links = links_list.links;

function isLinkValid(link: string) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].name.toLocaleLowerCase() === link.toLocaleLowerCase()) return links[i].href;
    }
    return false;
}

const Redirection = () => {
    // get link parameter from url and redirect to it
    const urlParams = useSearchParams();
    const link = urlParams.get('link');

    useEffect(() => {
        console.log(`Link: ${link}`);
        
        if (link === null) return;
        let url = isLinkValid(link);
        if (!url) return;
        console.log(`Redirecting to ${url}`);
        window.location.assign(url);
    }, []);

    return (<></>);
}

export default Redirection;